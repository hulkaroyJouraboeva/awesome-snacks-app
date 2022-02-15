import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeartHealth from './HeartHealth';

export default function SnackDetails() {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [ snack, setSnack ] = useState([]);
    const { id } = useParams();
    const { name, image, fiber, protein, added_sugar, is_healthy } = snack;

    useEffect(() => {
        axios
            .get(`${API}/snacks/${id}`)
            .then((response) => {
                setSnack(response.data.payload)
            })
            .catch((error) => console.warn(error));
    }, [API, id]);

    const handleDelete = () => {
        axios
            .delete(`${API}/snacks/${id}`)
            .then(() => navigate('/snacks'))
            .catch((error) => console.warn(error));
    };

    return (
        <article className='SnackDetails'>
            <aside className='card'>
                <h4>the snack health </h4>
                <HeartHealth snackHealth={is_healthy} />
            </aside>
            <div>
                <h5>{name}</h5>
                <img src={image} alt={`visual of ${name}`} />
                <h6>Protein: {protein}</h6>
                <h6>Fiber: {fiber}</h6>
                <h6>Added Sugar: {added_sugar}</h6>
            </div>

            <div className='showNavigation'>
                <div>
                    <a href='/snacks'>
                        <button>Back</button>
                    </a>
                </div>
                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                <div>
                    <Link to={`/snacks/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
            </div>
        </article>
    );
};
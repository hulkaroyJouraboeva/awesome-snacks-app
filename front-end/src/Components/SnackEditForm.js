import axios from "axios";
import HeartHealth from "./HeartHealth";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function SnackEditForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    const [ snack, setSnack ] = useState({
        name: '',
        image: '',
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        is_healthy: false
    });

    useEffect(() => {
        axios
            .get(`${API}/snacks/${id}`)
            .then((response) => {
                const { name, image, fiber, protein, added_sugar, is_healthy } = response.data.payload;
                setSnack({
                    name,
                    image,
                    fiber,
                    protein,
                    added_sugar,
                    is_healthy
                });
            })
            .catch((error) => console.warn(error))
    }, [API, id]);

    const handleTextChange = (event) => {
       setSnack({...snack, [event.target.id]: event.target.value }); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSnack(snack, id);
    };

    const updateSnack = (updatedSnack, id) => {
        axios
            .put(`${API}/snacks/${id}`, updatedSnack)
            .then(() => navigate(`/snacks`), (error) => console.error(error))
            .catch((error) => console.warn("warn", error));
    };

    const { name, image, fiber, protein, added_sugar, is_healthy } = snack;
    return (
        <div className="SnackEditForm">
            <HeartHealth snackHealth={is_healthy} />
            <img src={image} alt={name} />
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="image">Image:</label>
                    <input
                        id="image"
                        type="text"
                        value={image}
                        placeholder="URL for snack's image"
                        onChange={handleTextChange}
                    />
                <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        value={name}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="name of the snack"
                        required
                    />
                <label htmlFor="fiber">Fiber:</label>
                    <input
                        id="fiber"
                        type="number"
                        name="fiber"
                        value={fiber}
                        placeholder="snacks's fiber count"
                        onChange={handleTextChange}
                    />
                <label htmlFor="protein">Protein:</label>
                    <input
                        id="protein"
                        type="number"
                        name="protein"
                        value={protein}
                        placeholder="snacks's protein count"
                        onChange={handleTextChange}
                    />
                <label htmlFor="added_sugar">Added Sugar:</label>
                    <input
                        id="added_sugar"
                        type="number"
                        name="added_sugar"
                        value={added_sugar}
                        placeholder="snacks's added sugar count"
                        onChange={handleTextChange}
                    />
                <br />
                <button type="submit">Submit</button>
            </form>
            
            <Link to={`/snacks/${id}`}>
                <button>Never mind!</button>
            </Link>
        </div>
    );
};
import axios from "axios";
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

    const { name, image, fiber, protien, added_sugar, is_healthy } = snack;
    return (
        <div className="SnackEditForm">

        </div>
    );
};
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeartHealth from "./HeartHealth";

export default function NewSnack() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
  });

  const handleChange = (event) => {
    console.log(event.target.id, event.target.value);

    event.target.id === "fiber" ||
    event.target.id === "protein" ||
    event.target.id === "added_sugar"
      ? setSnack({
          ...snack,
          [event.target.id]: Number(event.target.value),
        })
      : setSnack({
          ...snack,
          [event.target.id]: event.target.value,
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/snacks`, snack)
      .then(() => {
        navigate("/snacks");
      })
      .catch((err) => console.warn(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleChange}
          required
          placeholder="Name of Snack"
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          value={snack.image}
          pattern="http[s]*://.+"
          type="text"
          onChange={handleChange}
          required
          placeholder="http://"
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          value={snack.fiber.toString()}
          type="number"
          onChange={handleChange}
          required
          placeholder="Fiber"
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          value={snack.protein.toString()}
          type="number"
          onChange={handleChange}
          required
          placeholder="protein"
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          value={snack.added_sugar.toString()}
          type="number"
          onChange={handleChange}
          required
          placeholder="Added sugar"
        />

        <input type="submit" />
      </form>
    </>
  );
}

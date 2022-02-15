// import SolidHeart from "../assets/heart-solid.png"
// import RegularHeart from "../assets/heart-regular.png"
import HeartHealth from "./HeartHealth";
import { Link } from "react-router-dom";

export default function Snack({ snack }) {
  return (
    <>
      <img src={snack.image} alt="visual of the snack" />
      <h4>
        {snack.name} <HeartHealth snackHealth={snack.is_healthy} />
      </h4>

      <Link to={`/snacks/${snack.id}`}>show</Link>
    </>
  );
}

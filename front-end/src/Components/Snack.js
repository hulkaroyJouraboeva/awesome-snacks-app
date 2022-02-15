// import SolidHeart from "../assets/heart-solid.png"
// import RegularHeart from "../assets/heart-regular.png"
import HeartHealth from "./HeartHealth";
import { Link, useParams } from "react-router-dom";

export default function Snack({ snack }) {
  return (
    <>
      <img src={snack.image} />
      <h4>
        {snack.name} <HeartHealth snackHealth={snack.is_healthy} />
      </h4>

      {/* <button><a href={URL}>Show</a></button> */}
      <Link to={`/snacks/${snack.id}`}>show</Link>
    </>
  );
}

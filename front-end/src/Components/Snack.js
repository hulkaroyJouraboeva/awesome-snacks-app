import HeartHealth from "./HeartHealth";
import { Link } from "react-router-dom";

export default function Snack({ snack }) {
  return (
    <>
      <Link to={`/snacks/${snack.id}`}>
        <img src={snack.image} alt={snack.name} />
        <h4>
          {snack.name} <HeartHealth snackHealth={snack.is_healthy} />
        </h4>
      </Link>
    </>
  );
}

import HeartHealth from "./HeartHealth";
import { Link } from "react-router-dom";

export default function Snack({ snack }) {
  return (
    <article>
      <Link to={`/snacks/${snack.id}`}>
        {/* <h4>{snack.name}</h4> */}
        <img src={snack.image} alt={snack.name} />
        <div>
          <h4>
            {snack.name}
            <HeartHealth snackHealth={snack.is_healthy} />
          </h4>
        </div>
      </Link>
    </article>
  );
}

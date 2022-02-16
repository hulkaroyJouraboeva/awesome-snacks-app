import HeartHealth from "./HeartHealth";
import { Link } from "react-router-dom";

export default function Snack({ snack }) {
  return (
    <article>
      <Link to={`/snacks/${snack.id}`}>
        <img src={snack.image} alt={snack.name} />
        <div>
          <h4>
            <HeartHealth snackHealth={snack.is_healthy} />
          </h4>
          {snack.name}
        </div>
      </Link>
    </article>
  );
}

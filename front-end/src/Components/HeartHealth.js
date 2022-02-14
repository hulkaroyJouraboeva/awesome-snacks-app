import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (
    <>
      <p>
        snackHealth 
        ? <img src={heartSolid} alt="filled heart indicating the snack is healthy" />
        : <img src={heartOutline} alt="empty heart indicating the snack is not healthy" />
      </p>
    </>
  );
}

export default HeartHealth;

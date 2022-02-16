import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

export default function Snacks() {
  // REACT HOOK
  const [snacks, setSnacks] = useState([]);

  // API

  const API = process.env.REACT_APP_API_URL;
  // Requesting to receive data from Heroku app
  useEffect(() => {
    const fetchData = async () => {
      console.log("Hitting the useEffect for Index");
      const res = await axios.get(`${API}/snacks`);
      setSnacks(res.data.payload);
      console.log(res);
    };
    fetchData();
  }, []);

  console.log(snacks);

  return (
    <main>
      <section className="Snacks">
        <article>
          <div className="Snack">
            {snacks.map((each) => {
              return <Snack snack={each} key={each.id} />;
            })}
          </div>
        </article>
      </section>
    </main>
  );
}

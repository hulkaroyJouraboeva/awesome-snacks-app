import { Link } from "react-router-dom";

export default function NavBar () {

    return (

        <nav>
            <Link to="/"><h1>Snacks</h1></Link>
            <Link to="/snacks/new">New Snack</Link>
        </nav>


    )
}
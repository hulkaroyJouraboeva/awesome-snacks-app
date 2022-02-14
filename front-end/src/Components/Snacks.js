import axios from "axios"
import { useState, useEffect } from "react"
import Snack from "./Snack";


export default function Snacks () {

// REACT HOOK
const [snacks, setSnacks] = useState([])


// API
const API = process.env.REACT_APP_API_URL;

// Requesting to receive data from Heroku app
useEffect (() => {
    const fetchData = async () => {
        console.log("Hitting the useEffect for Index")
        const res = await axios.get(`https://fullstack-snack-app.herokuapp.com/snacks`)
        setSnacks(res.data)
    }
    fetchData()
}, []);

console.log(snacks)

return (
    <main>
        

        <selection className="Snacks">
        <article className="Snacks">
            <div className="Snack">  { snacks.map((each) => {
        return <Snack snack ={each} key={each.id} />
    })}s</div>
        </article>

        </selection>
 
    </main>
)


}
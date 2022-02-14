import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import "./Styles/index.css"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/snacks" element={<Index />}/>


      </Routes>
    </div>
  );
}

export default App;

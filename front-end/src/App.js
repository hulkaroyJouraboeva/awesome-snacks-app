import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";

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

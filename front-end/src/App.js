import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './Pages/Edit';
import Show from './Pages/Show';
import Index from "./Pages/Index";

import NavBar from "./Components/NavBar";
import "./Styles/index.css"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main>
        <Routes>
          <Route path="/snacks" element={<Index />} />
          <Route exact path='/snacks/:id' element={<Show />} />
          <Route path='/snacks/:id/edit' element={<Edit />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
};
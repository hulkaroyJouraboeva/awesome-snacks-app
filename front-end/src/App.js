import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './Pages/Edit';
import Show from './Pages/Show';

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path='/snacks/:id' element={<Show />} />
          <Route path='/snacks/:id/edit' element={<Edit />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
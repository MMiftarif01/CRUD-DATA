
import './App.css';

import AddData from './components/AddData';
import AllData from './components/AllData';
import AppCrud from './components/AppCrud';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditData from './components/EditData';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AppCrud />} />
        <Route path="/all" element={<AllData />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

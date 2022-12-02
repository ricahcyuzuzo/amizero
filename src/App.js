import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './pages/Landing';
import Appointment from './pages/Appointment';
import Products from './pages/Products';

function App() {
  return (
    <div className="bg-[#4D335E] w-full h-fit">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

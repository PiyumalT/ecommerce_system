import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddCart from './components/AddCart/AddCart';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {


  return (
    
        <div className="App">
          <Routes>
            <Route path="/addcart" element={<><Header/><AddCart/></>}/>
            <Route path="/" element={<><Header/><Navbar/><Home/><Footer/></>}/> 
          </Routes>
        </div>
  );
  
}

export default App;

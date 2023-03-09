import './App.css';
import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
//import Login from './Login/Login';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navabar'
//import{auth} from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {


  return (
        <div className="App">
          <Routes>
            <Route path="/checkout" element={<><Header/><Checkout/></>}/>
            {/*<Route path="/login" element={<Login/>}/>*/}
            <Route path="/" element={<><Header/><Navbar/><Home/><Footer/></>}/> 
          </Routes>
        </div>
  );
  
}

export default App;

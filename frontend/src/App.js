import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
//import Login from './Login/Login';
import Home from './pages/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navabar'




//import{auth} from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ';
import Contact_Us from './pages/Contact_Us/Contact_Us';

import AdminNavBar from './components/AdminNavBar/AdminNavBar';
import AdminDashbord from './pages/AdminDashbord/AdminDashbord';
import AddProduct from './pages/AddProduct/AddProduct';




function App() {


  return (
        <div className="App">
          <Routes>
            <Route path="/checkout" element={<><Header/><Checkout/></>}/>
            {/*<Route path="/login" element={<Login/>}/>*/}
            <Route path="/" element={<><Header/><Navbar/><Home/><Footer/></>}/>
            <Route path="/About" element={<><About/></>}/>
            <Route path="/FAQ" element={<><FAQ/></>}/>
            <Route path="/Contact_Us" element={<><Contact_Us/></>}/>
            <Route path="/AdminDashbord" element={<><AdminNavBar/><AdminDashbord/><Footer/></>}/>
            <Route path="/AddProduct" element={<><AdminNavBar/><AddProduct/><Footer/></>}/>
          </Routes>
          
          
            
          

          
        </div>
  );
  
}

export default App;

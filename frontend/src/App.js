import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
//import Login from './Login/Login';
import Home from './pages/Home/Home';
import AddCart from './components/AddCart/AddCart';
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navabar'
import SearchResults from './components/SearchResults/SearchResults';
import Cart from './pages/Cart/Cartpage';



//import{auth} from './firebase';
//import { useStateValue } from './StateProvider';
//import { useEffect } from 'react';
import About from './pages/About/About';
import FAQ from './pages/FAQ/FAQ';

import Contact_Us from './pages/Contact_Us/Contact_Us';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import Emailsent from './pages/Emailsent/Emailsent';

import ProductInfo from './pages/ProductInfo/ProductInfo';
import UserAccountHome from './pages/UserAccount/UserAccountHome';
import ViewOrders from './pages/UserAccount/ViewOrders';
import EditUserInfo from './pages/UserAccount/EditUserinfo';
import PlaceOrder from './pages/Checkout/Checkout';
import OrderStatus from './pages/Checkout/OrderStatus';

import AdminNavBar from './components/AdminNavBar/AdminNavBar';
import AdminDashbord from './pages/AdminDashbord/AdminDashbord';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductList from './pages/ProductList/ProductList';
import UsersList from './pages/UsersList/UsersList';
import SalesList from './pages/SalesList/SalesList';






function App() {


  return (
        <div className="App">
          <div>
            <Routes>
            <Route path="/addcart" element={<><Header/><AddCart/></>}/>
            {/*<Route path="/login" element={<Login/>}/>*/}
            <Route path="/" element={<><Header/><Navbar/><Home/><Footer/></>}/>
            <Route path="/About" element={<><About/></>}/>
            <Route path="/FAQ" element={<><FAQ/></>}/>
            <Route path="/ProductInfo/*" element={<><Header/><Navbar/><ProductInfo/><Footer/></>}/>
            <Route path="/Contact_Us" element={<><Contact_Us/></>}/>
            <Route path="/SignIn" element={<><SignIn/></>}/>
            <Route path="/register" element={<><Register/></>}/>
            <Route path="/Emailsent" element={<><Emailsent/></>}/>
            
            <Route path="/userAccount" element={<><UserAccountHome/></>}/>
            <Route path="/ViewOrders" element={<><ViewOrders/></>}/>
            <Route path="/EditUserInfo" element={<><EditUserInfo/></>}/>
            <Route path="/Placeorder/*" element={<><PlaceOrder/></>}/>
            <Route path="/OrderStatus/*" element={<><OrderStatus/></>}/>



            <Route path="/AdminDashbord" element={<><AdminNavBar/><AdminDashbord/><Footer/></>}/>
            <Route path="/AddProduct" element={<><AdminNavBar/><AddProduct/><Footer/></>}/>
            <Route path="/ProductList" element={<><AdminNavBar/><ProductList/><Footer/></>}/>
            <Route path="/UsersList" element={<><AdminNavBar/><UsersList/><Footer/></>}/>
            <Route path="/SalesList" element={<><AdminNavBar/><SalesList/><Footer/></>}/>
             <Route path="/SearchResults" element={<><SearchResults/></>}/> 
             <Route path="/AddCart/*" element={<><Cart/></>}/>

          </Routes>
          </div>
          
          
          
          
          
            
          

          
        </div>
  );
  
}

export default App;

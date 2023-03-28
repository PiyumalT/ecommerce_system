import react from "react";
import "./signup.css"
import "./navbar.css"
import "./footer.css"

function SignUp(){
    return (
        
        <div class="main">
            <div class="navbar">
                <div class="icon">
                    <a href="index.php">
                        <img src="D:\campus 2nd year\2nd semester\SENG-22212-software architecture\test\site_img\logo.jpg"/>

                    </a>
                </div>
                <div class="search">
                    <form >
                        <input class="search" id="search-bar" name="search" placeholder="Search Items" type="search"/>
                        <button class="btn"><label for="search-bar"><i class="fa-solid fa-magnifying-glass"></i></label>
                        </button>
                    </form>
                </div>

                <div class="menu">
                    <ul>
                        <li><a href="./cart.php">Cart</a></li>
                        <li><a href="./account.php">Account</a></li>
                        <li><a href="./logout.php">Logout</a></li>
                    </ul>
               </div>

            </div>

            <div class="navbar2">
                <ul>
                    <li>
                        <div class="car">
                            <a href="./search.php?search=car">Car Part</a>
                        </div>

                    </li>

                    <li>
                        <div class="Motor">
                            <a href="./search.php?search=Motorcycle">Motorcycle Part</a>
                        </div>
                    </li>

                    <li>
                        <div class="other">
                            <a href="./search.php?search=other">Other Part</a>
                        </div>
                    </li>

                    <li>
                        <div class="tools">
                            <a href="./search.php?search=tools">Tools</a>
                        </div>

                    </li>

                    <li>
                        <div class="tyres">
                            <a href="./search.php?search=tyres">Tyres</a>
                        </div>
                    </li>

                    <li>
                        <div class="access">
                            <a href="./search.php?search=Accessories">Accessories</a>
                        </div>
                    </li>

                </ul>
            </div>


            <div className="form-box">
                    <h1>Create new account</h1>
                    <label for="email">Email:</label>
                    <input type="text" name="email"/>
                    <br></br>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="password" name="password"/>
                    <br></br>
                    <br></br>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" name="confirm password"/>
                    <br></br>
                    <br></br>
                    <input type="submit" value="create account" name="submit"/>
                    <br></br>
                    <a href="login.js" >Already have an account? Login here</a>
           </div>

           <div class="footer-container">
                    <div class="footer-left">
                        <nav>
                            <a href="contactus.html">Contact Us</a>
                            <ul>
                                <li><a href="contactus.html">FB</a></li>
                                <li><a href="contactus.html">YT</a></li>
                                <li><a href="contactus.html">Email</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="footer-center">
                        <nav>
                            <a href="FAQ.html">Shopping</a>
                                <ul>
                                    <li><a href="FAQ.html">FAQ</a></li>
                                    <li><a href="FAQ.html">Payment Method</a></li>
                                    <li><a href="FAQ.html">User Guide</a></li>
                                </ul>
                        </nav>
                    </div>
                    <div class="footer-right">
                        <nav>
                        <a href="about.html">Company</a>
                            <ul>
                                <li><a href="about.html">Terms and Conditions</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="about.html">Privacy Policy</a></li>
                            </ul>
                        </nav>
                    </div>

            </div>
        </div>
        
    )
}

export default SignUp
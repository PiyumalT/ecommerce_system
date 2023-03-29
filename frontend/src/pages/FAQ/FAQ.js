import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navabar'
import './faq.css'



export default function FAQ() {
  return (
    <div>
        <Header/>
        <Navbar/>

      <div className="middle">
        <div class="container">
         <div class="box">
           <h1>FAQ Page</h1><br/>
            <div>
                <h3 class="question">What types of parts do you sell?</h3>
                <p class="answer">We sell a wide variety of automobile parts, including engine parts, suspension parts, braking systems, electrical components, and more.</p>
            <br/><br/>
            </div>
            <div>
                <h3 class="question">How can I find the specific part I need for my vehicle?</h3>
                <p class="answer">You can use our search function to find the specific part you need by entering your vehicle's make, model, and year. You can also browse by category or use our advanced search options to filter by brand, price, and more.</p>
                <br/><br/>
            </div>
            <div>
                <h3 class="question">Do you offer any warranties or guarantees on your products?</h3>
                <p class="answer">Yes, we offer a limited warranty on all of our products, and we stand behind the quality of our products.</p>
                <br/><br/>
            </div>
            <div>
                <h3 class="question">What is your return policy?</h3>
                <p class="answer">We accept returns within 30 days of purchase, as long as the item is in new and unused condition. Please contact us for more information on how to initiate a return.</p>
                <br/><br/>
            </div>
            <div>
                <h3 class="question">How do I place an order?</h3>
                <p class="answer">You can place an order on our website by adding items to your cart and proceeding to checkout. You can also place an order by phone or email if you prefer.</p>
                <br/><br/>
            </div>
            <div>
                <h3 class="question">How long will it take for my order to arrive?</h3>
                <p class="answer">The arrival time of your order depends on the shipping method you choose and your location. You can see the estimated arrival time during the checkout process.</p>
                <br/><br/>
            </div>
            <div>
            <h3 class="question">Do you offer international shipping?</h3>
            <p class="answer">Yes, we offer international shipping to most countries. Please contact us for more information about international shipping options and rates.</p>
            <br/><br/>
            </div>
         </div>
        </div>
       


      </div>

        <Footer/>
    </div>

  )
}


    

import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div>
        <section>
       
          <div className='contact-container'>
            
            <form action='' className='contact-name'>
              <div className='contact-left-title'>
                <h2> Get in Touch </h2>
                <br></br>
              </div>
              <input type='text' name='name' placeholder='Your Name' class="contact-inputs"></input>
              <input type='email' name='email' placeholder='Your Email' class="contact-inputs"></input>
              <textarea  name='message' placeholder='Your Message' class="contact-inputs"/>
              <button type='submit'>Send Message </button> <br></br>
            </form>
          
              <div className='contact-context'>
              
                <p>
                <ul>
                  <ol>Contact Us</ol>
                  <p>
                    <ol><h1>
                    Do you have any question?
                    </h1></ol>
                    <ol> 
                    We’re excited to connect with you! At Shivs Creations ,
                    we’re dedicated to guiding you in finding the ideal pieces to enhance your spiritual environment and celebrate your traditions.
                    Whether you’re curious about our products, need help with an order, or wish to explore our collections, we’re here to make your experience smooth and enjoyable.


                    </ol>
                  </p> <br></br> <br></br> 
                  <ol><h3> Reach Out to Us </h3></ol>
                  <ol><strong>Email: </strong>info@.com</ol>
                  <ol><strong>Phone:</strong> +91-XXXXXXX (Mon to Sat, 10:00 AM - 6:00 PM IST)</ol>
                  <ol><strong>WhatsApp: </strong>Chat with us for quick support and inquiries.</ol>
                </ul>
                </p>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
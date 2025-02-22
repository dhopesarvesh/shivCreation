import React from "react";
import "./contact.css";

const ContactForm = () => {
  return (
    <div className="container">
      <div className="form-container">
        {/* Form Section */}
        <div className="form-section">
          <h2>Fill the form.<br />It's easy.</h2>
          <form className="form">
            <div className="input-group">
              <input type="text" placeholder="First name" className="input" />
              <input type="text" placeholder="Last name" className="input" />
            </div>
            <input type="email" placeholder="Email" className="input" />
            <textarea placeholder="Write your message" className="textarea"></textarea>
            <button className="button">Send Message</button>
          </form>
        </div>
        
        {/* Text Section */}
        <div className="text-section">
          <h3>Let's talk about everything.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti atque similique magni.</p>
          <a href="#" className="read-more">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

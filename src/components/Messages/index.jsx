import React, { useState } from 'react';
import axios from 'axios';
import './styles.module.css'; // Import your CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:1221/api/contacts";
      const response = await axios.post(url, formData); // corrected FormData to formData
      console.log(response.data);
      // Optionally, you can show a success message or redirect the user after successful submission
    } catch (error) {
      console.error('Error submitting contact form:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="container">
        <span className="big-circle"></span>
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>
            <div className="info">
              <div className="information">
                <i className="fas fa-map-marker-alt"></i> &nbsp; &nbsp;
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <i className="fas fa-envelope"></i> &nbsp; &nbsp;
                <p>example@example.com</p>
              </div>
              <div className="information">
                <i className="fas fa-phone"></i>&nbsp; &nbsp;
                <p>123-456-789</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>
            <form action="/contacts" method="POST" autocomplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
      </form>
      <script src="app.js"></script>
    </>
  );
}

export default Contact;

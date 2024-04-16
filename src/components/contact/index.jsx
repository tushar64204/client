import React from 'react';
import './YourStylesheet.css'; // Import your stylesheet

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>NumericVeda Institute - One Stop Solution for Vedic Maths Learners</h1>

      <div className="contact-info">
        <h2>Contact Information:</h2>
        
       
        <p><strong>Director:</strong> Dr. Rakesh Bhatia</p>
        <p><strong>Mobile:</strong> +91-9466235578</p>
        <p><strong>Email:</strong> rakeshbhatia106@gmail.com</p>
        
         {/* Box parallel to the content */}
   <div className="contact-box">
        <h2>Feel Free to Contact</h2>
        <p>
          If you have any questions or need further assistance,<br></br> 
          feel free to reach out to us. We are here to help!
        </p>
        <p>Contact Email: rakeshbhatia106@gmail.com</p>
        <p>Contact Phone: +91-9466235578</p>
        <p>
        Empower students to progress from basic to <br></br>
        advanced mathematical concepts. Our <br></br>
        comprehensive learning program is designed<br></br> 
        to provide a structured and gradual learning <br></br>
        experience, ensuring that students build a strong<br></br>
        foundation before tackling more advanced topics.
      </p>
      </div>
    <div className="learning-program">
      <h2>Student Learning - Basic to Advance</h2>
      
      <p>
        <strong>Key Features:</strong>
      </p>
      <ul>
        <ol>
        <li>Step-by-step curriculum covering fundamental concepts.</li>
        <li>Interactive learning materials for better engagement.</li>
        <li>Regular assessments to track progress.</li>
        <li>Personalized feedback and guidance for improvement.</li>
        </ol>
      </ul>
      <p>
        Whether you are a beginner or looking to enhance your existing knowledge,<br></br>
        our student learning program provides the necessary resources and support<br></br>
        to help you succeed in your mathematical journey.
      </p>
      <a href="/Course.html" target='_blank'>Explore Student Learning Plan</a>
    </div>
  
      

    <div className="form-container">
      <form action="https://formspree.io/f/mrgnkqnv" method="POST">
        <h2>Have a question or need assistance!</h2>
        <label htmlFor="email">Your Email:</label>
        <input type="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea name="message" rows="4" required></textarea>

        <button type="submit">Send</button>
      </form>

      <div className="form-image">
        <img src="./assets/images/blog-1.jpg" width="60%" alt="Support Image" />
        
      </div>
    </div>

    </div>
    </div>

  );
};

export default ContactPage;

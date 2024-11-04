import React from 'react';
import './Contact.css'; // Make sure to create a corresponding CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>
        I’d love to hear from you! Whether you have a question, want to collaborate on a project, or just want to say hi, feel free to reach out. Fill out the form below or use one of the alternative methods to get in touch.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Other Ways to Connect</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:josephkams24@gmail.com">josephkams24@.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+2348106062697">+(234) 8106062697</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/josephkams/" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

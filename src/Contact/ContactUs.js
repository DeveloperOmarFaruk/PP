import React from 'react'
import "./Contact.css"
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();
    const contact = (e) => {
        navigate("/contact", { replace: true });
    }

    const contactShare = (e) => {
        navigate("/contact-share-story", { replace: true });
    }
  return (
    <>
    <div className="contact-section">
              <div className="contact-us-container">
                  <div className="contact-us-title">
                  <h4>Contact Us</h4>
                  <h5>Choose your inquiry topic below</h5>
                  </div>
                  

                  <div className="contact-us-link">
                      <button onClick={contactShare}>Share your protein writer success story</button>
                      <div>
                          <button onClick={contact}>Partnerships</button>
                          <button onClick={contact}>Media</button>
                      </div> 
                      <button onClick={contact}>Customer Support</button>
                  </div>
              </div>
          </div>
      </>
  )
}

export default ContactUs
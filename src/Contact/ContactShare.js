import React from 'react'
import "./Contact.css"

const ContactShare = () => {
  return (
      <>
          <div className="contact-section">
          <div className="contact-us-title">
                  <h5>Share your protein writer success story</h5>
              </div>
              
              <div>
              <form className="contact-share-form">
                      <div>
                      <label for="fname">Tell us story (what it was like designing protein sequences before and the improvements you made since becoming a Protein Writer).</label><br/>
  <textarea type="text" id="fname" name="fname" />
 </div>
                      <div>
                      <label for="lname">What led you to become a Protein Writer?</label><br/>
  <textarea type="text" id="lname" name="lname" />
                      </div>
                      
                      <div>
                      <label for="lname">What advice would you share with other Protein Writers to help them to be as successful as you are?</label><br/>
  <textarea type="text" id="lname" name="lname" />
  </div><br/><br/>
  <input type="submit" value="Submit" className="contact-submit-btn"/>
</form>
             
              </div>
      </div>
      </>
  )
}

export default ContactShare
import React from 'react'
import "./Contact.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




const Contact = () => {
  return (
      <>
          <div className="contact-section">
              <div className="contact-container">
          <div className="contact-left-container contact-col-3">
            <h2>Contact Us</h2>
            <p>Send us your question, comment, or compliment.</p>
            <form className="contact-form">
            <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
                  margin: "20px 0px"
      }}
    >
      <TextField fullWidth label="Name" id="fullWidth" type="text" />
              </Box>
              

              <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
        margin: "20px 0px"
      }}
    >
      <TextField fullWidth label="Email" id="fullWidth" type="email"/>
              </Box>


              <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
                  margin: "20px 0px",
                 
      }}
    >
      <TextField fullWidth id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4} />
              </Box>

              
              <input type="submit" placeholder='Submit' className="contact-submit-btn"/>
            </form>
          </div>
          

          <div className="contact-right-container contact-col-6">
           
            <iframe width="100%" height="465" id="gmap_canvas" src="https://maps.google.com/maps?q=%C4%B0zmir%20Turkey&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            
          </div>
              </div>
      </div>
      </>
  )
}

export default Contact
import React from 'react'
import "./SignIn.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';


const Forgot = () => {
    
  return (
    <>
    <div className="signin-section">
              <div className="signin-container">
                  <h4>Forgot Password</h4>
      <div>
            <form>
            <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
        margin: "20px 0px"
      }}
    >
      <TextField fullWidth label="New Password" id="fullWidth" type="password"/>
              </Box>
              

              <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
                  margin: "20px 0px",
      }}
    >
      <TextField fullWidth label="Confirm Password" id="fullWidth" type="password"/>
              </Box>
              
              <button className="signin-submit-btn">Submit</button>
            </form>
          </div>  
    </div>
  </div>
  </>
  )
}

export default Forgot
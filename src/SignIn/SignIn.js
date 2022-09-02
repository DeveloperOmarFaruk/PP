import React, {useState} from 'react'
import "./SignIn.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { NavLink} from 'react-router-dom';


const SignIn = () => {
  const [isActive, setActive] = useState("signin")
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(true);
  const handelLogin = () => {
    setLogin(true);
    setRegister(false);
  };

  const handelRegister = () => {
    setLogin(false);
    setRegister(true);
  }



  return (
    <>
      <div className="signin-section">
        <div className="signin-container">
          <div className="signin-btn">
            <button className={` ${isActive === "signin" ? 'signin-btn-button active-link-sign' : 'signin-btn-button'}`} onClick={() => { setActive("signin"); handelLogin() }}>Login</button>
            <button className={` ${isActive === "signup" ? 'signin-btn-button active-link-sign' : 'signin-btn-button'}`} onClick={() => { setActive("signup"); handelRegister() }}>Register</button>
          </div>


          {
            login ? <><div>
            <form>
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
      <TextField fullWidth label="Password" id="fullWidth" type="password"/>
              </Box>
              
              <div className="signin-checkbox-forgot">
                <div className="signin-checkbox">
                  <Checkbox {...label} defaultChecked />
                  <p>Remember me</p>
                </div>

                <div>
                <NavLink to="/forgot-password" className="forgot-navlink">Forgot password?</NavLink>
                </div>
              </div>

              <button className="signin-submit-btn">SIGN IN</button>

              <div className="not-register">
                <p>Not a member?</p>
                <NavLink to="#" className="forgot-navlink" onClick={() => { setActive("signup"); handelRegister() }}>Register</NavLink>
              </div>
            </form>
          </div></> : <> <div>
            <form>

            <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
        margin: "20px 0px"
      }}
    >
      <TextField fullWidth label="Name" id="fullWidth" type="text"/>
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
      <TextField fullWidth label="Password" id="fullWidth" type="password"/>
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
              
             
                <div className="register-checkbox">
                  <Checkbox {...label} defaultChecked />
                  <p>I have read and agree to the terms</p>
                </div>

            
          

              <button className="signin-submit-btn">SIGN UP</button>

              <div className="not-register">
                <p>Already member?</p>
                <NavLink to="#" className="forgot-navlink" onClick={() => { setActive("signin"); handelLogin() }}>Login</NavLink>
              </div>
            </form>
          </div></>
          }

         
      </div>
    </div>
    </>
  )
}

export default SignIn
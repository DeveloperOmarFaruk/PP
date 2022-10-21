import React, {useState, useContext, useEffect} from 'react'
import "./SignIn.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { NavLink} from 'react-router-dom';
import { login as userLogin} from './../context/action/auth'
import { GlobalContext } from '../context/Provider';
import {useNavigate } from "react-router-dom";


import axios from 'axios'


const SignIn = () => {
  const {authState, authDispatch} = useContext(GlobalContext)
  const history = useNavigate()

  const [isActive, setActive] = useState("signin")
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [resEmail, setResEmail]  = useState('');
  const [resPass, setResPass] = useState('');
  const [resUserName, setResUserName] = useState('');
  const [resConPass, setResConPass] = useState('');

  const handelLogin = () => {
    setLogin(true);
    setRegister(false);
  };

  const handelRegister = () => {
    setLogin(false);
    setRegister(true);
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    const data = {
      "email": loginEmail,
      "password": loginPass
    }
    userLogin(data)
    .then(res => {
      console.log(res)
      if(res.status === 400){
        authDispatch({
          type: "LOG_OUT",
        })
      } else if(res.status === 200){
        authDispatch({
          type: "LOGIN_SUCCESS",
          payload:res.result
        })
        history("/")
        // window.location.href = "/"
      }
    })
    // axios.post(`https://protein.catkinsofttech-bd.xyz/api/user/token`, data).then(res=>{
    //   localStorage.setItem('accessToken', res.data.accessToken)
    //   window.location.href = "/"
    // }).catch(er=>{
    //   console.log(er)
    // })
  }

  const handleSignUp=(e)=>{
    e.preventDefault();
    const data = {
      "username": resUserName,
      "first_name": "",
      "last_name": "",
      "email": resEmail,
      "password": resPass,
      "confirm_password": resConPass
    }
    axios.post(`https://protein.catkinsofttech-bd.xyz/api/user/create`, data).then(res=>{
      window.location.href = '/signin'
    }).catch(er=>{
      console.log(er)
    })
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
      <TextField fullWidth label="Email" id="fullWidth" type="email" onChange={(e)=>setLoginEmail(e.target.value)}/>
              </Box>
              

              <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
                  margin: "20px 0px",
      }}
    >
      <TextField fullWidth label="Password" id="fullWidth" type="password" onChange={(e)=>setLoginPass(e.target.value)}/>
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

              <button onClick={handleLogin} className="signin-submit-btn">SIGN IN</button>

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
      <TextField fullWidth label="Name" id="fullWidth" type="text" onChange={(e)=>setResUserName(e.target.value)}/>
              </Box>


            <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
        margin: "20px 0px"
      }}
    >
      <TextField fullWidth label="Email" id="fullWidth" type="email" onChange={(e)=>setResEmail(e.target.value)}/>
              </Box>
              

              <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
                  margin: "20px 0px",
      }}
    >
      <TextField fullWidth label="Password" id="fullWidth" type="password" onChange={(e)=>setResPass(e.target.value)}/>
              </Box>


              <Box
      sx={{
        width: "100%",
                  maxWidth: '100%',
                  margin: "20px 0px",
      }}
    >
      <TextField fullWidth label="Confirm Password" id="fullWidth" type="password" onChange={(e)=>setResConPass(e.target.value)}/>
              </Box>
              
             
                <div className="register-checkbox">
                  <Checkbox {...label} defaultChecked />
                  <p>I have read and agree to the terms</p>
                </div>

            
          

              <button onClick={handleSignUp} className="signin-submit-btn">SIGN UP</button>

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
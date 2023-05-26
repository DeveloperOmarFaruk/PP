import React, {useState, useContext, useEffect} from 'react'
import "./Contact.css"
import axios from "axios";
import { GlobalContext } from '../context/Provider';
import {useNavigate } from "react-router-dom";


const ContactShare = () => {
  const {authState, authDispatch} = useContext(GlobalContext)
  const [answers, setAnswers] = useState({answer1: "",answer2: "",answer3: ""})
  const history = useNavigate()

  useEffect(() => {
    setAnswers(prevState => ({...prevState, user_id: authState.id}))
  }, [authState])

  const submitAnswer = () => {
    axios
      .post('https://protein.catkinsofttech-bd.xyz/api/share-sucess-story/create', answers)
      .then(res => {
        // console.log(res)
        history("/contact-us")
        alert("Successfully Save")
      }).catch(err => {
        console.log(err)
      })
  }
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
  <textarea type="text" id="fname" name="fname" value={answers.answer1} onChange={e => setAnswers(prevState => ({...prevState, answer1:e.target.value}))}/>
 </div>
                      <div>
                      <label for="lname">What led you to become a Protein Writer?</label><br/>
  <textarea type="text" id="lname" value={answers.answer2} name="lname"  onChange={e => setAnswers(prevState => ({...prevState, answer2:e.target.value}))}/>
                      </div>
                      
                      <div>
                      <label for="lname">What advice would you share with other Protein Writers to help them to be as successful as you are?</label><br/>
  <textarea type="text" id="lname" name="lname" value={answers.answer3} onChange={e => setAnswers(prevState => ({...prevState, answer3:e.target.value}))}/>
  </div><br/><br/>
  <input type="button" value="Submit" onClick={submitAnswer} className="contact-submit-btn"/>
</form>
             
              </div>
      </div>
      </>
  )
}

export default ContactShare
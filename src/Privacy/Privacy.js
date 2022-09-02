import React from 'react'
import "./Privacy.css"
import { NavLink } from 'react-router-dom';

const Privacy = () => {
  return (
      <>
          <div className="privacy-section">
        <div className="privacy-container">
        <div className="privacy-title">
          <h4>Privacy Policy</h4>
          </div>
          
 <div className="privacy-info">

          <p>Last updated: December 28, 2020</p>
        <p>Please read these terms and conditions carefully before using Our Service.</p>

        <h5>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h5>

        <p>When you purchase something from our website, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</p>
        <p>When you browse our website, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
        <p>The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

        <h5>SECTION 2 - CONSENT</h5>

        <span>How do you get my consent?</span>

        <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
        <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
        
        <span>How do I withdraw my consent?</span>
        <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at info@proteinwriter.com or mailing us at: Proteinwriter.com</p>
        
        <h5>SECTION 3 - DISCLOSURE</h5>
        <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>

        <h5>SECTION 4 - THIRD-PARTY SERVICES</h5>
        <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
        <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
        <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
        <p>In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
        <p>As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.</p>
        <p>Once you leave our website’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
        <p style={{color:"#002A3A", fontSize:"20px", fontWeight:"900"}}>Links</p>
        <p>When you click on links on our website, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>
        
        <h5>SECTION 5 - SECURITY</h5>
        <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
        <p>If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and websited with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.</p>
        
        <h5>SECTION 6 - AGE OF CONSENT</h5>
        <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>

        <h5>SECTION 7 - CHANGES TO THIS PRIVACY POLICY</h5>
        <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
        <p>If our website is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
        
        <h5>QUESTIONS AND CONTACT INFORMATION</h5>
        <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information <NavLink to="/contact-us" className="privacy-link">contact</NavLink> our Privacy Compliance Officer.</p>
          </div>
         
        </div>

      </div>
      </>
  )
}

export default Privacy
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./PaymentForm.css"

const PaymentForm = () => {
    const data = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
      };
    
      const [cardDetails, setCardDetails] = React.useState(data);
    
      const handleInputFocus = (e) => {
        setCardDetails({ ...cardDetails, focus: e.target.name });
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };
    
  return (
      <>
      <div className="cardContainer">
        <div  className="payment-card">
        <Cards
        cvc={cardDetails.cvc}
        expiry={cardDetails.expiry}
        focused={cardDetails.focus}
        name={cardDetails.name}
          number={cardDetails.number}
         
      />
     </div>
      <div>
        <form className="cardForm">
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
              value={cardDetails.number}
              maxLength={16}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
              value={cardDetails.name}
              required
          />
          <div className="bottom">
            <input
              type="tel"
              name="expiry"
              placeholder="MM/YY Expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
                value={cardDetails.expiry}
                maxLength={4}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.cvc}
                maxLength={3}
            />
          </div>
        </form>
      </div>
    </div>
      </>
  )
}

export default PaymentForm
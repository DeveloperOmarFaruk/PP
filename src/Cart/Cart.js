import React from 'react'
import { ProductData } from "../Checkout/ProductData"
import {useNavigate} from "react-router-dom"
import "./Cart.css"

const Cart = () => {
  const navigate = useNavigate();
    
  
  return (
    <>
    <div className="cart-section">
    <div className="cart-details-container">

<div className="cart-sumary-title">
  <p>Cart Details (3)</p>
  <p>$335</p>
</div>


  
      <div className="cart-container">

      {ProductData.map(product => (
<div className="cart-container-product" key={product.id}>
<div className="cart-col-4">
<img src={product.image} alt={product.image} />
</div>

<div className="cart-col-4">
<p>{product.title}</p>
</div>

              <div className="cart-col-4">
              <i className="fa-sharp fa-solid fa-plus incri-diri-btn"></i><br/>
                  <i className="fa-sharp fa-solid fa-minus incri-diri-btn"></i>
              </div>            

<div className="cart-col-4 cart-prouct-amount">
<p>{product.price}</p>
 <button>Remove</button>
</div>
</div>
      ))} <br/>


        <div className="cart-amount-tex">
          <p>Sales Tex</p>
          <p>$0.00</p>
        </div>

        <div className="cart-amount-tex">
          <p>Total Amount</p>
          <p>$400</p>
            </div>
            
            <button className="shipping-submit-btn" onClick={()=>navigate("/checkout")} >Place Order</button>
      </div>  
   

</div>
</div>
</>
  )
}

export default Cart
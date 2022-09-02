import React, {useState} from 'react'
import "./Order.css"
import bacteria from "../Images/bacteria.jpg"

const Order = () => {
  const [changeActive, setChangeActive] = useState("home");
  const [btnActive, setBtnActive] = useState("home");


  return (
    <>
      <div className="order-section">
        <div className="order-section-row">
        <div className="order-section-col">
          <img src={bacteria} alt={bacteria} />
        </div>

        <div className="order-section-col">
          <div className="order-col-right-container">
              <div className="order-confirm">
                <p>Added <span><i class="fa-solid fa-check"></i></span></p>
                <p>View cart to see item(s) added.</p>
              </div>
              
              <div className="order-choose-container">
                <p className='order-choose-container-title'>Choose a sequence quantity:</p>

                <div className="order-choose-row">


                  <div  onClick={() => {setChangeActive("choose1")}} className={` ${changeActive === "choose1" ? 'order-choose-col active-choose' : 'order-choose-col'}`}>
                    <div className="order-choose-title">
                      <div  onClick={() => {setChangeActive("choose1")}} className={` ${changeActive === "choose1" ? 'order-choose-circle active-circle' : 'order-choose-circle'}`}></div>
                      <h5>Starter</h5>
                    </div>
                    <p>$3.34/class sequence</p>
                    <p>15 class sequence</p>
                  </div>


                  <div onClick={() => {setChangeActive("choose2")}} className={` ${changeActive === "choose2" ? 'order-choose-col active-choose' : 'order-choose-col'}`}>
                    <div className="order-choose-title">
                      <div  onClick={() => {setChangeActive("choose2")}} className={` ${changeActive === "choose2" ? 'order-choose-circle active-circle' : 'order-choose-circle'}`}></div>
                      <h5>Expanded</h5>
                    </div>
                    <p>$1.50/class sequence</p>
                    <p>50 class sequence</p>
                  </div>



                  <div onClick={() => {setChangeActive("choose3")}} className={` ${changeActive === "choose3" ? 'order-choose-col active-choose' : 'order-choose-col'}`}>
                    <div className="order-choose-title">
                      <div  onClick={() => {setChangeActive("choose3")}} className={` ${changeActive === "choose3" ? 'order-choose-circle active-circle' : 'order-choose-circle'}`}></div>
                      <h5>Maximum</h5>
                    </div>
                    <p>$0.67/class sequence</p>
                    <p>150 class sequence</p>
                  </div>
                </div>


                <div className="order-protein-container">
                  <h3>ebola sudan</h3>
                  <div className="order-protein-row">
                    <p>polymerase</p>
                    <p>$19.95</p>
                  </div>
                </div>


                <div className="order-confirm-best-container">
                <div className="order-confirm-best">
                <p>Best Value <span><i class="fa-solid fa-check"></i></span></p>
                  </div>
                  
                  <div className='order-confirm-best-row'>
                    <div className='order-confirm-best-col'>
                      <p>
                        <span><i class="fa-solid fa-diamond"></i> Class 1 - 19</span>
                      </p>
                      
                      <p>
                        <span><i class="fa-solid fa-diamond"></i> 150 class sequences</span>
                      </p>
                      

                      <p>
                        <span><i class="fa-solid fa-diamond"></i> 325 protein amino acids</span>
                      </p>
                      

                      <p>
                        <span><i class="fa-solid fa-diamond"></i> Protein design analysis</span>
                       </p>
                    </div>

                    <div className='order-confirm-best-col'>
                      <p><span style={{fontSize:"35px"}}>$0.67 / </span>class sequence</p>
                    </div>
                  </div>


                  <div className='order-confirm-best-center'>
                    <p><span style={{fontWeight:"500"}}>Maximum</span> class sequences</p>
                  </div>
                </div>


                <div className="order-confirm-btn">
                  <button onClick={() => {setBtnActive("btn1")}} className={` ${btnActive === "btn1" ? 'order-confirm-btn-button active-order-btn' : 'order-confirm-btn-button'}`}>Continue Shopping</button>
                  <button onClick={() => {setBtnActive("btn2")}} className={` ${btnActive === "btn2" ? 'order-confirm-btn-button active-order-btn' : 'order-confirm-btn-button'}`}>View cart</button>
                </div>

                <div className="order-confirm-notice">
                  <p>Design your protein in confidence with a 30 day money back guarantee.</p>
                </div>
              </div>
           </div>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Order
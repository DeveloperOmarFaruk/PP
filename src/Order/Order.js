import React, {useState, useEffect} from 'react'
import "./Order.css"
import {useParams } from "react-router-dom";
import bacteria from "../Images/bacteria.jpg"
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Order = () => {
  const [changeActive, setChangeActive] = useState({});
  const [btnActive, setBtnActive] = useState("home");
  const [product, setProduct] = useState({})
  const [variant, setVariant] = useState([])
  const [isAddCart, setIsAddCart] = useState(false)
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
      axios.get(`https://protein.catkinsofttech-bd.xyz/api/product/${id}`).then(res=>{
        setProduct(res.data)
        setVariant(res.data.variants)
      }).catch(err=>{
        console.log(err.message)
      })
  }, [])

  const addToCart = () => {
    setIsAddCart(true)
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let newItem = {id:product.id, title:product.title, variant:changeActive}
    console.log(cart)
    cart.push(newItem)
    localStorage.setItem('cart', JSON.stringify(cart))
    
  }

  return (
    <>
      <div className="order-section">
        <div className="order-section-row">
        <div className="order-section-col">
          <img src={bacteria} alt={bacteria} />
        </div>

        <div className="order-section-col">
          <div className="order-col-right-container">
              {isAddCart && <div className="order-confirm">
                <p>Added <span><i class="fa-solid fa-check"></i></span></p>
                <p>View cart to see item(s) added.</p>
              </div>}
              
              <div className="order-choose-container">
                <p className='order-choose-container-title'>Choose a sequence quantity:</p>

                <div className="order-choose-row">

                  {variant.map((v, k) => (<>
                    <div  onClick={() => {setChangeActive(v)}} className={` ${changeActive.id === v.id ? 'order-choose-col active-choose' : 'order-choose-col'}`}>
                    <div className="order-choose-title">
                      <div  onClick={() => {setChangeActive(v)}} className={` ${changeActive.id === v.id ? 'order-choose-circle active-circle' : 'order-choose-circle'}`}></div>
                      <h5>{v.title}</h5>
                    </div>
                    <p>${v.price}/class sequence</p>
                    <p>15 class sequence</p>
                  </div> </>
                  ))}

                  {/* <div  onClick={() => {setChangeActive("choose1")}} className={` ${changeActive === "choose1" ? 'order-choose-col active-choose' : 'order-choose-col'}`}>
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
                  </div> */}
                </div>


                <div className="order-protein-container">
                  <h3>{product.title}</h3>
                  {/* <div className="order-protein-row">
                    <p>polymerase</p>
                    <p>$19.95</p>
                  </div> */}
                </div>


                { changeActive.id &&  <div className="order-confirm-best-container">
                <div className="order-confirm-best">
                <p>Best Value <span><i class="fa-solid fa-check"></i></span></p>
                  </div>
                  
                  <div className='order-confirm-best-row'>
                    <div className='order-confirm-best-col'>
                      <p>
                        <span><i class="fa-solid fa-diamond"></i> Region 1 - 19</span>
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
                      <p><span style={{fontSize:"35px"}}>${changeActive.price} / </span>class sequence</p>
                    </div>
                  </div>


                  <div className='order-confirm-best-center'>
                    <p><span style={{fontWeight:"500"}}>Maximum</span> class sequences</p>
                  </div>
                </div>}


                <div className="order-confirm-btn">
                  <button onClick={() => {setBtnActive("btn1")}} className={` ${btnActive === "btn1" ? 'order-confirm-btn-button active-order-btn' : 'order-confirm-btn-button'}`}>Continue Shopping</button>
                  <button onClick={() => {isAddCart ? navigate('/cart') : addToCart()}} 
                          disabled={changeActive.id ? false : true}
                          className={'order-confirm-btn-button'}>{isAddCart ? "View cart" : "Add To Cart"}</button>
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
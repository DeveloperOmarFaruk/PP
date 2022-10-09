import Bacteria from '../Images/bacteria.jpg'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import "../ProteinDesign/ProteinDesign.css"
import React from 'react'

const ProtienCard = ({item}) =>{
    let variants = item.variants
    const [index, setIndex] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [press, setPress] = useState("home")
    const navigate = useNavigate();
    const [circleBtn, setCircleBtn] = useState("btn")

    return (
            <div className="pdesign-card">
        <img src={Bacteria} alt={Bacteria} />
        <div className="pdesign-card-btn">
        <div className="pdesign-card-info">
              <p>{item.name}</p>
              <p>{variants[index].title}</p>
              <p>$ {variants[index].price}</p>
              </div>
              <div className="pdesign-card-multi-btn">
                {item.variants.map((vr)=>{return(<button key={vr.id} onClick={()=>{setIndex(vr.id-1); setCircleBtn(vr.id-1)}} className={` ${circleBtn === vr.id-1 ? 'pdesign-card-multi-btn-circle active-circle-btn' : 'pdesign-card-multi-btn-circle'}`}></button>)})}
              </div>


              <div className="pdesign-card-chart-btn">
                <button className="normal-click">Show me more!</button>
                <button id={item.id} key={item.id} onClick={() => navigate(`/order/${item.id}`)} 
                  className={'normal-click'} >
                    {clicked ? 'View my cart' : 'Add to cart'} </button>
              </div>
        </div>
             
            </div>
    )
}


export default ProtienCard;
import React from 'react'
import "./ProteinDesign.css"
import ProtienCard from '../Components/ProtienCard'


const ProteinDesignBacteria = ({data}) => {

  return (
    <>
      
      <section className="pdesing-section">
        
        <div >
        <div className='pdesign-protein-title'>
          <p>Bacteria</p>
          </div>
          
          <div className="pdesign-card-container">
            {
              data?.map((item)=>{return(<ProtienCard item={item} key={item.id} />)})
            }
            
          </div>
       </div>
      </section>
   
    </>
  )
}

export default ProteinDesignBacteria
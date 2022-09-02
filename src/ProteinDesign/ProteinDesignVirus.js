import React from 'react'
import "./ProteinDesign.css"
import ProtienCard from '../Components/ProtienCard'
import protein from '../dummy/protien'

const ProteinDesignVirus = () => {

  const data = protein
  return (
    <>
      
      <section className="pdesing-section">
     
        
        <div>
        <div className='pdesign-protein-title'>
          <p>Virus</p>
          </div>
          
          <div className="pdesign-card-container">
            {
              data.map((item)=>{return(<ProtienCard item={item} key={item.id} />)})
            }
            
          </div>
       </div>
      </section>
     
    </>
  )
}

export default ProteinDesignVirus
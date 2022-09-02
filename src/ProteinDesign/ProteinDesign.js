import React from 'react'
import "./ProteinDesign.css"
import ProteinDesignBacteria from './ProteinDesignBacteria'
import ProteinDesignVirus from './ProteinDesignVirus'

const ProteinDesign = () => {
  return (
      <>
          <section>
        <div className='pdesing-title'>
          <p>Protein Design Platforms</p>
        </div>
        
        <ProteinDesignBacteria />
        <ProteinDesignVirus/>
      </section>
      </>
  )
}

export default ProteinDesign
import React, {useState, useEffect} from 'react'
import "./ProteinDesign.css"
import ProteinDesignBacteria from './ProteinDesignBacteria'
import ProteinDesignVirus from './ProteinDesignVirus'
import axios from 'axios'

const ProteinDesign = () => {

  const [bactaria, setBactaria] = useState([])
  const [virus, setVirus] = useState([])

  useEffect(()=>{
    axios.get(`https://protein.catkinsofttech-bd.xyz/api/product/by_type?product_type=bacteria`).then(res=>{
      setBactaria(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }, [])

  useEffect(()=>{
    axios.get(`https://protein.catkinsofttech-bd.xyz/api/product/by_type?product_type=virus`).then(res=>{
    setVirus(res.data)  
    console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }, [])


  return (
      <>
          <section>
        <div className='pdesing-title'>
          <p>Protein Design Platforms</p>
        </div>
        
        <ProteinDesignBacteria data={bactaria}/>
        <ProteinDesignVirus data={virus}/>
      </section>
      </>
  )
}

export default ProteinDesign
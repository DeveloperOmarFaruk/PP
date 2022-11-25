import React from 'react'
import "./PLabAnalysis.css"

const PLabTableAnalysis = () => {
  return (
      <>
        
        <div className="plta-table-container">
          <h3>Covid-19 spike protein</h3>
        

        <table class="table">
  <thead className="plta-table">
  <th scope="col" >Positions</th>
      <th scope="col" >Amino Acid</th>
      <th scope="col" >Substitute</th>
                <th scope="col" >Ag</th>
                <th scope="col">Region</th>
  </thead>
  <tbody>
    <tr>
    <td scope="row" data-label="Positions">8</td>
      <td data-label="Amino Acid">Leucine</td>
      <td data-label="Substitute">Metheonine</td>
                <td data-label="Ag">1.352</td>
                <td data-label="Region">1</td>
    </tr>

    <tr>
    <td scope="row" data-label="Positions">24</td>
      <td data-label="Amino Acid">Valine</td>
      <td data-label="Substitute">Alanine</td>
                <td data-label="Ag">0.637</td>
                <td data-label="Region">9</td>
    </tr>

    <tr>
    <td scope="row" data-label="Positions">33</td>
      <td data-label="Amino Acid">Proline</td>
      <td data-label="Substitute">Glutamine</td>
                <td data-label="Ag">1.421</td>
                <td data-label="Region">4</td>
              </tr>
  

    <tr>
    <td scope="row" data-label="Positions">41</td>
      <td data-label="Amino Acid">Aspartate</td>
      <td data-label="Substitute">Valine</td>
                <td data-label="Ag">0.047</td>
                <td data-label="Region">1</td>
            </tr>
            
            <tr>
      <td scope="row" data-label="Positions">69</td>
      <td data-label="Amino Acid">Threonine</td>
      <td data-label="Substitute">Serine</td>
                <td data-label="Ag">2.766</td>
                <td data-label="Region">3</td>
    </tr>
  </tbody>
</table>


        </div>  
    </>
  )
}

export default PLabTableAnalysis
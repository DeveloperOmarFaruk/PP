import React from 'react'
import "./About.css"


const About = () => {
  return (
      <>
          <div className="about-section">
              <div className="about-header">
                  <h4>What is Protein Writer?</h4>
                  <p>Protein Writer is a revolutionary protein data science service. In our first service offering, we are excited to introduce to you Protein Thesaurus--a new and more meaningful tool for protein design. With Protein Thesaurus, you can skip time-consuming and costly analysis to find qualified amino acids for your protein.</p>
              </div>

              <div className="about-body">
                  <div className="about-col-6 about-body-left">
                      <h5>Protein Thesaurus</h5>
                      <p>The Synonym Thesaurus offers a quantitative measure for choosing the most similar amino acid. Similarly, the Antonym Thesaurus offers a quantitative measure for choosing the most dissimilar amino acid.</p>
                  </div>


                  <div className="about-col-6 about-body-right">
                      <h5>Protein Aminogram (Ag)</h5>
                      <p>Both the Synonym Thesaurus and the Antonym Thesaurus use Aminogram--a first-of-its-kind data science measurement formulated specifically for proteins. So, experience a new way to design proteins faster--become a protein writer.</p>
                  </div>
              </div>
      </div>
      </>
  )
}

export default About
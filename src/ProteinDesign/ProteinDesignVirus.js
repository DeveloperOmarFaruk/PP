import React from "react";
import "./ProteinDesign.css";
import ProtienCard from "../Components/ProtienCard";

const ProteinDesignVirus = ({ data }) => {
  return (
    <>
      <section className="pdesing-section">
        <div>
          <div className="pdesign-protein-title">
            <h5>Virus</h5>
            <p>Protein Platforms</p>
            <p>Researcher Packages</p>
          </div>

          <div className="row">
            {data?.map((item) => {
              return (
                <>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <ProtienCard item={item} key={item.id} />
                  </div>
                </>
              );
            })}
          </div>

          {/* <div className="pdesign-card-container">
            {
              data?.map((item)=>{return(<ProtienCard item={item} key={item.id} />)})
            }
            
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ProteinDesignVirus;

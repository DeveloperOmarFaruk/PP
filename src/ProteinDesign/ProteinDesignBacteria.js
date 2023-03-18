import React from "react";
import "./ProteinDesign.css";
import ProtienCard from "../Components/ProtienCard";

const ProteinDesignBacteria = ({ data }) => {
  return (
    <>
      <section className="pdesing-section">
        <div>
          <div className="pdesign-protein-title">
            <p>Bacteria</p>
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
        </div>
      </section>
    </>
  );
};

export default ProteinDesignBacteria;

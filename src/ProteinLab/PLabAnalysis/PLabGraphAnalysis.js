import React from "react";
import ProteinInfo from "./ProteinInfo";
import GraphInfo from "./GraphInfo";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import ApexChart from "./ApexChart";

const PLabGraphAnalysis = ({ graphValue, matrix, classs, isLoading }) => {
  const [proteinDetails, setProtienDetails] = useState([]);

  const handleProtienDetails = (value) => {
    if (value) {
      const singleProtein = graphValue.map((item, index) => ({
        [String.fromCharCode(97 + index)]: item.all_data[value - 1],
      }));
      setProtienDetails(singleProtein);
    } else {
      setProtienDetails([]);
    }
  };

  return (
    <>
      <div className="graph-chart" style={{ marginTop: "30px" }}>
        <p>Optimized Levels</p>
        <div className="chart">
          {isLoading ? (
            <CircularProgress
              color="primary"
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          ) : (
            graphValue && (
              <ApexChart
                showProtein={handleProtienDetails}
                graphValue={graphValue}
              />
            )
          )}
        </div>
      </div>
      <GraphInfo classs={classs} matrix={matrix} />
      {graphValue && (
        <div className="protein-info-container">
          {proteinDetails?.map((protein, index) => (
            <ProteinInfo
              key={index}
              protein={protein[String.fromCharCode(97 + index)]}
              matrix={matrix}
              style={`protein-${index + 1}`} // Use an index-based style naming convention
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PLabGraphAnalysis;

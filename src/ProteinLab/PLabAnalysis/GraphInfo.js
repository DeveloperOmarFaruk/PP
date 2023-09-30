import React from "react";

const GraphInfo = ({ classs, matrix }) => {
  return (
    <div style={{ marginBottom: "25px" }}>
      <p className="graph-title">Amino Acid Positions</p>
      <div className="graph-sub-title">
        <p className="m-0">
          Optimized Level Tracking:&nbsp;{classs === 0 ? "All" : classs}{" "}
          {matrix === 0 && <span>Amino Acid</span>}
        </p>
        {matrix === 1 && (
          <>
            <p className="m-0">Amino Acid (Upper)</p>
            <p className="m-0">Substitute Amino Acid (Lower)</p>
          </>
        )}
      </div>
    </div>
  );
};

export default GraphInfo;

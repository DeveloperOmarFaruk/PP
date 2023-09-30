import { capitalize } from "@material-ui/core";
import React from "react";

const ProteinInfo = ({ protein, matrix, style }) => {
  return (
    <div className={`protein-info-details ${style !== "protein-1" && style}`}>
      <div
        className={`protein-info-logo ${style !== "protein-1" && style}-logo`}
      >
        <p>{protein?.amino_acid_1_ltr ? protein.amino_acid_1_ltr : "--"}</p>
        {matrix === 1 && <div></div>}
        {matrix === 1 && <p>{protein?.Reg_1_ltr ? protein.Reg_1_ltr : "--"}</p>}
      </div>
      <div className="protein-info-details-info">
        <p style={{ textTransform: "capitalize" }}>
          {style === "protein-1" ? "Spike Protein" : style.replace(/-/g, " ")}
        </p>
        <p>{protein?.position ? protein.position : "--"}</p>
        <p>
          Level{" "}
          {matrix === 0 && protein?.Seq_AOL
            ? protein?.Seq_AOL
            : protein?.Reg_SOL}
        </p>
      </div>
    </div>
  );
};

export default ProteinInfo;

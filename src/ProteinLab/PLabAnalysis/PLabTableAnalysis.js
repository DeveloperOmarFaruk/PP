import React, { useEffect } from "react";
import "./PLabAnalysis.css";
import { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import ProteinTable from "./ProteinTable";

const PLabTableAnalysis = ({ graphValue, matrix }) => {
  const [acidType, setAcidType] = useState("amino_acid");
  const [subAcidType, setSubAcidType] = useState("");
  const [order, setOrder] = useState("asc");

  const spike = graphValue.res ? graphValue.res[0].data.all_data : null;
  const p2 = graphValue.res ? graphValue.res[1].data.all_data : null;
  const p3 = graphValue.res ? graphValue.res[2].data.all_data : null;
  const p4 = graphValue.res ? graphValue.res[3].data.all_data : null;
  const p5 = graphValue.res ? graphValue.res[4].data.all_data : null;

  const orderHandler = () => {
    order === "asc" ? setOrder("dsc") : setOrder("asc");
  };

  useEffect(() => {
    let subAcidType;

    switch (acidType) {
      case "amino_acid":
        subAcidType = matrix ? "Reg_Sub" : "Seq_Sub";
        break;
      case "amino_acid_3_ltr":
        subAcidType = matrix ? "Reg_3_ltr" : "Seq_3_ltr";
        break;
      default:
        subAcidType = matrix ? "Reg_1_ltr" : "Seq_1_ltr";
        break;
    }

    setSubAcidType(subAcidType);
  }, [matrix, acidType]);

  return (
    <>
      <div className="plta-table-container">
        <div className="mb-2 d-flex justify-content-between align-items-center flex-column flex-sm-row gap-2">
          <h3>Covid-19 spike protein</h3>
          <select
            className="form-select custom-select"
            aria-label="Default select example"
            value={acidType}
            onChange={(e) => setAcidType(e.target.value)}
          >
            <option value="amino_acid">AMINO ACID</option>
            <option value="amino_acid_3_ltr">3-LETTER</option>
            <option value="amino_acid_1_ltr">1-LETTER</option>
          </select>
        </div>
        <table class="table">
          <thead className="plta-table">
            <th scope="col">Positions</th>
            <th scope="col">Amino Acid</th>
            <th scope="col">Substitute</th>
            <th scope="col">
              Ag
              <span style={{ cursor: "pointer" }} onClick={orderHandler}>
                <BiSortAlt2 />
              </span>
            </th>
            <th scope="col">Optimized level</th>
          </thead>
          <ProteinTable
            data={spike}
            acidType={acidType}
            subAcidType={subAcidType}
            matrix={matrix}
            order={order}
          />
          <ProteinTable
            data={p2}
            acidType={acidType}
            subAcidType={subAcidType}
            matrix={matrix}
            order={order}
          />
          <ProteinTable
            data={p3}
            acidType={acidType}
            subAcidType={subAcidType}
            matrix={matrix}
            order={order}
          />
          <ProteinTable
            data={p4}
            acidType={acidType}
            subAcidType={subAcidType}
            matrix={matrix}
            order={order}
          />
          <ProteinTable
            data={p5}
            acidType={acidType}
            subAcidType={subAcidType}
            matrix={matrix}
            order={order}
          />
        </table>
      </div>
    </>
  );
};

export default PLabTableAnalysis;

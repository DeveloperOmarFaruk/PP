import React, { useEffect } from "react";
import "./PLabAnalysis.css";
import { FormControl } from "react-bootstrap";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";

const PLabTableAnalysis = ({ graphValue, matrix }) => {
  const [acidType, setAcidType] = useState("amino_acid");
  const [subAcidType, setSubAcidType] = useState("");

  const spike = graphValue.res ? graphValue.res[0].data.all_data : null;
  const p2 = graphValue.res ? graphValue.res[1].data.all_data : null;
  const p3 = graphValue.res ? graphValue.res[2].data.all_data : null;
  const p4 = graphValue.res ? graphValue.res[3].data.all_data : null;
  const p5 = graphValue.res ? graphValue.res[4].data.all_data : null;

  useEffect(() => {
    if (acidType === "amino_acid") {
      matrix ? setSubAcidType("Reg_Sub") : setSubAcidType("Seq_Sub");
    } else if (acidType === "amino_acid_3_ltr") {
      matrix ? setSubAcidType("Reg_3_ltr") : setSubAcidType("Seq_3_ltr");
    } else if (acidType === "amino_acid_1_ltr") {
      matrix ? setSubAcidType("Reg_1_ltr") : setSubAcidType("Seq_1_ltr");
    }
  }, [acidType, matrix]);

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
          {/* <FormControl
            variant="filled"
            // className={}
            style={{
              border: "1px solid #808080",
              borderRadius: "5px",
              width: "170px",
            }}
          >
            <InputLabel
              id="demo-simple-select-filled-label"
              style={{ color: "#6495ed" }}
            >
              ANALYSIS
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={acidType}
              onChange={(e) => setAcidType(e.target.value)}
            >
              <MenuItem value={10}>AMINO ACID</MenuItem>
              <MenuItem value={20}>3-LETTER</MenuItem>
              <MenuItem value={30}>1-LETTER</MenuItem>
            </Select>
          </FormControl> */}
        </div>
        <table class="table">
          <thead className="plta-table">
            <th scope="col">Positions</th>
            <th scope="col">Amino Acid</th>
            <th scope="col">Substitute</th>
            <th scope="col">Ag</th>
            <th scope="col">Optimized level</th>
          </thead>

          <tbody>
            {spike ? (
              spike.map((spike, index) => (
                <tr key={index}>
                  <td scope="row" data-label="Positions">
                    {spike.position}
                  </td>
                  <td data-label="Amino Acid">{spike[acidType]}</td>
                  <td data-label="Substitute">{spike[subAcidType]}</td>
                  <td data-label="Ag">
                    {matrix === 0 ? spike.Seq_AG : spike.Reg_AG}
                  </td>
                  <td data-label="Region">
                    {matrix === 0 ? spike.Seq_AOL : spike.Reg_SOL}
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
            {p2 ? (
              p2.map((p2, index) => (
                <tr key={index}>
                  <td scope="row" data-label="Positions">
                    {p2.position}
                  </td>
                  <td data-label="Amino Acid">{p2[acidType]}</td>
                  <td data-label="Substitute">{p2[subAcidType]}</td>
                  <td data-label="Ag">
                    {matrix === 0 ? p2.Seq_AG : p2.Reg_AG}
                  </td>
                  <td data-label="Region">
                    {matrix === 0 ? p2.Seq_AOL : p2.Reg_SOL}
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
            {p3 ? (
              p3.map((p3, index) => (
                <tr key={index}>
                  <td scope="row" data-label="Positions">
                    {p3.position}
                  </td>
                  <td data-label="Amino Acid">{p3[acidType]}</td>
                  <td data-label="Substitute">{p3[subAcidType]}</td>
                  <td data-label="Ag">
                    {matrix === 0 ? p3.Seq_AG : p3.Reg_AG}
                  </td>
                  <td data-label="Region">
                    {matrix === 0 ? p3.Seq_AOL : p3.Reg_SOL}
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
            {p4 ? (
              p4.map((p4, index) => (
                <tr key={index}>
                  <td scope="row" data-label="Positions">
                    {p4.position}
                  </td>
                  <td data-label="Amino Acid">{p4[acidType]}</td>
                  <td data-label="Substitute">{p4[subAcidType]}</td>
                  <td data-label="Ag">
                    {matrix === 0 ? p4.Seq_AG : p4.Reg_AG}
                  </td>
                  <td data-label="Region">
                    {matrix === 0 ? p4.Seq_AOL : p4.Reg_SOL}
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
            {p5 ? (
              p5.map((p5, index) => (
                <tr key={index}>
                  <td scope="row" data-label="Positions">
                    {p5.position}
                  </td>
                  <td data-label="Amino Acid">{p5[acidType]}</td>
                  <td data-label="Substitute">{p5[subAcidType]}</td>
                  <td data-label="Ag">
                    {matrix === 0 ? p5.Seq_AG : p5.Reg_AG}
                  </td>
                  <td data-label="Region">
                    {matrix === 0 ? p5.Seq_AOL : p5.Reg_SOL}
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PLabTableAnalysis;

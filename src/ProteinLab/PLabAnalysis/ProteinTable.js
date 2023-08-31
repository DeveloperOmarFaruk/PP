import { CircularProgress } from "@material-ui/core";
import React from "react";

const ProteinTable = ({ data, acidType, subAcidType, matrix, order }) => {
  const newData = data?.filter((item) => {
    if (matrix) {
      return item.Seq_AG.trim() !== ""; // Remove items with empty Seq_AG
    } else {
      return item.Reg_AG.trim() !== ""; // Remove items with empty Reg_AG
    }
  });

  const orderedData =
    newData &&
    [...newData].sort((a, b) => {
      if (matrix) {
        const aSeqAG = parseFloat(a.Seq_AG);
        const bSeqAG = parseFloat(b.Seq_AG);
        // console.log("seq order", aSeqAG, bSeqAG);
        return order === "asc" ? aSeqAG - bSeqAG : bSeqAG - aSeqAG;
      } else {
        const aRegAG = parseFloat(a.Reg_AG);
        const bRegAG = parseFloat(b.Reg_AG);
        return order === "asc" ? aRegAG - bRegAG : bRegAG - aRegAG;
      }
    });

  const renderRows = (rowData) => {
    return rowData.map(
      (row, index) =>
        row[subAcidType] && (
          <tr key={index}>
            <td scope="row" data-label="Positions">
              {row.position}
            </td>
            <td data-label="Amino Acid">{row[acidType]}</td>
            <td data-label="Substitute">{row[subAcidType]}</td>
            <td data-label="Ag">{matrix ? row.Seq_AG : row.Reg_AG}</td>
            <td data-label="Region">{matrix ? row.Seq_AOL : row.Reg_SOL}</td>
          </tr>
        )
    );
  };

  return (
    <tbody>
      {data && data.length > 0 ? (
        renderRows(orderedData)
      ) : (
        <tr>
          {/* <td colSpan="5">No data available.</td> */}
          <td colSpan="5">
            <CircularProgress
              color="primary"
              style={{ width: "20px", height: "20px" }}
            />
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default ProteinTable;

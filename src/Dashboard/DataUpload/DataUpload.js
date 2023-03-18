import React, { useState } from "react";
import "./DataUpload.css";
import axios from "axios";

const DataUpload = () => {
  const saveProteinData = (event, params) => {
    event.preventDefault();
    let file = event.target.pr_file.files[0];
    let body = new FormData();
    body.append("file", file);
    axios
      .post(
        `https://protein.catkinsofttech-bd.xyz/api/import-protein-table/${params}`,
        body
      )
      .then((res) => {
        event.target.pr_file.value = "";
        alert("Data successfully save");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="data-upload-section">
        <div className="data-upload-title">
          <p>Data Upload</p>
        </div>

        <div>
          <h5 className="data-upload-alart">Please input .CSV file</h5>

          <div className="data-upload-label-holder">
            <p> Spike Protein</p>
            <form onSubmit={(e) => saveProteinData(e, "spike-create")}>
              <input type="file" id="pr_file" name="pr_file" />
              <button className="data-upload-btn-save" type="submit">
                Save
              </button>
            </form>
          </div>

          <div className="data-upload-label-holder">
            <p> Protein 2</p>
            <form onSubmit={(e) => saveProteinData(e, "protien-2-create")}>
              <input type="file" id="pr_file" name="pr_file" />
              <button className="data-upload-btn-save" type="submit">
                Save
              </button>
            </form>
          </div>

          <div className="data-upload-label-holder">
            <p> Protein 3</p>
            <form onSubmit={(e) => saveProteinData(e, "protien-3-create")}>
              <input type="file" id="pr_file" name="pr_file" />
              <button className="data-upload-btn-save" type="submit">
                Save
              </button>
            </form>
          </div>

          <div className="data-upload-label-holder">
            <p> Protein 4</p>
            <form onSubmit={(e) => saveProteinData(e, "protien-4-create")}>
              <input type="file" id="pr_file" name="pr_file" />
              <button className="data-upload-btn-save" type="submit">
                Save
              </button>
            </form>
          </div>

          <div className="data-upload-label-holder">
            <p> Protein 5</p>
            <form onSubmit={(e) => saveProteinData(e, "protien-5-create")}>
              <input type="file" id="pr_file" name="pr_file" />
              <button className="data-upload-btn-save" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataUpload;

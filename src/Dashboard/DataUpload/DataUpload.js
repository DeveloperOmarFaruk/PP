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

  const deleteProteinData = (name) => {
    let body = {};
    axios
      .post(
        `https://protein.catkinsofttech-bd.xyz/api/import-protein-table/${name}`,
        body
      )
      .then((res) => {
        alert("Data successfully delete");
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

        <div className="data-upload-label-holder-container">
          <h5 className="data-upload-alart">Please input .CSV file</h5>

          <div className="data-upload-label-holder">
            <h5> Spike Protein</h5>
            <div className={"button-group"}>
              <form onSubmit={(e) => saveProteinData(e, "spike-create")}>
                <input type="file" id="pr_file" name="pr_file" />
                <button className="data-upload-btn-save" type="submit">
                  Save
                </button>
              </form>

              <button
                className="data-upload-btn-delete"
                type="submit"
                onClick={() => deleteProteinData("delete-all-spike-protien")}
              >
                Delete
              </button>
            </div>
            <p>Spike protein file name</p>
          </div>

          <div className="data-upload-label-holder">
            <h5> Protein 2</h5>
            <div className={"button-group"}>
              <form onSubmit={(e) => saveProteinData(e, "protien-2-create")}>
                <input type="file" id="pr_file" name="pr_file" />
                <button className="data-upload-btn-save" type="submit">
                  Save
                </button>
              </form>

              <button
                className="data-upload-btn-delete"
                type="button"
                onClick={() => deleteProteinData("delete-all-spike-protien-2")}
              >
                Delete
              </button>
            </div>
            <p>Protein 2 file name</p>
          </div>

          <div className="data-upload-label-holder">
            <h5> Protein 3</h5>
            <div className={"button-group"}>
              <form onSubmit={(e) => saveProteinData(e, "protien-3-create")}>
                <input type="file" id="pr_file" name="pr_file" />
                <button className="data-upload-btn-save" type="submit">
                  Save
                </button>
              </form>

              <button
                className="data-upload-btn-delete"
                type="button"
                onClick={() => deleteProteinData("delete-all-spike-protien-3")}
              >
                Delete
              </button>
            </div>
            <p>Protein 3 file name</p>
          </div>

          <div className="data-upload-label-holder">
            <h5> Protein 4</h5>

            <div className={"button-group"}>
              <form onSubmit={(e) => saveProteinData(e, "protien-4-create")}>
                <input type="file" id="pr_file" name="pr_file" />
                <button className="data-upload-btn-save">Save</button>
              </form>

              <button
                className="data-upload-btn-delete"
                type="button"
                onClick={() => deleteProteinData("delete-all-spike-protien-4")}
              >
                Delete
              </button>
            </div>
            <p>Protein 4 file name</p>
          </div>

          <div className="data-upload-label-holder">
            <h5> Protein 5</h5>
            <div className={"button-group"}>
              <form onSubmit={(e) => saveProteinData(e, "protien-5-create")}>
                <input type="file" id="pr_file" name="pr_file" />
                <button className="data-upload-btn-save" type="submit">
                  Save
                </button>
              </form>

              <button
                className="data-upload-btn-delete"
                type="button"
                onClick={() => deleteProteinData("delete-all-spike-protien-5")}
              >
                Delete
              </button>
            </div>
            <p>Protein 5 file name</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataUpload;

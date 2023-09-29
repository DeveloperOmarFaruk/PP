import React, { useEffect, useState } from "react";
import "./DataUpload.css";
import axios from "axios";

const DataUpload = () => {
  const [spikeProteinFileName, setSpikeProteinFileName] = useState(
    "Spike protein file name"
  );
  const [spikeTableData, setSpikeTableData] = useState(null);

  useEffect(() => {
    getProteinData();
  }, []);

  const onChangeFile = (event, params) => {
    if (params === "spike-create")
      setSpikeProteinFileName(event.target.files[0].name);
  };

  const saveProteinData = (event, params) => {
    event.preventDefault();
    let file = event.target.pr_file.files[0];
    let body = new FormData();
    body.append("file", file);
    axios
      .post(
        `https://protien.catkinsofttech-bd.com/api/import-protein-table/${params}`,
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
        `https://protien.catkinsofttech-bd.com/api/import-protein-table/${name}`,
        body
      )
      .then((res) => {
        alert("Data successfully delete");
        getProteinData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProteinData = () => {
    axios
      .get(
        `https://protien.catkinsofttech-bd.com/api/import-protein-table/all-csv-names`
      )
      .then((res) => {
        // console.log(res.data)
        let result = {};
        res.data.csv_names.map(
          (data) => (result[data.table_name] = data.file_name)
        );
        setSpikeTableData(result);
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
                <input
                  type="file"
                  id="pr_file"
                  name="pr_file"
                  onChange={(e) => onChangeFile(e, "spike-create")}
                />
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
            <p>
              {(spikeTableData && spikeTableData["spike"]) ||
                "No file uploaded"}
            </p>
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
            <p>
              {(spikeTableData && spikeTableData["protein-2"]) ||
                "No file uploaded"}
            </p>
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
            <p>
              {(spikeTableData && spikeTableData["protein-3"]) ||
                "No file uploaded"}
            </p>
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
            <p>
              {(spikeTableData && spikeTableData["protein-4"]) ||
                "No file uploaded"}
            </p>
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
            <p>
              {(spikeTableData && spikeTableData["protein-5"]) ||
                "No file uploaded"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataUpload;

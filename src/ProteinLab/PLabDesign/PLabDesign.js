import React, { useState, useRef, useEffect } from "react";
import "./PLabDesign.css";
import "../PLabAnalysis/PLabAnalysis.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PLabDesignDraft from "./PLabDesignDraft";
import PLabDesignMyProtein from "./PLabDesignMyProtein";
import PLabDesignEdit from "./PLabDesignEdit";
import PLabDesignReview from "./PLabDesignReview";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PLabDesign = () => {
  const ref = useRef();

  const classes = useStyles();
  const [dlab, setDLab] = useState(10);
  const [design, setDesign] = useState(10);
  const [classs, setDesignClasss] = useState(0);

  const [showProtein, setShowProtein] = useState(false);
  const [graphValue, setGraphValue] = useState({});
  const [allGraphValue, setAllGraphValue] = useState({});

  let lowPosition = 1;
  let highPosition = 100;

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showProtein && ref.current && !ref.current.contains(e.target)) {
        setShowProtein(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showProtein]);

  const handleChangeShowProtein = () => {
    setShowProtein(true);
  };

  const handleChangeHiddenProtein = () => {
    setShowProtein(false);
  };

  const handleChangeDLab = (event) => {
    setDLab(event.target.value);
  };

  const handleChangeDesign = (event) => {
    setDesign(event.target.value);
  };

  const handleChangeDClasss = (event) => {
    setDesignClasss(event.target.value);
  };

  const handleAllGraphs = async () => {
    const data = {
      region: classs,
      lowPosition: lowPosition,
      highPosition: highPosition,
    };

    const a = axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/spike-protein-lab-graph",
      data
    );
    const b = axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/protein-2-lab-graph",
      data
    );
    const c = axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/protein-3-lab-graph",
      data
    );
    const d = axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/protein-4-lab-graph",
      data
    );
    const e = axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/protein-5-lab-graph",
      data
    );
    await axios
      .all([a, b, c, d, e])
      .then(
        axios.spread((...responses) => {
          if (data.region === 0) {
            setAllGraphValue({ res: responses });
            setGraphValue({ res: null });
          } else {
            setGraphValue({ res: responses });
          }
        })
      )
      .catch((errors) => {
        console.log("errors----", errors);
      });
  };

  useEffect(() => {
    handleAllGraphs();
  }, [classs]);

  return (
    <>
      <section className="container">
        <div>
          <div className="flex items-center justify-center mt-6 mb-0 plta-title-container">
            <div
              className="blue-squer"
              style={{ backgroundColor: "#03A9F4" }}
            ></div>
            <h1 className="text-center plta-title">ProteinLab Design</h1>
          </div>

          <nav className="nav-menu">
            <div className="control-btn">
              <FormControl
                variant="filled"
                className={classes.formControl}
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
                  LAB
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={dlab}
                  onChange={handleChangeDLab}
                >
                  <MenuItem value={10}>Analysis</MenuItem>
                  <MenuItem value={20}>Design</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                variant="filled"
                className={classes.formControl}
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
                  DESIGN
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={design}
                  onChange={handleChangeDesign}
                >
                  <MenuItem value={10}>Auto</MenuItem>
                  <MenuItem value={20}>Simplified</MenuItem>
                  <MenuItem value={30}>Manual</MenuItem>
                  {/* <MenuItem value={40}>My Protein</MenuItem> */}
                </Select>
              </FormControl>

              <div
                className={classes.formControl}
                onClick={handleChangeShowProtein}
                style={{
                  border: "1px solid #808080",
                  borderBottom: "2px solid #808080",
                  borderRadius: "5px",
                  width: "170px",
                  height: "58px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button
                  style={{
                    color: "#6495ed",
                    border: "none",
                    margin: "0px 0px 0px 20px",
                    fontSize: "17px",
                  }}
                >
                  PROTEIN
                </button>
                <i
                  class="fa-solid fa-sort-down"
                  style={{ color: "#808080", margin: "17px 10px 0px 20px" }}
                ></i>
              </div>

              {showProtein ? (
                <div className="protein-pop-up" ref={ref}>
                  <div className="testing">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 10px",
                      }}
                    >
                      <p style={{ margin: "20px 5px" }}>Spike</p>
                      <input
                        type="number"
                        placeholder="1"
                        style={{
                          border: "1px solid #808080",
                          borderRadius: "5px",
                          width: "50px",
                          margin: "0px 5px",
                          padding: "3px 5px",
                        }}
                      />
                      <input
                        type="number"
                        placeholder="1273"
                        style={{
                          border: "1px solid #808080",
                          borderRadius: "5px",
                          width: "50px",
                          margin: "0px 5px",
                          padding: "3px 5px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 10px",
                      }}
                    >
                      <p style={{ margin: "20px 5px" }}>M</p>
                      <input
                        type="number"
                        placeholder="20"
                        style={{
                          border: "1px solid #808080",
                          borderRadius: "5px",
                          width: "50px",
                          margin: "0px 5px 0px 30px",
                          padding: "3px 5px",
                        }}
                      />
                      <input
                        type="number"
                        placeholder="450"
                        style={{
                          border: "1px solid #808080",
                          borderRadius: "5px",
                          width: "50px",
                          margin: "0px 5px",
                          padding: "3px 5px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px 10px",
                      }}
                    >
                      <p style={{ margin: "20px 5px" }}>N</p>
                      <input
                        type="number"
                        placeholder="90"
                        style={{
                          border: "1px solid #808080",
                          borderRadius: "5px",
                          width: "50px",
                          margin: "0px 5px 0px 30px",
                          padding: "3px 5px",
                        }}
                      />
                      <input
                        type="number"
                        placeholder="260"
                        style={{
                          border: "1px solid #808080",
                          borderRadius: "5px",
                          width: "50px",
                          margin: "0px 5px",
                          padding: "3px 5px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              <FormControl
                variant="filled"
                className={classes.formControl}
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
                  REGION
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={classs}
                  onChange={handleChangeDClasss}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={0}>All</MenuItem>
                </Select>
              </FormControl>
            </div>
          </nav>
        </div>

        <div>
          {design === 30 && <PLabDesignDraft />}

          {design === 10 && graphValue ? (
            <PLabDesignEdit
              graphValue={graphValue}
              allGraphValue={allGraphValue}
            />
          ) : (
            <p>Loading...</p>
          )}
          {design === 20 && <PLabDesignReview graphValue={graphValue} />}
          {design === 40 && <PLabDesignMyProtein />}
        </div>
      </section>
    </>
  );
};

export default PLabDesign;

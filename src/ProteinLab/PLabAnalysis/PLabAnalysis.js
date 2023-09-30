import React, { useState, useRef, useEffect } from "react";
import "./PLabAnalysis.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PLabTableAnalysis from "./PLabTableAnalysis";
import ApexChart from "./ApexChart";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import useFetchRanges from "../custom/useFetchRanges";
import { sendRequest } from "../api/ApiConfig";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  proteinPopupButton: {
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    position: "relative",
    padding: "0 10px 0 13px",
    border: "1px solid #808080",
    borderBottom: "2px solid #808080",
    boxShadow: "0 1px 0px 0px #808080",
    borderRadius: "5px",
    width: "170px",
    height: "58px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.12)",
    },
  },
}));

const DEFAULT_RANGES = {
  A: { min: 1, max: 1273 },
  B: { min: 20, max: 450 },
  C: { min: 90, max: 260 },
  D: { min: 90, max: 260 },
  E: { min: 90, max: 260 },
};

const PLabAnalysis = () => {
  const classes = useStyles();
  const ref = useRef();
  const [lab, setLab] = useState(10);
  const [analysis, setAnalysis] = useState(20);
  const [matrix, setMatrix] = useState(1);
  const [classs, setClasss] = useState(0);
  const [showProtein, setShowProtein] = useState(false);
  const [protienDetailA, setProtienDetailsA] = useState({});
  const [protienDetailB, setProtienDetailsB] = useState({});
  const [protienDetailC, setProtienDetailsC] = useState({});
  const [protienDetailD, setProtienDetailsD] = useState({});
  const [protienDetailE, setProtienDetailsE] = useState({});
  const [graphValue, setGraphValue] = useState({});
  const [aMin, setAMin] = useState(0);
  const [aMax, setAMax] = useState(0);
  const [bMin, setBMin] = useState(0);
  const [bMax, setBMax] = useState(0);
  const [cMin, setCMin] = useState(0);
  const [cMax, setCMax] = useState(0);
  const [dMin, setDMin] = useState(0);
  const [dMax, setDMax] = useState(0);
  const [eMin, setEMin] = useState(0);
  const [eMax, setEMax] = useState(0);
  const { range, loading } = useFetchRanges();
  console.log("rangeeeeeeeee", range);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    console.log("repeatingggggggggggg");
    setGraphValue({});
    handleAllGraphs();
    handleSetProtienDetails(null);
  }, [
    classs,
    matrix,
    aMin,
    aMax,
    bMin,
    bMax,
    cMin,
    cMax,
    dMin,
    dMax,
    eMin,
    eMax,
  ]);

  const handleChangeShowProtein = () => {
    setShowProtein(true);
  };

  const handleSetProtienDetails = (value) => {
    if (value) {
      setProtienDetailsA({ a: graphValue.res[0].data.all_data[value - 1] });
      setProtienDetailsB({ b: graphValue.res[1].data.all_data[value - 1] });
      setProtienDetailsC({ c: graphValue.res[2].data.all_data[value - 1] });
      setProtienDetailsD({ d: graphValue.res[3].data.all_data[value - 1] });
      setProtienDetailsE({ e: graphValue.res[4].data.all_data[value - 1] });
    } else {
      setProtienDetailsA({});
      setProtienDetailsB({});
      setProtienDetailsC({});
      setProtienDetailsD({});
      setProtienDetailsE({});
    }
  };

  const getInitValue = async () => {
    try {
      const response = await axios.get(
        "https://protien.catkinsofttech-bd.com/api/filter/protien-position-range"
      );
      const data = response.data;
      console.log("size of data: ", data);

      // Set default values or values from the response data
      // setAMin(Math.max(range?.spike_table.min, DEFAULT_RANGES.A.min));
      // setAMax(Math.min(range?.spike_table.max, DEFAULT_RANGES.A.max));
      // setBMin(Math.max(range?.table_2.min, DEFAULT_RANGES.B.min));
      // setBMax(Math.min(range?.table_2.max, DEFAULT_RANGES.B.max));
      // setCMin(Math.max(range?.table_3.min, DEFAULT_RANGES.C.min));
      // setCMax(Math.min(range?.table_3.max, DEFAULT_RANGES.C.max));
      // setDMin(Math.max(range?.table_4.min, DEFAULT_RANGES.D.min));
      // setDMax(Math.min(range?.table_4.max, DEFAULT_RANGES.D.max));
      // setEMin(Math.max(range?.table_5.min, DEFAULT_RANGES.E.min));
      // setEMax(Math.min(range?.table_5.max, DEFAULT_RANGES.E.max));

      setAMin(Math.max(data.spike_table.min, DEFAULT_RANGES.A.min));
      setAMax(Math.min(data.spike_table.max, DEFAULT_RANGES.A.max));
      setBMin(Math.max(data.table_2.min, DEFAULT_RANGES.B.min));
      setBMax(Math.min(data.table_2.max, DEFAULT_RANGES.B.max));
      setCMin(Math.max(data.table_3.min, DEFAULT_RANGES.C.min));
      setCMax(Math.min(data.table_3.max, DEFAULT_RANGES.C.max));
      setDMin(Math.max(data.table_4.min, DEFAULT_RANGES.D.min));
      setDMax(Math.min(data.table_4.max, DEFAULT_RANGES.D.max));
      setEMin(Math.max(data.table_5.min, DEFAULT_RANGES.E.min));
      setEMax(Math.min(data.table_5.max, DEFAULT_RANGES.E.max));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAllGraphs = async () => {
    // Define an array of positions with associated URLs
    // const positions = [
    //   { name: "spike-protein", min: aMin, max: aMax },
    //   { name: "protein-2", min: bMin, max: bMax },
    //   { name: "protein-3", min: cMin, max: cMax },
    //   { name: "protein-4", min: dMin, max: dMax },
    //   { name: "protein-5", min: eMin, max: eMax },
    // ];
    const positions = [
      { min: aMin, max: aMax, url: "spike-protein-lab-graph" },
      { min: bMin, max: bMax, url: "protein-2-lab-graph" },
      { min: cMin, max: cMax, url: "protein-3-lab-graph" },
      { min: dMin, max: dMax, url: "protein-4-lab-graph" },
      { min: eMin, max: eMax, url: "protein-5-lab-graph" },
    ];

    // Check if all min and max values are 0
    const allZeros = positions.every(
      (position) => position.min === 0 && position.max === 0
    );

    if (allZeros) {
      getInitValue();
      return;
    }

    // Create an array of requests

    // const positions = [
    //   { min: aMin, max: aMax },
    //   { min: bMin, max: bMax },
    //   { min: cMin, max: cMax },
    //   { min: dMin, max: dMax },
    //   { min: eMin, max: eMax },
    // ];

    const requests = positions.map(
      async (position, index) =>
        // {
        //   const data = {
        //     matrix: matrix,
        //     optimized_label: classs,
        //     lowPosition: position.min,
        //     highPosition: position.max,
        //   };
        //   console.log("indexxxxxxxxxxxx", index);
        //   return sendRequest(index + 1, data);
        // }
        await axios.post(
          `https://protien.catkinsofttech-bd.com/api/filter/${position.url}`,
          {
            matrix: matrix,
            optimized_label: classs,
            lowPosition: position.min,
            highPosition: position.max,
            auto: true
          }
        )
    );
    console.log("requests:", requests);

    try {
      setIsLoading(true);
      const responses = await Promise.all(requests);
      setGraphValue({ res: responses });
      console.log("Responses:", responses);
    } catch (errors) {
      console.error("Errors:", errors);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeLab = (event) => {
    setLab(event.target.value);
  };
  const handleChangeAnalysis = (event) => {
    if (event.target.value === 20 && matrix === 0) {
      setClasss(1);
    } else {
      setClasss(0);
    }
    setAnalysis(event.target.value);
  };
  const handleChangeMatrix = (event) => {
    if (event.target.value === 0 && analysis === 20) {
      setClasss(1);
    } else {
      setClasss(0);
    }
    setMatrix(event.target.value);
  };
  const handleChangeClasss = (event) => {
    setClasss(event.target.value);
  };
  const handleProteinSpikMin = (event) => {
    setAMin(event.target.value);
  };
  const handleProteinSpikMax = (event) => {
    setAMax(event.target.value);
  };
  const handleProteinMMin = (event) => {
    setBMin(event.target.value);
  };
  const handleProteinMMax = (event) => {
    setBMax(event.target.value);
  };
  const handleProteinNMin = (event) => {
    setCMin(event.target.value);
  };
  const handleProteinNMax = (event) => {
    setCMax(event.target.value);
  };
  const handleProteinPMin = (event) => {
    setDMin(event.target.value);
  };
  const handleProteinPMax = (event) => {
    setDMax(event.target.value);
  };
  const handleProteinDMax = (event) => {
    setEMax(event.target.value);
  };
  const handleProteinDMin = (event) => {
    setEMin(event.target.value);
  };
  return (
    <>
      <section className="container">
        <div>
          <div className="flex items-center justify-center mt-6 mb-0 plta-title-container">
            <div className="blue-squer"></div>
            {analysis === 20 && (
              <h1 className="text-center plta-title">
                ProteinLab Table Analysis
              </h1>
            )}
            {analysis === 10 &&
              (classs === 0 ? (
                <h1 className="text-center plta-title">
                  ProteinLab Graph Analysis All Optimized Level
                </h1>
              ) : (
                <h1 className="text-center plta-title">
                  ProteinLab Graph Analysis Single Optimized Level
                </h1>
              ))}
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
                  value={lab}
                  onChange={handleChangeLab}
                >
                  <MenuItem value={10}>
                    <NavLink
                      to="/protein-lab-analysis"
                      className="text-black text-decoration-none"
                    >
                      Analysis
                    </NavLink>
                  </MenuItem>
                  <MenuItem value={20}>
                    <NavLink
                      to="/protein-lab-design"
                      className="text-black text-decoration-none"
                    >
                      Design
                    </NavLink>
                  </MenuItem>
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
                  ANALYSIS
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={analysis}
                  onChange={handleChangeAnalysis}
                >
                  <MenuItem value={10}>Graph</MenuItem>
                  <MenuItem value={20}>Table</MenuItem>
                  {/* <MenuItem value={30}>My Analysis</MenuItem> */}
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
                  MATRIX
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={matrix}
                  onChange={handleChangeMatrix}
                >
                  <MenuItem value={1}>PM Region</MenuItem>
                  <MenuItem value={0}>PM Sequence</MenuItem>
                </Select>
              </FormControl>
              <div className="position-relative">
                <div
                  className={`${classes.proteinPopupButton} ${classes.formControl}`}
                  onClick={handleChangeShowProtein}
                >
                  <span
                    style={{
                      color: "black",
                      fontSize: "17px",
                      display: "inline-block",
                    }}
                  >
                    Protein
                  </span>
                  <i
                    class="fa-solid fa-sort-down"
                    style={{ color: "#808080" }}
                  ></i>
                </div>
                {showProtein && (
                  <div className="protein-pop-up " ref={ref}>
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
                          onChange={handleProteinSpikMin}
                          id="low"
                          name="low"
                          value={aMin}
                          placeholder="1"
                          style={{
                            border: "1px solid #808080",
                            borderRadius: "5px",
                            width: "60px",
                            margin: "0px 5px",
                            padding: "3px 5px",
                          }}
                        />
                        <input
                          type="number"
                          id="high"
                          name="high"
                          onChange={handleProteinSpikMax}
                          value={aMax}
                          placeholder="1273"
                          style={{
                            border: `1px solid #808080}`,
                            borderRadius: "5px",
                            width: "70px",
                            margin: "0px 5px",
                            padding: "3px 5px",
                          }}
                        />
                      </div>
                      {analysis !== 20 && (
                        <>
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
                              id="low"
                              name="low"
                              onChange={handleProteinMMin}
                              placeholder="20"
                              value={bMin}
                              style={{
                                border: "1px solid #808080",
                                borderRadius: "5px",
                                width: "60px",
                                margin: "0px 5px 0px 30px",
                                padding: "3px 5px",
                              }}
                            />
                            <input
                              type="number"
                              id="high"
                              name="high"
                              onChange={handleProteinMMax}
                              placeholder="450"
                              value={bMax}
                              style={{
                                border: "1px solid #808080",
                                borderRadius: "5px",
                                width: "70px",
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
                              id="low"
                              name="low"
                              onChange={handleProteinNMin}
                              placeholder="90"
                              value={cMin}
                              style={{
                                border: "1px solid #808080",
                                borderRadius: "5px",
                                width: "60px",
                                margin: "0px 5px 0px 30px",
                                padding: "3px 5px",
                              }}
                            />
                            <input
                              type="number"
                              id="high"
                              name="high"
                              onChange={handleProteinNMax}
                              placeholder="260"
                              value={cMax}
                              style={{
                                border: "1px solid #808080",
                                borderRadius: "5px",
                                width: "70px",
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
                            <p style={{ margin: "20px 5px" }}>E</p>
                            <input
                              type="number"
                              id="low"
                              name="low"
                              onChange={handleProteinPMin}
                              placeholder="90"
                              value={dMin}
                              style={{
                                border: "1px solid #808080",
                                borderRadius: "5px",
                                width: "60px",
                                margin: "0px 5px 0px 30px",
                                padding: "3px 5px",
                              }}
                            />
                            <input
                              type="number"
                              id="high"
                              name="high"
                              onChange={handleProteinPMax}
                              placeholder="260"
                              value={dMax}
                              style={{
                                border: "1px solid #808080",
                                borderRadius: "5px",
                                width: "70px",
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
                            <p style={{ margin: "20px 5px" }}>D</p>
                            <input
                              type="number"
                              id="low"
                              name="low"
                              onChange={handleProteinDMin}
                              placeholder="90"
                              value={eMin}
                              style={{
                                border: "1px solid #808080",
                                borderRadius: "5px",
                                width: "60px",
                                margin: "0px 5px 0px 30px",
                                padding: "3px 5px",
                              }}
                            />
                            <input
                              type="number"
                              id="high"
                              name="high"
                              onChange={handleProteinDMax}
                              placeholder="260"
                              value={eMax}
                              style={{
                                border: "1px solid #808080",
                                borderRadius: "5px",
                                width: "70px",
                                margin: "0px 5px",
                                padding: "3px 5px",
                              }}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

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
                  OPTIMIZED LEVEL
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={classs}
                  onChange={handleChangeClasss}
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
                  {matrix === 0 && <MenuItem value={20}>20</MenuItem>}
                  <MenuItem value={0}>All</MenuItem>
                </Select>
              </FormControl>
            </div>
          </nav>
        </div>

        {analysis === 20 && (
          <div>
            <PLabTableAnalysis graphValue={graphValue} matrix={matrix} />
          </div>
        )}
        {analysis === 10 && (
          <div className="graph-container">
            <div className="graph-chart">
              <p>Optimized Levels</p>
              <div className="chart">
                {isLoading ? (
                  <CircularProgress
                    color="primary"
                    style={{ textAlign: "center" }}
                  />
                ) : (
                  graphValue && (
                    <ApexChart
                      showProtein={handleSetProtienDetails}
                      graphValue={graphValue}
                    />
                  )
                )}
              </div>
            </div>
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
            {graphValue && (
              <div className="protein-info-container">
                <div className="protein-info-details">
                  <div className="protein-info-logo">
                    <p>
                      {protienDetailA.a
                        ? protienDetailA.a.amino_acid_1_ltr
                        : "--"}
                    </p>
                    {matrix === 1 && <div></div>}
                    {matrix === 1 && (
                      <p>
                        {protienDetailA.a ? protienDetailA.a.Reg_1_ltr : "--"}
                      </p>
                    )}
                  </div>
                  <div className="protein-info-details-info">
                    <p>Spike Protein</p>
                    <p>{protienDetailA.a ? protienDetailA.a.position : "--"}</p>
                    <p>
                      Level{" "}
                      {matrix === 0 && protienDetailA?.a
                        ? protienDetailA?.a?.Seq_AOL
                        : protienDetailA?.a?.Reg_SOL}
                    </p>
                  </div>
                </div>

                <div className="protein-info-details  protein-2">
                  <div className="protein-info-logo protein-2-logo">
                    <p>
                      {protienDetailB.b
                        ? protienDetailB.b.amino_acid_1_ltr
                        : "--"}
                    </p>
                    {matrix === 1 && <div></div>}
                    {matrix === 1 && (
                      <p>
                        {protienDetailB.b ? protienDetailB.b.Reg_1_ltr : "--"}
                      </p>
                    )}
                  </div>
                  <div className="protein-info-details-info">
                    <p>Protein 2</p>
                    <p>{protienDetailB.b ? protienDetailB.b.position : "--"}</p>
                    <p>
                      Level{" "}
                      {matrix === 0 && protienDetailB?.b
                        ? protienDetailB?.b?.Seq_AOL
                        : protienDetailB?.b?.Reg_SOL}
                    </p>
                  </div>
                </div>

                <div className="protein-info-details  protein-3">
                  <div className="protein-info-logo protein-3-logo">
                    <p>
                      {protienDetailC.c
                        ? protienDetailC.c.amino_acid_1_ltr
                        : "--"}
                    </p>
                    {matrix === 1 && <div></div>}
                    {matrix === 1 && (
                      <p>
                        {protienDetailC.c ? protienDetailC.c.Reg_1_ltr : "--"}
                      </p>
                    )}
                  </div>
                  <div className="protein-info-details-info">
                    <p>Protein 3</p>
                    <p>{protienDetailC.c ? protienDetailC.c.position : "--"}</p>
                    <p>
                      Level{" "}
                      {matrix === 0 && protienDetailC?.c
                        ? protienDetailC?.c?.Seq_AOL
                        : protienDetailC?.c?.Reg_SOL}
                    </p>
                  </div>
                </div>

                <div className="protein-info-details  protein-4">
                  <div className="protein-info-logo protein-4-logo">
                    <p>
                      {protienDetailD.d
                        ? protienDetailD.d.amino_acid_1_ltr
                        : "--"}
                    </p>
                    {matrix === 1 && <div></div>}
                    {matrix === 1 && (
                      <p>
                        {protienDetailD.d ? protienDetailD.d.Reg_1_ltr : "--"}
                      </p>
                    )}
                  </div>
                  <div className="protein-info-details-info">
                    <p>Protein 4</p>
                    <p>{protienDetailD.d ? protienDetailD.d.position : "--"}</p>
                    <p>
                      Level{" "}
                      {matrix === 0 && protienDetailD?.d
                        ? protienDetailD?.d?.Seq_AOL
                        : protienDetailD?.d?.Reg_SOL}
                    </p>
                  </div>
                </div>

                <div className="protein-info-details protein-5">
                  <div className="protein-info-logo protein-5-logo">
                    <p>
                      {protienDetailE.e
                        ? protienDetailE.e.amino_acid_1_ltr
                        : "--"}
                    </p>
                    {matrix === 1 && <div></div>}
                    {matrix === 1 && (
                      <p>
                        {protienDetailE.e ? protienDetailE.e.Reg_1_ltr : "--"}
                      </p>
                    )}
                  </div>
                  <div className="protein-info-details-info">
                    <p>Protein 5</p>
                    <p>{protienDetailE.e ? protienDetailE.e.position : "--"}</p>
                    <p>
                      Level{" "}
                      {matrix === 0 && protienDetailE?.e
                        ? protienDetailE?.e?.Seq_AOL
                        : protienDetailE?.e?.Reg_SOL}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default PLabAnalysis;

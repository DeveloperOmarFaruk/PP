import React, { useEffect, useRef, useState } from "react";
import useApiCall from "../custom/useApiCall";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import { DEFAULT_RANGES } from "../constant/staticValue";
import PLabTableAnalysis from "./PLabTableAnalysis";
import { NavLink } from "react-router-dom";
import PLabGraphAnalysis from "./PLabGraphAnalysis";
import useFetchRanges from "../custom/useFetchRanges";

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

const PLabAnalysis = () => {
  const classes = useStyles();
  const ref = useRef();
  const [range, loading] = useFetchRanges();
  const [lab, setLab] = useState(10);
  const [analysis, setAnalysis] = useState(20);
  const [matrix, setMatrix] = useState(1);
  const [classs, setClasss] = useState(0);
  const [protein, setProtein] = useState(4);
  const [showProtein, setShowProtein] = useState(false);

  const minD = analysis === 20 ? range?.table_4.min : DEFAULT_RANGES.D.min;
  const maxD = analysis === 20 ? range?.table_4.max : DEFAULT_RANGES.D.max;

  const minE = analysis === 20 ? range?.table_5.min : DEFAULT_RANGES.E.min;
  const maxE = analysis === 20 ? range?.table_5.max : DEFAULT_RANGES.E.max;

  const [aMin, setAMin, aMax, setAMax, aData, aIsLoading] = useApiCall(
    matrix,
    classs,
    DEFAULT_RANGES.A.min,
    DEFAULT_RANGES.A.max,
    1
  );
  const [bMin, setBMin, bMax, setBMax, bData, bIsLoading] = useApiCall(
    matrix,
    classs,
    DEFAULT_RANGES.B.min,
    DEFAULT_RANGES.B.max,
    2
  );
  const [cMin, setCMin, cMax, setCMax, cData, cIsLoading] = useApiCall(
    matrix,
    classs,
    DEFAULT_RANGES.C.min,
    DEFAULT_RANGES.C.max,
    3
  );
  const [dMin, setDMin, dMax, setDMax, dData, dIsLoading] = useApiCall(
    matrix,
    classs,
    minD,
    maxD,
    4
  );
  const [eMin, setEMin, eMax, setEMax, eData, eIsLoading] = useApiCall(
    matrix,
    classs,
    minE,
    maxE,
    5
  );

  const isLoading =
    loading | aIsLoading | bIsLoading | cIsLoading | dIsLoading | eIsLoading;

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

  const handleChangeShowProtein = () => setShowProtein(true);

  const handleChangeLab = (event) => setLab(event.target.value);

  const handleChangeClasss = (event) => setClasss(event.target.value);

  const handleProteinSpikMin = (event) => setAMin(event.target.value);

  const handleProteinSpikMax = (event) => setAMax(event.target.value);

  const handleProteinMMin = (event) => setBMin(event.target.value);

  const handleProteinMMax = (event) => setBMax(event.target.value);

  const handleProteinNMin = (event) => setCMin(event.target.value);

  const handleProteinNMax = (event) => setCMax(event.target.value);

  const handleProteinPMin = (event) => setDMin(event.target.value);

  const handleProteinPMax = (event) => setDMax(event.target.value);

  const handleProteinDMax = (event) => setEMax(event.target.value);

  const handleProteinDMin = (event) => setEMin(event.target.value);

  return (
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
            {analysis === 20 ? (
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
                  PROTEIN
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={protein}
                  onChange={(e) => setProtein(e.target.value)}
                >
                  {/* <MenuItem value={1}>Spike</MenuItem>
                  <MenuItem value={2}>Protein 2</MenuItem>
                  <MenuItem value={3}>Protein 3</MenuItem> */}
                  <MenuItem value={4}>Protein D</MenuItem>
                  <MenuItem value={5}>Protein E</MenuItem>
                </Select>
              </FormControl>
            ) : (
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
            )}

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
        <PLabTableAnalysis
          matrix={matrix}
          classs={classs}
          protein={protein}
          // spike={aData}
          // p2={bData}
          // p3={cData}
          p4={dData}
          p5={eData}
        />
      )}
      {analysis === 10 && (
        <PLabGraphAnalysis
          graphValue={[aData, bData, cData, dData, eData]}
          matrix={matrix}
          classs={classs}
          isLoading={isLoading}
        />
      )}
    </section>
  );
};

export default PLabAnalysis;

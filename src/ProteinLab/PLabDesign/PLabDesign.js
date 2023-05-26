import React, { useState, useRef, useEffect } from "react";
import "./PLabDesign.css";
import "../PLabAnalysis/PLabAnalysis.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PLabDesignDraft from "./PLabDesignDraft";
import PLabDesignMyProtein from "./PLabDesignMyProtein";
import PLabDesignEdit from "./PLabDesignEdit";
import PLabDesignReview from "./PLabDesignReview";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
  // const ref = useRef();

  const classes = useStyles();
  const [classs, setDesignClasss] = useState(0);
  const [dlab, setDLab] = useState(10);
  const [design, setDesign] = useState(10);
  const [protein, setProtein] = useState(1);
  const [myProtein, setMyProtein] = useState(1);
  const [matrix, setMatrix] = useState(0);

  // const [showProtein, setShowProtein] = useState(false);

  // const [graphValue, setGraphValue] = useState({});
  // const [allData, setAllData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [position, setPosition] = useState("");
  const [range, setRange] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeDLab = (event) => {
    setDLab(event.target.value);
  };

  const handleDesignChange = (event) => {
    if (event.target.value === 10) {
      setDesignClasss(0);
    }
    setDesign(event.target.value);
  };

  const handleChangeMatrix = (event) => {
    if (event.target.value === 1) {
      setDesignClasss(1);
    } else {
      setDesignClasss(0);
    }
    setMatrix(event.target.value);
  };

  useEffect(() => {
    const getRanges = async () => {
      try {
        setIsLoading(true);
        await axios
          .get(
            "https://protein.catkinsofttech-bd.xyz/api/filter/protien-position-range"
          )
          .then((response) => {
            setRange(response.data);
            setIsLoading(false);
          });
      } catch (error) {
        setIsLoading(false);
        console.log("range error", error);
      }
    };
    getRanges();
    // console.log("dfataaaaaaaaaaaaaaaaa", allData);
  }, []);

  useEffect(() => {
    const data = {
      matrix: matrix,
      optimized_label: classs,
      lowPosition: range?.spike_table?.min,
    };
    const getsingleData = async () => {
      switch (protein) {
        case 1:
          setIsLoading(true);
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/spike-protein-lab-graph",
              { ...data, highPosition: range?.spike_table?.max }
            )
            .then((response) => {
              setSingleData(response.data.all_data);
              setPosition(response.data.all_data[0].position);
              setIsLoading(false);
              // console.log("singleData: ", response.data.all_data);
            })
            .catch((error) => {
              console.log("protein error1", error);
              setIsLoading(false);
            });
          break;
        case 2:
          setIsLoading(true);
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/protein-2-lab-graph",
              { ...data, highPosition: range?.table_2?.max }
            )
            .then((response) => {
              setSingleData(response.data.all_data);
              setPosition(response.data.all_data[0].position);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log("protein error2", error);
              setIsLoading(false);
            });
          break;
        case 3:
          setIsLoading(true);
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/protein-3-lab-graph",
              { ...data, highPosition: range?.table_3?.max }
            )
            .then((response) => {
              setSingleData(response.data.all_data);
              setPosition(response.data.all_data[0].position);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log("protein error3", error);
              setIsLoading(false);
            });
          break;
        case 4:
          setIsLoading(true);
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/protein-4-lab-graph",
              { ...data, highPosition: range?.table_4?.max }
            )
            .then((response) => {
              setSingleData(response.data.all_data);
              setPosition(response.data.all_data[0].position);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log("protein error4", error);
              setIsLoading(false);
            });
          break;
        case 5:
          setIsLoading(true);
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/protein-5-lab-graph",
              { ...data, highPosition: range?.table_5?.max }
            )
            .then((response) => {
              setSingleData(response.data.all_data);
              setPosition(response.data.all_data[0].position);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log("protein error5", error);
              setIsLoading(false);
            });
          break;
        default:
          break;
      }
    };
    // console.log("||rangesss", range);
    if (range) getsingleData();
    // console.log("444444444444", classs);
    // console.log("444444444444", singleData);
  }, [classs, protein, range]);

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
                  <MenuItem value={10}>
                    <NavLink
                      to="/protein-lab-design"
                      className="text-black text-decoration-none"
                    >
                      Design
                    </NavLink>
                  </MenuItem>
                  <MenuItem value={20}>
                    <NavLink
                      to="/protein-lab-analysis"
                      className="text-black text-decoration-none"
                    >
                      Analysis
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
                  DESIGN
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={design}
                  onChange={(event) => handleDesignChange(event)}
                >
                  <MenuItem value={10}>Auto</MenuItem>
                  <MenuItem value={20}>Manual</MenuItem>
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
                  PROTEIN
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={protein}
                  onChange={(e) => setProtein(e.target.value)}
                >
                  <MenuItem value={1}>Spike</MenuItem>
                  <MenuItem value={2}>Protein 2</MenuItem>
                  <MenuItem value={3}>Protein 3</MenuItem>
                  <MenuItem value={4}>Protein 4</MenuItem>
                  <MenuItem value={5}>Protein 5</MenuItem>
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
                  MYPROTEIN
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={myProtein}
                  onChange={(e) => setMyProtein(e.target.value)}
                >
                  <MenuItem value={1}>MySpike</MenuItem>
                  <MenuItem value={2}>MyProtein 2</MenuItem>
                  <MenuItem value={3}>MyProtein 3</MenuItem>
                  <MenuItem value={4}>MyProtein 4</MenuItem>
                  <MenuItem value={5}>MyProtein 5</MenuItem>
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
                  <MenuItem value={0}>PM Region</MenuItem>
                  <MenuItem value={1}>PM Sequence</MenuItem>
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
                  OPTIMIZED LEVEL
                </InputLabel>
                {/* {design === 10 ? (
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={classs}
                    onChange={(e) => setDesignClasss(e.target.value)}
                  >
                    <MenuItem selected value={0}>
                      All
                    </MenuItem>
                  </Select>
                ) : ( */}
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={classs}
                  onChange={(e) => setDesignClasss(e.target.value)}
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
                  {matrix === 1 ? <></> : <MenuItem value={0}>All</MenuItem>}
                </Select>
                {/* )} */}
              </FormControl>
            </div>
          </nav>
        </div>

        {singleData && (
          // <PLabDesignDraft />
          <PLabDesignEdit
            design={design}
            singleData={singleData}
            proteinNo={protein}
            region={classs}
            positionValue={position}
            isLoading={isLoading}
          />
        )}
      </section>
    </>
  );
};

export default PLabDesign;

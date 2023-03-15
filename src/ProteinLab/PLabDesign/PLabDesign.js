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
  const ref = useRef();

  const classes = useStyles();
  const [classs, setDesignClasss] = useState(0);
  const [dlab, setDLab] = useState(10);
  const [design, setDesign] = useState(10);
  const [protein, setProtein] = useState(1);
  const [myProtein, setMyProtein] = useState(1);

  const [showProtein, setShowProtein] = useState(false);

  // const [graphValue, setGraphValue] = useState({});
  const [allData, setAllData] = useState({});
  const [proteinData, setProteinData] = useState({});

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

  const handleChangeDLab = (event) => {
    setDLab(event.target.value);
  };

  const handleAllGraphs = async () => {
    const data = {
      region: classs,
      lowPosition: lowPosition,
      highPosition: highPosition,
    };

    const a = await axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/spike-protein-lab-graph",
      data
    );
    const b = await axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/protein-2-lab-graph",
      data
    );
    const c = await axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/protein-3-lab-graph",
      data
    );
    const d = await axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/protein-4-lab-graph",
      data
    );
    const e = await axios.post(
      "https://protein.catkinsofttech-bd.xyz/api/filter/protein-5-lab-graph",
      data
    );
    await axios
      .all([a, b, c, d, e])
      .then(
        axios.spread((...responses) => {
          if (data.region === 0) {
            setAllData({ res: responses });
            // console.log("tttttttttttttttttfirst", allData.res);
          }
        })
      )
      .catch((errors) => {
        console.log("errors----", errors);
      });
  };

  useEffect(() => {
    handleAllGraphs();
  }, []);

  useEffect(() => {
    const data = {
      region: classs,
      lowPosition: lowPosition,
      highPosition: highPosition,
    };
    const getProteinData = async () => {
      switch (protein) {
        case 1:
          console.log("heeeeeeeeeeeeloollllllllllllllllll");
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/spike-protein-lab-graph",
              data
            )
            .then((response) => setProteinData(response))
            .catch((error) => console.log("protein error", error));
          break;
        case 2:
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/protein-2-lab-graph",
              data
            )
            .then((response) => setProteinData(response))
            .catch((error) => console.log("protein error", error));
          break;
        case 3:
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/protein-3-lab-graph",
              data
            )
            .then((response) => setProteinData(response))
            .catch((error) => console.log("protein error", error));
          break;
        case 4:
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/protein-4-lab-graph",
              data
            )
            .then((response) => setProteinData(response))
            .catch((error) => console.log("protein error", error));
          break;
        case 5:
          await axios
            .post(
              "https://protein.catkinsofttech-bd.xyz/api/filter/protein-5-lab-graph",
              data
            )
            .then((response) => setProteinData(response))
            .catch((error) => console.log("protein error", error));
          break;
        default:
          break;
      }
    };
    getProteinData();
    // console.log("444444444444", proteinData);
  }, [classs, protein]);

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
                  onChange={(e) => setDesign(e.target.value)}
                >
                  <MenuItem value={10}>Auto</MenuItem>
                  <MenuItem value={30}>Manual</MenuItem>
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
                  REGION
                </InputLabel>
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
                  <MenuItem value={0}>All</MenuItem>
                </Select>
              </FormControl>
            </div>
          </nav>
        </div>

        <div>
          {design === 30 && allData.res.length && <PLabDesignDraft />}
          {design === 10 && allData && (
            <PLabDesignEdit
              proteinData={classs !== 0 ? proteinData.data.all_data : []}
              allData={allData.res}
              proteinNo={protein}
              region={classs}
            />
          )}
          {design === 20 && <PLabDesignReview graphValue={proteinData} />}
          {design === 40 && <PLabDesignMyProtein />}
        </div>
      </section>
    </>
  );
};

export default PLabDesign;

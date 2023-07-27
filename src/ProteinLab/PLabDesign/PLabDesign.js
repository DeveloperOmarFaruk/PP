import React, { useState, useEffect } from "react";
import "./PLabDesign.css";
import "../PLabAnalysis/PLabAnalysis.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PLabDesignEdit from "./PLabDesignEdit";
import { NavLink } from "react-router-dom";
import useFetchRanges from "./custom/useFetchRanges";
import { useDispatch, useSelector } from "react-redux";
import { addProteinData } from "../PLabReducers/proteinDataSlice";
import { proteinRangeEndpoints } from "./constant/apiConstant";
import { sendRequest } from "./api/ApiConfig";

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
  const classes = useStyles();
  const { range, loading } = useFetchRanges();
  const [classs, setDesignClasss] = useState(0);
  const [dlab, setDLab] = useState(10);
  const [protein, setProtein] = useState(1);
  const [myProtein, setMyProtein] = useState(1);
  const [matrix, setMatrix] = useState(1);
  const [singleData, setSingleData] = useState([]);
  const [position, setPosition] = useState("");
  const [isLoading, setIsLoading] = useState(loading || false);
  const dispatch = useDispatch();
  const proteinData = useSelector((state) => state.proteinData);

  const handleChangeDLab = (event) => {
    setDLab(event.target.value);
  };

  const handleChangeMatrix = (event) => {
    if (event.target.value === 0) {
      setDesignClasss(1);
    } else {
      setDesignClasss(0);
    }
    setMatrix(event.target.value);
  };

  useEffect(() => {
    if (!range) return;

    const tableName = proteinRangeEndpoints[protein];
    const { min, max } = range[tableName];

    const data = {
      matrix: matrix,
      optimized_label: classs,
      lowPosition: min,
      highPosition: max,
    };

    setIsLoading(true);
    sendRequest(protein, data)
      .then((response) => {
        if (response && response.all_data && response.all_data.length > 0) {
          setSingleData(response.all_data);
          setPosition(response.all_data[0].position);
          if (classs === 0 && proteinData.table.name !== tableName) {
            dispatch(
              addProteinData({ name: tableName, data: response.all_data })
            );
          }
        } else {
          console.log("No data found for the protein.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
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
                  <MenuItem value={1}>PM Region</MenuItem>
                  <MenuItem value={0}>PM Sequence</MenuItem>
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
                  {matrix === 0 ? <></> : <MenuItem value={0}>All</MenuItem>}
                </Select>
                {/* )} */}
              </FormControl>
            </div>
          </nav>
        </div>

        {singleData && (
          // <PLabDesignDraft />
          <PLabDesignEdit
            matrix={matrix}
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

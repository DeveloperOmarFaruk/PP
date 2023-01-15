import React, {useState, useRef, useEffect, useReducer} from 'react'
import "./PLabAnalysis.css";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PLabTableAnalysis from './PLabTableAnalysis';
import ApexChart from "./ApexChart";
import axios from "axios";
import { height } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PLabAnalysis = () => {
  const classes = useStyles();
  const ref = useRef()
  const [lab, setLab] = useState(10);
  const [analysis, setAnalysis] = useState(20);
  const [classs, setClasss] = useState(0);
  const [value, setValue] = useState({});
  const [error, setError] = useState({});
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

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (showProtein && ref.current && !ref.current.contains(e.target)) {
        setShowProtein(false);
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [showProtein])

	useEffect(() => {
		handleAllGraphs();
		handleSetProtienDetails(null);
  }, [classs, aMin, aMax, bMin, bMax, cMin, cMax, dMin, dMax, eMin, eMax])

  const handleChangeShowProtein = () => {
    setShowProtein(true);
  };

  const handleChangeHiddenProtein = () => {
    setShowProtein(false);
  };

	  const handleSetProtienDetails = (value) => {
			if (value) {
				setProtienDetailsA({'a': graphValue.res[0].data.all_data[value-1]});
				setProtienDetailsB({'b': graphValue.res[1].data.all_data[value-1]});
				setProtienDetailsC({'c': graphValue.res[2].data.all_data[value-1]});
				setProtienDetailsD({'d': graphValue.res[3].data.all_data[value-1]});
				setProtienDetailsE({'e': graphValue.res[4].data.all_data[value-1]});
			} else {
				setProtienDetailsA({});
				setProtienDetailsB({});
				setProtienDetailsC({});
				setProtienDetailsD({});
				setProtienDetailsE({});
			}
		};

		const getInitValue = async () => {
			await axios.get('https://protein.catkinsofttech-bd.xyz/api/filter/protien-position-range')
			.then(response => {
				setAMin(response.data.spike_table.min);
				setAMax(response.data.spike_table.max);
				setBMin(response.data.table_2.min);
				setBMax(response.data.table_2.max);
				setCMin(response.data.table_3.min); 
				setCMax(response.data.table_3.max); 
				setDMin(response.data.table_4.min); 
				setDMax(response.data.table_4.max); 
				setEMin(response.data.table_5.min);
				setEMax(response.data.table_5.max);
			})
			.catch(error => {
				console.log(error);
			});
		} 
		const handleAllGraphs = async () => {
			if (aMin===0 && aMax ===0 && bMin===0 && bMax ===0 && cMin===0 && cMax===0 && dMin===0 && dMax===0 && eMin===0 && eMax===0) {
				getInitValue();
			}
			const a = axios.post(
				'https://protein.catkinsofttech-bd.xyz/api/filter/spike-protein-lab-graph',
				{region: classs, lowPosition: aMin, highPosition: aMax}
			);
			const b = axios.post(
				'https://protein.catkinsofttech-bd.xyz/api/filter/protein-2-lab-graph', 
				{	region: classs,	lowPosition: bMin,	highPosition: bMax}
			);
			const c = axios.post(
				'https://protein.catkinsofttech-bd.xyz/api/filter/protein-3-lab-graph', 
				{	region: classs,	lowPosition: cMin,	highPosition: cMax}
			);
			const d = axios.post(
				'https://protein.catkinsofttech-bd.xyz/api/filter/protein-4-lab-graph', 
				{region: classs, lowPosition: dMin, highPosition: dMax}
			);
			const e = axios.post(
				'https://protein.catkinsofttech-bd.xyz/api/filter/protein-5-lab-graph', 
				{region: classs, lowPosition: eMin, highPosition: eMax}
			);
			await axios.all([a, b, c, d, e]).then(axios.spread((...responses) => {
				setGraphValue({'res': responses});
			})).catch(errors => {
				console.log("errors----", errors);
			})
		};

  const handleChangeLab = (event) => {
  setLab(event.target.value);
  };
  const handleChangeAnalysis = (event) => {
    setAnalysis(event.target.value);
  };
  const handleChangeClasss = (event) => {
    setClasss(event.target.value);
  };
  const handleProteinSpikeMin = (event) => {setAMin(event.target.value)}
	const handleProteinSpikeMax = (event) => {setAMax(event.target.value)}
	const handleProteinMMin = (event) => {setBMin(event.target.value)}
	const handleProteinMMax = (event) => {setBMax(event.target.value)}
	const handleProteinNMin = (event) => {setCMin(event.target.value)}
	const handleProteinNMax = (event) => {setCMax(event.target.value)}
	const handleProteinPMin = (event) => {setDMin(event.target.value)}
	const handleProteinPMax = (event) => {setDMax(event.target.value)}
  return (
      <>
       <section className="container">
        <div>
          <div className="flex items-center justify-center mt-6 mb-0 plta-title-container">
            <div className="blue-squer" ></div>
            { analysis === 20 && <h1 className="text-center plta-title">ProteinLab Table Analysis</h1>}
            { analysis === 10 && (classs === 0 ? <h1 className="text-center plta-title">ProteinLab Graph Analysis All Regions</h1> :
            <h1 className="text-center plta-title">ProteinLab Graph Analysis Single Region</h1> )}
            
          </div>
          <nav className="nav-menu">
            <div className="control-btn">


            <FormControl variant="filled" className={classes.formControl} style={{border:"1px solid #808080", borderRadius:"5px", width:"170px",}}>
        <InputLabel id="demo-simple-select-filled-label" style={{color:"#6495ed"}}>LAB</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={lab}
          onChange={handleChangeLab}
        >
         
                  <MenuItem value={10}>Analysis</MenuItem>
                  <MenuItem value={20}>Design</MenuItem>
        </Select>
      </FormControl> 


      <FormControl variant="filled" className={classes.formControl} style={{border:"1px solid #808080", borderRadius:"5px", width:"170px", }}>
        <InputLabel id="demo-simple-select-filled-label" style={{color:"#6495ed"}}>ANALYSIS</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={analysis}
          onChange={handleChangeAnalysis}
        >
         
          <MenuItem value={10}>Graph</MenuItem>
          <MenuItem value={20}>Table</MenuItem>     
          <MenuItem value={30}>My Analysis</MenuItem>
        </Select>
      </FormControl> 



      <div className={classes.formControl} onClick={handleChangeShowProtein} style={{ border: "1px solid #808080", borderBottom:'2px solid #808080', borderRadius: "5px", width: "170px", height:"58px", cursor:"pointer", display:'flex', justifyContent:'space-between',}}>
                <button style={{ color: "#6495ed", border: "none", margin: '0px 0px 0px 20px', fontSize:'17px' }}>PROTEIN </button>
                <i class="fa-solid fa-sort-down" style={{ color: "#808080", margin: '17px 10px 0px 20px' }}></i>
              </div>
              {
            showProtein ? 
							<div  className="protein-pop-up " ref={ref}>
								<div className="testing">
								<div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px', }}>
									<p style={{ margin:'20px 5px',}}>Spike</p>
									<input type='number' onChange={handleProteinSpikeMin} id="low" name="low" value={aMin}
										placeholder='1' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}} />
									<input type='number' id="high" name="high" onChange={handleProteinSpikeMax} value={aMax}
										placeholder='1273' 
										style={{border:`1px solid #808080}`, borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
								</div>
								
								<><div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px',}}>
									<p style={{ margin:'20px 5px'}}>M</p>
									<input type='number' id="low" name="low" onChange={handleProteinMMin} placeholder='20' value={bMin}
										style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px 0px 30px", padding:'3px 5px'}} />
									<input type='number' id="high" name="high" onChange={handleProteinMMax} placeholder='450' value={bMax}
									style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
								</div>
								
								<div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px',}}>
									<p style={{ margin:'20px 5px'}}>N</p>
									<input type='number' id="low" name="low" onChange={handleProteinNMin} placeholder='90' value={cMin}
									style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px 0px 30px", padding:'3px 5px'}} />
									<input type='number' id="high" name="high" onChange={handleProteinNMax} placeholder='260' value={cMax}
									style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
								</div>

								<div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px',}}>
									<p style={{ margin:'20px 5px'}}>P</p>
									<input type='number' id="low" name="low" onChange={handleProteinPMin} placeholder='90' value={dMin}
									style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px 0px 30px", padding:'3px 5px'}} />
									<input type='number' id="high" name="high" onChange={handleProteinPMax} placeholder='260' value={dMax}
									style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
								</div>
								</>
							</div>
              </div> : null
            }
              
              {/* <div className={classes.formControl} onClick={handleChangeShowProtein} style={{ border: "1px solid #808080", borderBottom:'2px solid #808080', borderRadius: "5px", width: "170px", cursor:"pointer", display:'flex', justifyContent:'space-between',}}>
                <button style={{ color: "#6495ed", border: "none", margin: '0px 0px 0px 20px', fontSize:'17px' }}>PROTEIN</button>
                <i class="fa-solid fa-sort-down" style={{ color: "#808080", margin: '17px 10px 0px 20px' }}></i>
              </div>

              {
            showProtein ? 
                  <div className="protein-pop-up" onClick={handleChangeHiddenProtein}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px'}}>
                      <p style={{ margin:'20px 5px',}}>Spike</p>
                      <input type='number' placeholder='1' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}} />
                      <input type='number' placeholder='1273' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div>
                    
          </div> : null
          } */}


      <FormControl 
				variant="filled" className={classes.formControl} 
				style={{border:"1px solid #808080", borderRadius:"5px", width:"170px", }}
			>
        <InputLabel id="demo-simple-select-filled-label" style={{color:"#6495ed"}}>
					REGION
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
					<MenuItem value={0}>All</MenuItem>
        </Select>
				</FormControl> 
         </div>
      </nav>
    </div>

        {
					analysis === 20 && 
					<div><PLabTableAnalysis graphValue={graphValue}/></div>
				}
        {analysis === 10 && <div className="graph-container">
          <div className="graph-chart">
            { classs === 0 ?<p>Regions</p> :
            <p>Ag</p>}
            <div className="chart">
            <ApexChart showProtein={handleSetProtienDetails} graphValue={graphValue}/>
            </div>
          </div>
          <p className="graph-title">Amino Acid Positions</p>
          <div className="graph-sub-title">
            {classs === 0 ? <p>All Regions: &nbsp;</p> :
            <p>Region {classs} : &nbsp;</p>}
            <p> Amino Acid and Substitute Pair</p>
          </div>
          <div className="protein-info-container">

            <div className="protein-info-details">
              <div className="protein-info-logo">
                <p>{protienDetailA.a ? protienDetailA.a.amino_acid_1_ltr : '--'}</p>
                <div></div>
                <p>{protienDetailA.a ? protienDetailA.a.sub_1_ltr : '--'}</p>
              </div>
              <div className="protein-info-details-info">
                <p>Spike Protein</p>
                <p>{protienDetailA.a ? protienDetailA.a.position : '--'}</p>
                {classs === 0 ? <p>Region {protienDetailA.a ? protienDetailA.a.region : '--'}</p> :
                  <p>{protienDetailA.a ? protienDetailA.a.ag : '0.0'} Ag</p>}
              </div>
            </div>

            <div className="protein-info-details  protein-2">
              <div className="protein-info-logo protein-2-logo">
                <p>{protienDetailB.b ? protienDetailB.b.amino_acid_1_ltr : '--'}</p>
                <div></div>
                <p>{protienDetailB.b ? protienDetailB.b.sub_1_ltr : '--'}</p>
              </div>
              <div className="protein-info-details-info">
                <p>Protein 2</p>
                <p>{protienDetailB.b ? protienDetailB.b.position : '--'}</p>
                {classs === 0 ? <p>Region {protienDetailB.b ? protienDetailB.b.region : '--'}</p> :
                <p>{protienDetailB.b ? protienDetailB.b.ag : '0.0'} Ag</p> }
              </div>
            </div>

            <div className="protein-info-details  protein-3">
              <div className="protein-info-logo protein-3-logo">
                <p>{protienDetailC.c ? protienDetailC.c.amino_acid_1_ltr : '--'}</p>
                <div></div>
                <p>{protienDetailC.c ? protienDetailC.c.sub_1_ltr : '--'}</p>
              </div>
              <div className="protein-info-details-info">
                <p>Protein 3</p>
                <p>{protienDetailC.c ? protienDetailC.c.position : '--'}</p>
                {classs === 0 ? <p>Region {protienDetailC.c ? protienDetailC.c.region : '--'}</p> :
                <p>{protienDetailC.c ? protienDetailC.c.ag : '0.0'} Ag</p>}
              </div>
            </div>

            <div className="protein-info-details  protein-4">
              <div className="protein-info-logo protein-4-logo">
                <p>{protienDetailD.d ? protienDetailD.d.amino_acid_1_ltr : '--'}</p>
                <div></div>
                <p>{protienDetailD.d ? protienDetailD.d.sub_1_ltr : '--'}</p>
              </div>
              <div className="protein-info-details-info">
                <p>Protein 4</p>
                <p>{protienDetailD.d ? protienDetailD.d.position : '--'}</p>
                {classs === 0 ? <p>Region {protienDetailD.d ? protienDetailD.d.region : '--'}</p> :
                  <p>{protienDetailD.d ? protienDetailD.d.ag : '0.0'} Ag</p> }
              </div>
            </div>

            <div className="protein-info-details protein-5">
              <div className="protein-info-logo protein-5-logo">
                <p>{protienDetailE.e ? protienDetailE.e.amino_acid_1_ltr : '--'}</p>
                <div></div>
                <p>{protienDetailE.e ? protienDetailE.e.sub_1_ltr : '--'}</p>
              </div>
              <div className="protein-info-details-info">
                <p>Protein 5</p>
                <p>{protienDetailE.e ? protienDetailE.e.position : '--'}</p>
                {classs === 0 ? <p>Region {protienDetailE.e ? protienDetailE.e.region : '--'}</p> : 
									<p>{protienDetailE.e ? protienDetailE.e.ag : '0.0'} Ag</p>}
              </div>
            </div>
          </div>
        </div>}

      </section>
    </>
  )
}

export default PLabAnalysis;
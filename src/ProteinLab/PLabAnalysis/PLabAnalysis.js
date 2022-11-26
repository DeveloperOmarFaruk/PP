import React, {useState, useRef, useEffect} from 'react'
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
	let ready = false;

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

  const handleChangeShowProtein = () => {
    setShowProtein(true);
  };
  const handleChangeHiddenProtein = () => {
    setShowProtein(false);
    };
	  const handleSetProtienDetails = (value) => {
			if (value == 10) {
				ready = true;
			}
			if (ready && value) {
				const data = {
					"position": value
				};
				const a = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-graph-1-query', data);
				const b = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-graph-2-query', data);
				const c = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-graph-3-query', data);
				const d = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-graph-4-query', data);
				const e = axios.post('https://protein.catkinsofttech-bd.xyz/api/filter/protein-graph-5-query', data);
			
				axios.all([a, b, c, d, e]).then(axios.spread((...responses) => {
					setProtienDetailsA({'a': responses[0].data});
					setProtienDetailsB({'b': responses[1].data});
					setProtienDetailsC({'c': responses[2].data});
					setProtienDetailsD({'d': responses[3].data});
					setProtienDetailsE({'e': responses[4].data});
				})).catch(errors => {
					console.log("errors----", errors);
				})
			}
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
  const handleProteinSpike = (event) => {
    let spike = value.protein?.spike || {}
    let spike_value = parseInt(event.target.value)
    spike[event.target.name] = spike_value
    setValue(prevState => ({...prevState, protein:{...prevState.protein, spike:spike}}))
    if(spike_value >= 1 && spike_value <= 1273){
      setError(prevState => ({...prevState, spike:{...prevState.spike, [event.target.name]:true}}))
    } else setError(prevState => ({...prevState, spike:{...prevState.spike, [event.target.name]:false}}))

  }
  const handleProteinM = (event) => {
    let m = value.protein?.m || {}
    let m_value = parseInt(event.target.value)
    m[event.target.name] = m_value
    setValue(prevState => ({...prevState, protein:{...prevState.protein, m:m}}))
    if(m_value >= 20 && m_value <= 450){
      setError(prevState => ({...prevState, m:{...prevState.m, [event.target.name]:true}}))
    } else setError(prevState => ({...prevState, m:{...prevState.m, [event.target.name]:false}}))
  }
  const handleProteinN = (event) => {
    let n = value.protein?.n || {}
    let n_value = parseInt(event.target.value)
    n[event.target.name] = n_value
    setValue(prevState => ({...prevState, protein:{...prevState.protein, spike:n}}))
    if(n_value >= 90 && n_value <= 260){
      setError(prevState => ({...prevState, n:{...prevState.n, [event.target.name]:true}}))
    } else setError(prevState => ({...prevState, n:{...prevState.n, [event.target.name]:false}}))
  }

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
                <button style={{ color: "#6495ed", border: "none", margin: '0px 0px 0px 20px', fontSize:'17px' }}>PROTEIN</button>
                <i class="fa-solid fa-sort-down" style={{ color: "#808080", margin: '17px 10px 0px 20px' }}></i>
              </div>


              {
            showProtein ? 
                  <div  className="protein-pop-up " ref={ref}>
                    <div className="testing">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px', }}>
                      <p style={{ margin:'20px 5px',}}>Spike</p>
                      <input type='number' onChange={handleProteinSpike} id="low" name="low" value={value.protein?.spike?.low && value.protein.spike.low }
                        placeholder='1' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}} />
                      <input type='number' id="high" name="high" onChange={handleProteinSpike} value={value.protein?.spike?.high && value.protein.spike.high }
                        placeholder='1273' 
                        style={{border:`1px solid #808080}`, borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div>
                    
                    { analysis !== 20 && <><div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px',}}>
                      <p style={{ margin:'20px 5px'}}>M</p>
                      <input type='number' id="low" name="low" onChange={handleProteinM} placeholder='20' value={value.protein?.m?.low && value.protein.m.low }
                        style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px 0px 30px", padding:'3px 5px'}} />
                      <input type='number' id="high" name="high" onChange={handleProteinM} placeholder='450' value={value.protein?.m?.high && value.protein.m.high }
                      style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px',}}>
                      <p style={{ margin:'20px 5px'}}>N</p>
                      <input type='number' id="low" name="low" onChange={handleProteinN} placeholder='90' value={value.protein?.n?.low && value.protein.n.low }
                      style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px 0px 30px", padding:'3px 5px'}} />
                      <input type='number' id="high" name="high" onChange={handleProteinN} placeholder='260' value={value.protein?.n?.high && value.protein.n.high }
                      style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div></>}
                    
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

        {analysis === 20 && <div>
          <PLabTableAnalysis/>
        </div>}
        {analysis === 10 && <div className="graph-container">
          <div className="graph-chart">
            { classs === 0 ?<p>Regions</p> :
            <p>Ag</p>}
            <div className="chart">
            <ApexChart showProtein={handleSetProtienDetails}/>
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
                {classs === 0 ? <p>Region {protienDetailB.b ? protienDetailA.a.region : '--'}</p> :
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
                {classs === 0 ? <p>Region {protienDetailC.c ? protienDetailA.a.region : '--'}</p> :
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
                {classs === 0 ? <p>Region {protienDetailD.d ? protienDetailA.a.region : '--'}</p> :
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
                {classs === 0 ? <p>Region {protienDetailE.e ? protienDetailA.a.region : '--'}</p> : 
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
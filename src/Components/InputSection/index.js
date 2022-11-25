import React, {useState, useRef, useEffect} from 'react'
import "./PLabAnalysis.css"

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PLabTableAnalysis from './PLabTableAnalysis';
import ApexChart from "./ApexChart"


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const InputSection = () => {
  
  const classes = useStyles();
  const ref = useRef()
  const [lab, setLab] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [classs, setClasss] = useState('');
  const [value, setValue] = useState({});
  const [error, setError] = useState({})

  const [showProtein, setShowProtein] = useState(false);

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
            <h1 className="text-center plta-title">ProteinLab Table Analysis</h1>
            {/* <h1 className="text-center plta-title">ProteinLab Graph Analysis All Regions</h1> */}
            {/* <h1 className="text-center plta-title">ProteinLab Graph Analysis Single Region</h1> */}
          </div>
          
          
     

          
          <nav className="nav-menu">
            <div className="d-flex">


            <FormControl variant="filled" className={classes.formControl} style={{border:"1px solid #808080", borderRadius:"5px", width:"170px"}}>
        <InputLabel id="demo-simple-select-filled-label" style={{color:"#6495ed"}}>LAB</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={lab}
          onChange={handleChangeLab}
        >
         
          <MenuItem value={10}>Analysis</MenuItem>
          {/* <MenuItem value={20}>Design</MenuItem> */}
        </Select>
      </FormControl> 


      <FormControl variant="filled" className={classes.formControl} style={{border:"1px solid #808080", borderRadius:"5px", width:"170px"}}>
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



      <div className={classes.formControl} onClick={handleChangeShowProtein} style={{ border: "1px solid #808080", borderBottom:'2px solid #808080', borderRadius: "5px", width: "170px", cursor:"pointer", display:'flex', justifyContent:'space-between',}}>
                <button style={{ color: "#6495ed", border: "none", margin: '0px 0px 0px 20px', fontSize:'17px' }}>PROTEIN</button>
                <i class="fa-solid fa-sort-down" style={{ color: "#808080", margin: '17px 10px 0px 20px' }}></i>
              </div>


              {
            showProtein ? 
                  <div className="protein-pop-up" ref={ref}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px'}}>
                      <p style={{ margin:'20px 5px',}}>Spike</p>
                      <input type='number' onChange={handleProteinSpike} id="low" name="low" value={value.protein?.spike?.low && value.protein.spike.low }
                        placeholder='1' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}} />
                      <input type='number' id="high" name="high" onChange={handleProteinSpike} value={value.protein?.spike?.high && value.protein.spike.high }
                        placeholder='1273' 
                        style={{border:`1px solid #808080}`, borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px'}}>
                      <p style={{ margin:'20px 5px'}}>M</p>
                      <input type='number' id="low" name="low" onChange={handleProteinM} placeholder='20' value={value.protein?.m?.low && value.protein.m.low }
                        style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px 0px 30px", padding:'3px 5px'}} />
                      <input type='number' id="high" name="high" onChange={handleProteinM} placeholder='450' value={value.protein?.m?.high && value.protein.m.high }
                      style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px'}}>
                      <p style={{ margin:'20px 5px'}}>N</p>
                      <input type='number' id="low" name="low" onChange={handleProteinN} placeholder='90' value={value.protein?.n?.low && value.protein.n.low }
                      style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px 0px 30px", padding:'3px 5px'}} />
                      <input type='number' id="high" name="high" onChange={handleProteinN} placeholder='260' value={value.protein?.n?.high && value.protein.n.high }
                      style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div>
                    
          </div> : null
              }
            




      <FormControl variant="filled" className={classes.formControl} style={{border:"1px solid #808080", borderRadius:"5px", width:"170px"}}>
        <InputLabel id="demo-simple-select-filled-label" style={{color:"#6495ed"}}>REGION</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={classs}
          onChange={handleChangeClasss}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
                  <MenuItem value={30}>3</MenuItem>
                  <MenuItem value={40}>19</MenuItem>
                  <MenuItem value={50}>All</MenuItem>
        </Select>
              </FormControl> 
        
            </div>
          </nav>
              </div>

            
        <div>
          <PLabTableAnalysis/>
        </div>
   
       </section>
      
      </>
  )
}

export default InputSection
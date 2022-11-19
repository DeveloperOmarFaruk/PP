import React, {useState, useRef, useEffect} from 'react'
import "./PLabDesign.css"
import "../PLabAnalysis/PLabAnalysis.css"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PLabDesignDraft from './PLabDesignDraft';
import PLabDesignMyProtein from './PLabDesignMyProtein';
import PLabDesignEdit from './PLabDesignEdit';
import PLabDesignReview from './PLabDesignReview';


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
  const ref = useRef()

    const classes = useStyles();
    const [dlab, setDLab] = useState(10);
    const [design, setDesign] = useState(10);
  const [dclasss, setDClasss] = useState(10);
   
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
      setDClasss(event.target.value);
      };

  return (
      <>
           <section className="container">
        <div>
          <div className="flex items-center justify-center mt-6 mb-0 plta-title-container">
            <div className="blue-squer" style={{backgroundColor:"#03A9F4"}}></div>
            <h1 className="text-center plta-title">ProteinLab Design</h1>
          </div>
          
          
     

          
          <nav className="nav-menu">
            <div className="control-btn">


            <FormControl variant="filled" className={classes.formControl} style={{border:"1px solid #808080", borderRadius:"5px", width:"170px"}}>
        <InputLabel id="demo-simple-select-filled-label" style={{color:"#6495ed"}}>LAB</InputLabel>
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


      <FormControl variant="filled" className={classes.formControl} style={{border:"1px solid #808080", borderRadius:"5px", width:"170px"}}>
        <InputLabel id="demo-simple-select-filled-label" style={{color:"#6495ed"}}>DESIGN</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={design}
          onChange={handleChangeDesign}
        >
         
          <MenuItem value={10}>Edit</MenuItem>
          <MenuItem value={20}>Review</MenuItem>
          <MenuItem value={30}>Draft</MenuItem>
          <MenuItem value={40}>My Protein</MenuItem>
        </Select>
      </FormControl> 



    
              

              <div className={classes.formControl} onClick={handleChangeShowProtein} style={{ border: "1px solid #808080", borderBottom:'2px solid #808080', borderRadius: "5px", width: "170px" , height:"58px", cursor:"pointer", display:'flex', justifyContent:'space-between',}}>
                <button style={{ color: "#6495ed", border: "none", margin: '0px 0px 0px 20px', fontSize:'17px' }}>PROTEIN</button>
                <i class="fa-solid fa-sort-down" style={{ color: "#808080", margin: '17px 10px 0px 20px' }}></i>
              </div>


              {
            showProtein ? 
                  <div className="protein-pop-up" ref={ref}>
                    <div className="testing">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px'}}>
                      <p style={{ margin:'20px 5px',}}>Spike</p>
                      <input type='number' placeholder='1' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}} />
                      <input type='number' placeholder='1273' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px'}}>
                      <p style={{ margin:'20px 5px'}}>M</p>
                      <input type='number' placeholder='20' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px 0px 30px", padding:'3px 5px'}} />
                      <input type='number' placeholder='450' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', padding:'0px 10px'}}>
                      <p style={{ margin:'20px 5px'}}>N</p>
                      <input type='number' placeholder='90' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px 0px 30px", padding:'3px 5px'}} />
                      <input type='number' placeholder='260' style={{border:"1px solid #808080", borderRadius:"5px" , width:"50px", margin:"0px 5px", padding:'3px 5px'}}/>
                    </div>
                   </div>
                    
          </div> : null
          }




      <FormControl variant="filled" className={classes.formControl} style={{border:"1px solid #808080", borderRadius:"5px", width:"170px"}}>
        <InputLabel id="demo-simple-select-filled-label" style={{color:"#6495ed"}}>REGION</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={dclasss}
          onChange={handleChangeDClasss}
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
          {design === 30 && <PLabDesignDraft />}
       
          {design === 10 && <PLabDesignEdit/>}
          {design === 20 && <PLabDesignReview/>}
          {design === 40 && <PLabDesignMyProtein/>}
          
          

         

          
   </div>





   
        


   
       </section>
      </>
  )
}

export default PLabDesign
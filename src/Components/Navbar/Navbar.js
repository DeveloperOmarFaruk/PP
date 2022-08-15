import React, {useState} from 'react'
import "./Navbar.css"
import logo from "../../Images/logo.png"
import { NavLink } from 'react-router-dom';
 
const Navbar = () => {
 
    const [isActive, setActive] = useState("home")
   
 
  return (
      <>
      <div className="container fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
               
                  <img className="h-8 w-auto cursor-pointer " src={logo} alt={logo}/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
   
           
             
              <ul className="multi-dropdown">
                              <li><NavLink  to="/proteindesign"  className={` ${isActive === "proteinDesign" ? 'nav-link active-link' : 'nav-link'}`} onClick={() => setActive("proteinDesign")}>Protein Design</NavLink>
            <ul className="nav-item">
                <li><NavLink className="multi-dropdown-nav-link" to="/proteindesignbacteria">Bacteria</NavLink> </li>
                    <li><NavLink className="multi-dropdown-nav-link" to="/proteindesignvirus">Virus</NavLink> </li>    
            </ul>
        </li>
              </ul>
             
      <ul className="multi-dropdown">
                <li>
                <NavLink className={` ${isActive === "work" ? 'nav-link active-link' : 'nav-link'}`} onClick={() => setActive("work")} to="#">How It Works</NavLink>
        </li>
              </ul>
             
 
         
             
 
 
              <ul className="multi-dropdown">
        <li><NavLink to="#" className={` ${isActive === "myLab" ? 'nav-link active-link' : 'nav-link'}`} onClick={() => setActive("myLab")}>My ProteinLab</NavLink>
            <ul>
                <li><NavLink className="multi-dropdown-nav-link" to="#">My Analysis</NavLink>
                    <ul>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 1</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 2</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 3</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 4</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 5</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 6</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 7</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 8</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 9</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">Analysis 10</NavLink></li>
                       
                     
                       
                    </ul>
                    </li>
                    <li><NavLink to="#" className="multi-dropdown-nav-link">My Protein</NavLink>
                    <ul>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 1</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 2</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 3</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 4</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 5</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 6</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 7</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 8</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 9</NavLink></li>
                        <li><NavLink className="multi-dropdown-nav-link" to="#">My Protein 10</NavLink></li>
                       
                     
                       
                    </ul>
                </li>
                    <li><NavLink className="multi-dropdown-nav-link" to="/">ProteinLab Analysis</NavLink></li>
                    <li><NavLink className="multi-dropdown-nav-link" to="/proteinlabdesign">ProteinLab Design</NavLink></li>
                    <li><NavLink className="multi-dropdown-nav-link" to="#">Protein Design Basics</NavLink></li>
            </ul>
        </li>
                          </ul>
                          


                          {/* <ul className="multi-dropdown">
                <li>
                <NavLink className={` ${isActive === "work" ? 'nav-link active-link' : 'nav-link'}`} onClick={() => setActive("work")} to="#">How It Works</NavLink>
        </li>
              </ul> */}
                  </ul>
                 
 
              </div>
             
             
</nav>
       
 
     
</div>
     
 
    </>
  )
}
 
export default Navbar

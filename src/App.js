
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PLabAnalysis from "./ProteinLab/PLabAnalysis/PLabAnalysis";
import PLabDesign from "./ProteinLab/PLabDesign/PLabDesign";
import ProteinDesign from "./ProteinDesign/ProteinDesign";
import ProteinDesignBacteria from "./ProteinDesign/ProteinDesignBacteria";
import ProteinDesignVirus from "./ProteinDesign/ProteinDesignVirus";
import Order from "./Order/Order";
import Dashboard from "./Dashboard/Dashboard";
function App() {
    return ( 
      

      <Router>
        <Navbar/>
<Routes>
          <Route path="/" element={<PLabAnalysis />} />
          <Route path="/proteinlabdesign" element={<PLabDesign />} />
          <Route path="/proteindesign" element={<ProteinDesign />} />
          <Route path="/proteindesignbacteria" element={<ProteinDesignBacteria/>} />
          <Route path="/proteindesignvirus" element={<ProteinDesignVirus />} />
          <Route path="/order" element={<Order />} />
          <Route path="/dashboard" element={<Dashboard/>} />
</Routes>
</Router>
     );
     }
      export default App;

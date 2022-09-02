import React,{useState} from 'react'
import "./Dashboard.css"
import Product from './Product/Product';
import Users from './Users/Users';

const Dashboard = () => {
    const [dashBtnActive, setDashBtnActive] = useState("dash-choose1");
    const [user, setUser] = useState(true);
    const [product, setProduct] = useState(false)

   
  return (
      <>
          <div className="dashboard-section">
          <div className="dashboard-container">
              <div className="dashboard-container-col-3">
                      <div className="dashboard-left-title">
                          <p>Admin Dashboard</p>
                      </div>
                      
                      <div className="dashboard-left-btn">
                          <button onClick={() => { setDashBtnActive("dash-choose1"); setUser(true); setProduct(false) }} className={` ${dashBtnActive === "dash-choose1" ? 'dashboard-left-btn-button active-dash-left-btn' : 'dashboard-left-btn-button'}`}>Users</button>
                          <button onClick={() => { setDashBtnActive("dash-choose2"); setUser(false); setProduct(true)}} className={` ${dashBtnActive === "dash-choose2" ? 'dashboard-left-btn-button active-dash-left-btn' : 'dashboard-left-btn-button'}`}>Product</button>
                      </div>
              </div>

                  <div className="dashboard-container-col-9">
                 
                      {user ? <Users />  : <Product/>}
                     
              </div>
           </div>
          </div>
      </>
  )
}

export default Dashboard
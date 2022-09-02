import React,{useState, useEffect} from 'react'
import "./Dashboard.css"
import Product from './Product/Product';
import Users from './Users/Users';
import axios from 'axios'

const Dashboard = () => {
    const [dashBtnActive, setDashBtnActive] = useState("dash-choose1");
    const [user, setUser] = useState(true);
    const [product, setProduct] = useState(false)

    const [userList, setUserList] = useState([])
    const [products, setProducts] = useState([])

    useEffect(()=>{
      if(user){
        axios.get(`https://protein.catkinsofttech-bd.xyz/api/user/list`).then(res=>{
        setUserList(res.data)
        }).catch(err=>{
            console.log(err.message)
        })
      }else{
        axios.get(`https://protein.catkinsofttech-bd.xyz/api/product/list`).then(res=>{
        setProducts(res.data)
        }).catch(err=>{
            console.log(err.message)
        })
      }
    },[user])

    const updateUserList = (data) => {
      setUserList(prevState => ([...prevState, data]))
    }

    const deleteFromUserList = (data) => {
      setUserList(prevState => prevState.filter(user => user.id !== data))
    }

    const editUserList = (data) => {
      setUserList(prevState => prevState.map(user => user.id === data.id ? data : user))
    }

    const updateProductList = (data) => {
      setProducts(prevState => ([...prevState, data]))
    }

    const deleteFromProductList = (data) => {
      setProducts(prevState => prevState.filter(user => user.id !== data))
    }

    const editProducList = (data) => {
      setProducts(prevState => prevState.map(user => user.id === data.id ? data : user))
    }
   
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
                 
                      {user ? <Users userList={userList} updateUserList={updateUserList} deleteFromUserList={deleteFromUserList}
                        editUserList={editUserList}/>  : 
                        <Product products={products} updateProductList={updateProductList} deleteFromProductList={deleteFromProductList} editProducList={editProducList}/>}
                     
              </div>
           </div>
          </div>
      </>
  )
}

export default Dashboard
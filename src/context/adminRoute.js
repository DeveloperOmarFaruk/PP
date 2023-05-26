import React, {useContext} from "react";
import {Route, Navigate, Outlet} from "react-router-dom";
import {GlobalContext} from "./Provider";

const AdminPrivateRoute = ({children, auth}) => {
    const {authState} = useContext(GlobalContext)
   
    if(!authState.is_authenticated){
        return <Navigate to="/signin"/>
    }
    if(!authState.is_admin)
        return <Navigate to="/"/>

    return children && authState.is_admin ? children : <Outlet/>
}

export default AdminPrivateRoute
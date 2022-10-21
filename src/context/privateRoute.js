import React, {useContext} from "react";
import {Route, Navigate, Outlet} from "react-router-dom";
import {GlobalContext} from "./Provider";

const LoginPrivateRoute = ({children, auth}) => {
    const {authState} = useContext(GlobalContext)
    console.log(authState)
    if(!authState.is_authenticated){
        return <Navigate to="/signin"/>
    }

    return children ? children : <Outlet/>
}

export default LoginPrivateRoute
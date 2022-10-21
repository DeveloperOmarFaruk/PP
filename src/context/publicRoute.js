import React, {useContext} from "react";
import {Route, Navigate, Outlet} from "react-router-dom";
import {GlobalContext} from "./Provider";

const LoginPublicRoute = ({children, auth}) => {
    const {authState} = useContext(GlobalContext)

    if(authState.is_authenticated){
        return <Navigate to="/"/>
    }

    return children ? children : <Outlet/>
}

export default LoginPublicRoute
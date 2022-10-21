import React, {createContext, useEffect, useReducer} from 'react'
import {authInitialState} from './initialState'
import {auth} from './reducers'
import axios from "axios";
import {getHeader} from "./action/auth";

export const GlobalContext = createContext({})

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState)

    useEffect(() => {
        console.log(window.location.host)
        authDispatch({
            type: "LOADING_ON",
        })
        axios
            .get(`https://${window.location.host}/api/auth/me/`, getHeader())
            .then(res => {
                console.log(res)
                authDispatch({
                    type: "USER_LOADED",
                    payload: res.data
                })
                authDispatch({
                    type: "LOADING_OFF",
                })
            }).catch(error => {
            authDispatch({
                type: "LOG_OUT",
            })
            authDispatch({
                type: "LOADING_OFF",
            })
        })
    }, [])
    //console.log(authState)

    return (<>
            <GlobalContext.Provider value={{
                authState, authDispatch
            }}>
                {children}
            </GlobalContext.Provider></>
    )
}

export default GlobalProvider

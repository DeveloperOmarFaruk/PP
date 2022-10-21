import React, {useContext} from "react";
import axios from "axios";
import Cookies from 'js-cookie'

export const getHeader = () => {
    const csrftoken = Cookies.get('csrftoken');
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    }
    if (token) {
        config.headers['Authorization'] = `JWT ${token}`
    }
    return config
}


export const login = (data) => {

    return axios
        .post("https://protein.catkinsofttech-bd.xyz/api/user/token", data)
        .then(res => {
            let data = {message: {message: "Successfully Login", code: "success"}, status: 200, result: res.data}
            return data
        })
        .catch(error => {
            let data = {message: {message: error.response.data.detail, code: "danger"}, status: 400}
            return data
        })
}


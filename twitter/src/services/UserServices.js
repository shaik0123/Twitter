import React from 'react'
import axios from "axios";

export const SignUpService = async(obj)=> {
    let response = await axios.post("https://localhost:44353/api/User/Register",
        obj
    )
    return response;
}

export const SignInService = async(obj)=> {
    let response = await axios.post("https://localhost:44353/api/User/Login",
        obj
    )
    return response;
}


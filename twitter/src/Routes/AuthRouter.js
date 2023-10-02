import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute =({ children })=>{
    if(localStorage.getItem("Token") === undefined || localStorage.getItem("Token") === null){
        console.log("false");
        return children;
    }
    return <Navigate to="/dashboard"/>;
    console.log("true")
};
export default AuthRoute;
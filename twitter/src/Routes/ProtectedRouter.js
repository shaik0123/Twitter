import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute =({children})=>{
    if(localStorage.getItem("Token")){
        return children;
    }
    return <Navigate to="/"/>;
}
export default ProtectedRoute;
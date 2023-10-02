import React from "react";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import AuthRoute from "./AuthRouter";
import HomePage from "../homepage/HomePage";
import ProtectedRoute from "./ProtectedRouter";
import Dashboard from "../dashboard/Dashboard";


function Router(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<AuthRoute><HomePage/></AuthRoute>}/>
                <Route  path={"/dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router;
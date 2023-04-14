import React from "react";
import { Outlet, Navigate} from "react-router-dom";
const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");
  return  isAuth  === undefined? <Navigate to={"/login"}/>   :<Outlet /> ;
    
};

export default PrivateRoute;

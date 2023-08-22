import React from 'react';
import {  Navigate, Outlet } from 'react-router-dom';


const PrivateRoutes =() => {
    const token = localStorage.getItem('adminToken'); 
    return(
        token ? <Outlet/>: <Navigate to="Login"/>
    )
}

export default PrivateRoutes;
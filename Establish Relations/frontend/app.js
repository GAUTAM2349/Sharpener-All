import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, Outlet, BrowserRouter } from "react-router-dom";



const AppLayout = () => {

    return (

        <>

            <NavBar/>
            <Outlet/>

        </>
        
    )
    
}


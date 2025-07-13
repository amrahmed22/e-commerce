import React, { useContext, useEffect } from 'react';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import {Outlet} from 'react-router-dom';
// import { userContext } from '../../Context/UserContext';




const Layout = () => {

    return <>
    <Navbar/>

    <Outlet></Outlet>

    <Footer/>
    
    
    </>
}

export default Layout;

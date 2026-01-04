import React from 'react';
import NavBar from '../Sheared/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Sheared/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
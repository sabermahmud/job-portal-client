import React from 'react';
import NavBar from '../Sheared/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Sheared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
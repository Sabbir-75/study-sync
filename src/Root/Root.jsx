import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-base-200'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
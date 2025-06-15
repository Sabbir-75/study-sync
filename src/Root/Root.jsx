import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
             <ToastContainer />
            <Navbar></Navbar>
            <div className='bg-base-200 px-2 md:px-3 py-2 md:py-4 lg:py-6 min-h-[calc(100vh-434.67px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
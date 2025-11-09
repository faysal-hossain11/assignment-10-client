import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            
        </div>
    );
};

export default Root;
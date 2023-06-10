import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shear/Header/Header';

const MainHomeLayout = () => {
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainHomeLayout;
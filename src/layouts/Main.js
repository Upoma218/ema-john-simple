import React from 'react';
import { Outlet } from 'react-router-dom';
import Cart from '../Components/Cart/Cart';
import Header from '../Components/Header/Header';
import Shop from '../Components/Shop/Shop';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
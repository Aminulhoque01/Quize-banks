import React from 'react';
import { Outlet } from 'react-router-dom';

import Nave from '../Nave/Nave';

const Main = () => {
    return (
        <div>
            <Nave></Nave>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
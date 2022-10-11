import React from 'react';
import { Link } from 'react-router-dom';

import './Nave.css';

const Nave = () => {
    return (
        <nav className='nave-container'>
            <div className='nave-title'>
                <h1>Question Banks</h1>
            </div>
            <div className='nave-rout'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/topics'><li>Topics</li></Link>
                <Link to='/statistics'><li>Statistics</li></Link>
                <Link to='/blog'><li>Blog</li></Link>
            </div>
        </nav>
    );
};

export default Nave;
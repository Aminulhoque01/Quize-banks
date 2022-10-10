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
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Nave;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

import './Nave.css';

const Nave = () => {
    const [open, setOpen]=useState(false)


    return (
       
       
        <div>
            <div onClick={()=>setOpen(!open)} className="iCON">

                
            </div>


            <nav className='nave-container'>
                <div className='nave-title'>
                    <h1>Question Banks</h1>
                </div>
                <div className='nave-rout'><div onClick={()=>setOpen(!open)} className="iCON">
                    {
                        open ?<XMarkIcon/> : <Bars3Icon/>
                    }
                
                </div > 

                    
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/topics'><li>Topics</li></Link>
                    <Link to='/statistics'><li>Statistics</li></Link>
                    <Link to='/blog'><li>Blog</li></Link>
                    
                    
                </div>
            </nav>
        </div>
    );
};

export default Nave;
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Project.css'

const Project = ({product}) => {
    // console.log(product)
    const {name, logo}=product
    return (
        <div className='project-container'>
            <img src={logo}/>
            <div className='name-btn'>
                <h3 className='name'>{name}</h3>
                <button className='btn'>Start Practice<FaArrowRight /></button>
            </div>
            
        </div>
    );
};

export default Project;
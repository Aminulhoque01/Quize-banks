import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = ({product}) => {
    // console.log(product)
    const {name, logo,id}=product
    return (
        <div className='project-container'>
            <img src={logo}/>
            <div className='name-btn'>
                <h3 className='name'>{name}</h3>
               <Link to={`/product/${id}`}>
                    <button className='btn'>Start Practice<FaArrowRight /></button> 
               </Link>
            </div>
            
        </div>
    );
};

export default Project;
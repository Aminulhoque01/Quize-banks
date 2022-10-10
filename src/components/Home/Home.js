import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Project from '../Project/Project';
import './Home.css'

const Home = () => {
    const products =useLoaderData();
    // console.log(products)

    return (
        <div>
            <Header></Header>
           <div className='home-container'>
                

                {
                    products.map(product=><Project key={product.id} product={product}></Project>)
                }

                
            </div>
         
        </div>
    );
};

export default Home;
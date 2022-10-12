import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const {data}=useLoaderData();
    
    return (
        <div>
            <h1>this is Topics:{data.length}</h1>
        </div>
    );
};

export default Topics;
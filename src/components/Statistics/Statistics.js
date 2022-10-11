import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const {data}=useLoaderData();
    console.log(data);


    return (
        <div className='rechart'>
            <h1>this is Statistics{data.length}</h1>

            <div className='chart'>
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;
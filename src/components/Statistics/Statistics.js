import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const {data}=useLoaderData();
    


    return (
        <div className='rechart'>
            

            <div className='chart'>
              <div className='chart-size'>
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
              </div>
            </div>
        </div>
    );
};

export default Statistics;
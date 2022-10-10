import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Detail = () => {
    const{data} = useLoaderData();

    // const {id}=questions;
    // console.log(questions)
    return (
        <div>
           <h1>{data.name} Question</h1>

           {
            data.questions.map(dataquestion=><Question key={dataquestion.id} dataquestion={dataquestion}></Question>)
           }
        </div>
    );
};

export default Detail;
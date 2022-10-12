import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Question from '../Question/Question';
import './Detail.css'

const Detail = () => {
    const{data} = useLoaderData();

    // const {id}=questions;
    // console.log(questions)
   
   
    return (
        <div className='detail-container'>
           <h1 className='name-cls'>{data.name} Question</h1>

            {
                data.questions.map((( dataquestion, count)=><Question 
                    key={dataquestion.id}
                    dataquestion={dataquestion}
                    count={count}
                    >

                    </Question>

               ))

                
            }
           
          
        </div>
    );
};

export default Detail;
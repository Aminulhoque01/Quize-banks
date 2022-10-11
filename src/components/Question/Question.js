import React from 'react';
import {FaEye} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import './Qustion.css'

const Question = ({dataquestion}) => {
    // console.log(dataquestion)
    const { question, correctAnswer, options,}=dataquestion;
    
    const showToastMessage = (dataquestion) => {
        const creetAnswer= options.find(op=>op.dataquestion === dataquestion.correctAnswer)

        if(creetAnswer){
            toast.success('Success Notification !', {
            });
        }else{
            
        }
        
    };



    return (
        <div className='question-container'>
            <h3 className='question-title'>quiz: {question}</h3>
           
            <p onClick={()=>alert(correctAnswer)} className='eye-icon'><FaEye /></p>
           <div className='op-con' >
            { 
                options.map(options=>
                    <span className='options'>
                       <p onClick={()=>showToastMessage(dataquestion.correctAnswer)}><div className='gero' ><ToastContainer />
                       </div>{options}</p>
                    </span>)
            }
           </div>
            
        </div>
    );
};

export default Question;
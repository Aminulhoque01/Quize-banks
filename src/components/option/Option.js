import React from 'react';
import './Optin.css'
import {ToastContainer} from 'react-toastify';

const Option = ({option, showToastMessage }) => {
    
    return (

        <div className='option'>
            <input onClick={()=>showToastMessage(option)}type="radio" value="option" 
            name="option" />{option}
      
       
        <ToastContainer/>

        
        </div>
 
    );
};

export default Option;

import {FaEye} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {toast } from 'react-toastify/dist/components';
import Option from '../option/Option';
import './Qustion.css'

const Question = ({dataquestion, count}) => {
    
    
    const {question, correctAnswer, options}= dataquestion;

    <ToastContainer/>

    const showToastMessage=(option)=>{ 
        const showAns=(option === correctAnswer)
       
        if(showAns){
            toast("Correct Answer😃")
        }else{
            toast("Wrong Answer!!!") 
        }
        
    }
    const finalQuestion = question.slice(3, question.length - 4)
    



    return (

       

        <div className='question-container'>
           
            <h3 className='question-title'>quiz {count}: {finalQuestion}</h3>
           
            <p onClick={()=>toast(correctAnswer)} className='eye-icon'><FaEye /></p>


           
           <div className='op-con' >
           

           
            {
                options.map(option=><Option key={option.id} 
                    option={option} 
                    showToastMessage={showToastMessage}>
                        
                    </Option>)
            }
           </div>
            
        </div>
    );
};

export default Question;
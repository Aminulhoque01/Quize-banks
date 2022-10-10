import React from 'react';

const Question = ({dataquestion}) => {
    console.log(dataquestion)
    const {id, question, correctAnswer}=dataquestion;
    return (
        <div>
            <h2>{question}</h2>
        </div>
    );
};

export default Question;
import React from 'react';
import styled from "styled-components";

export default function Question({ id, text, ans }) {
    const { A, B, C, D } = ans
    return (
        <QuestionWrapper>
            <div className="card">
                <div className="question-no"><h4>Question no.{id}</h4></div>
                <div className="question">
                    <p>
                        {text}
                    </p>
                </div>
                <div className="answers">
                    <div className="answer-options">
                        <p>A. {A} </p>
                        <p>B. {B} </p>
                        <p>C. {C} </p>
                        <p>D. {D} </p>
                    </div>
                </div>
            </div>
        </QuestionWrapper>
    )
}

const QuestionWrapper = styled.div`
.card{
    padding: 6px;
    border-radius: 20px;
}
.question-no{
    margin-left: 9px;
}
.question{
    margin-left: 9px;
}
.answers{
    background-color: lightgray;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 6px;
    border-radius: 20px;
}
.answer-options{
    margin-top: 9px;
    >p{
        padding: 5px;
        color: blueviolet;
        font-weight: 700;
        margin-left: 9px;
        margin-right: 9px;
        background-color: whitesmoke;
    }
    >p:hover{
        padding: 9px;
        background-color: slategrey;
        color: white;
    }

}


`
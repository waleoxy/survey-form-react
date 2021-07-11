import React from 'react'
import { useState, useEffect } from 'react';

const API_URL = "https://opentdb.com/api.php?amount=10&category=28&type=multiple";

const QuestionList = () => {

    
  const [question, setQuestions] = useState([])

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data.results);
    });
  }, [])
  console.log(question)
    return (
        <p>
        
        </p>
    )
}
export default QuestionList;

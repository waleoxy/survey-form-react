import React, { useEffect, useState } from 'react'

import Question from "./Question";
import { db } from "../firebase"

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchTestData = () => {
      db.collection("testData").onSnapshot(snapshot => (
        setQuestions(snapshot.docs.map(doc => doc.data()))
      ))
    }
    fetchTestData();
  }, [])

  return (
    <div>
      {testData.map(item => (
        <div className="mt-5">
          <Question
            id={item.id}
            text={item.text}
            ans={item.ans}
          />
        </div>
      ))}
    </div>
  )
}


import React from 'react';
import PersonInfo from '../components/PersonInfo';
import QuestionList from '../components/QuestionList';
import Title from '../components/Title';


//const API_URL = "https://opentdb.com/api.php?amount=10&category=28&type=multiple";

export default function QuestionPage() {
  const handleSubmit = () => {

  }
  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <form onSubmit={handleSubmit}>
            <PersonInfo />
            <Title title="Answer the following Questions" center />
            <QuestionList />
          </form>
        </div>
      </div>
    </>
  )
}

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const API_URL = "https://opentdb.com/api.php?amount=10&category=28&type=multiple";

function App() {

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
    <>
    <Navbar/>
    Hellooooooo from App
    <Footer/>
    </>
  );
}

export default App;

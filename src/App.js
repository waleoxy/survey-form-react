import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/HomePage";
import Survey from "./Pages/QuestionPage";
import Result from "./Pages/ResultPage";

import React, { Component } from 'react'

 class App extends Component {
  render() {
    return (
      <>

      <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/survey" component={Survey}/>
      <Route path="/result"  component={Result}/>
    </Switch>
    <Footer/>
      </>
    );
  }
}
export default App;
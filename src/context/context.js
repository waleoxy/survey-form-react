import React, { Component } from 'react'
import {linkData} from "./linkData";
import {socialData} from "./socialData";

const SurveyContext = React.createContext();

class SurveyProvider extends Component{

    state = {
        name:"",
        email:"",
        question: [],
        socialLinks: socialData,
        links: linkData,
    }
    handleClickAction = () =>{

    }
    
    render () {
        return (
           <SurveyContext.Provider value ={{
            ...this.state,
            handleDroplist: this.handleDroplist,
            setSingleWork: this.setSingleWork

        }}>>
               {this.props.children}
           </SurveyContext.Provider>
            
        );
    }
}

const SurveyConsumer = SurveyContext.Consumer;

export{SurveyProvider, SurveyConsumer};
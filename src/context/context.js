import React, { Component } from 'react'
import {linkData} from "./linkData";
import {socialData} from "./socialData";
import {QuestionList} from "../context/QuestionList";

const SurveyContext = React.createContext();

class SurveyProvider extends Component{

    state = {
        name:"",
        email:"",
        question: [],
        socialLinks: socialData,
        links: linkData,
    }
    setWorks = (works) =>{
        let storedWorks = works.map(item=>{
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url
            const work= {id,...item.fields, image}
            return work
        })
        //feartured works
        let featuredWorks = storedWorks.filter(item=>item.featured===true);
        this.setState({
            storedWorks,
            filteredWorks:storedWorks,
            featuredWorks,
            singleWork: this.getStorageWork(),
            loading: false
        });
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
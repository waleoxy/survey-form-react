import React from 'react'
import styled from "styled-components";
import {SurveyConsumer} from "../context/context";

export default function Footer() {
    return (
        <SurveyConsumer>
            {value =>{
                const{socialLinks} = value;
                return(
                    <FooterWrapper>
                        <div className="container py-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="text-capitalize">
                                       copright &copy; carsmart survey {new Date().getFullYear()} all rights reserved
                                    </p>
                                </div>
                                <div className="col-md-6 d-flex justify-content-around">
                                    {socialLinks.map(socialLink=>{
                                        return(
                                            <a href={socialLink.url} key={socialLink.id}>
                                                {socialLink.icon}
                                            </a>
                                        )
                                    })}
                                </div>

                            </div>

                        </div>
                          
                    </FooterWrapper>
                )
            }
            }
        </SurveyConsumer>   
    )
}

const FooterWrapper = styled.nav `
background: var(--darkAsh);
color: var(--mainWhite);
.icon{
    font-size:1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
}
.icon:hover{
    color: var(--primaryColor);
    cursor: pointer;
}

`

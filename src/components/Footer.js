import React from 'react';
import { socialLinks } from '../context/socialData'
import styled from "styled-components";


export default function Footer() {
    return (

        <FooterWrapper>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-capitalize">
                            copright &copy; carsmart survey {new Date().getFullYear()} all rights reserved
                                    </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-around">
                        {socialLinks.map(socialLink => {
                            return (
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

const FooterWrapper = styled.nav`
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

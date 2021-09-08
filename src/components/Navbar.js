import React from 'react';
import styled from "styled-components";
import logo from "../components/images/logo.png"


export default function Navbar() {

    return (
        <NavWrapper>
            <div className="nav-center">
                <img src={logo} alt="carsmart logo" />
            </div>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
position: -webkit-sticky;
position: sticky;
justify-content: space-around;
z-index: 1;
top: 0;
width: 100%;
height: 80px;
padding: 1rem 1.5rem;
background: var(--mainAsh);
border-bottom: 3px solid var(--primaryColor);

.nav-center{
    display: -webkit-inline-flexbox;
    align-items: center;
    justify-content: space-around;
    max-width: 100%;
    margin: 0 auto;
    
}

`
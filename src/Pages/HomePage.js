import React from 'react';
import Helper from "../components/Helper.js";
import {Link} from "react-router-dom";
 

export default function HomePage() {
    return (
        <>
         <Helper max ="true" title="CarSmart Survey" >
            <Link to="/survey" 
            className ="main-link" style={{margin: "2rem"}}> 
            take the survey 
            </Link>
          </Helper>
        </>
    )
}

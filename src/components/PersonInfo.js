import React from 'react'
import Title from "./Title";


export default function PersonInfo() {
    return (
    
                    <section>
                        <div className="row">
                            <div className= "col-10 mx-auto col-md-6 my-3">
                                <form >
                                    <div className="form-group" className="my-2">
                                    <Title title="personal detail" my-5/>
                                    <input type="text" 
                                    name="fulltname" 
                                    placeholder="fullname"
                                    className="form-control"/>  
                                    </div>  
                                   <div className="form-group" className="my-2">
                                    <input type="email" 
                                    name="email" 
                                    placeholder="email"
                                    className="form-control"/>   
                                    </div>
                                    <div className="container">

                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                )
        }
    


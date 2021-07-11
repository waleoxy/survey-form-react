import React from 'react';
import PersonalInfo from "./PersonInfo";
import Title from "./Title";

export default function Question() {
    return (
        
        <section>
            <div className="container">
        <div className="row">
            <div className= "col-10 mx-auto col-md-6 my-3">
                <form className="py-3">
                    <div className="form-group" className="my-2">
                    <Title title="survey" my-5/>
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
                    <div form-group mt-3>
                            <input
                            type="submit"
                            value="send"
                            className="form-control bg-primary text-white"
                            />
                        </div>
                </form>
            </div>
        </div>
        </div>
    </section>
    )
}

import React from 'react'
import Title from "./Title";


export default function PersonInfo() {
    return (

        <section>
            <div className="row">
                <div className="">
                    <form className="py-3">
                        <div className="form-group" className="my-2">
                            <Title title="personal detail" my-5 />
                            <p>Fill in your personal details</p>
                            <input type="text"
                                name="fulltname"
                                placeholder="fullname"
                                className="form-control" />
                        </div>
                        <div className="form-group" className="my-2">
                            <input type="email"
                                name="email"
                                placeholder="email"
                                className="form-control" />
                        </div>
                        <div className="form-group" className="my-2">
                            <input type="phone"
                                name="phone"
                                placeholder="phone no."
                                className="form-control" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}



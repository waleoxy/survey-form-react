import React, { useState } from 'react';
import Helper from "../components/Helper.js";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [noOfQuestion, setNoOfQuestion] = useState('');

  return (
    <>
      <Helper max="true" title="Biology Quiz" >
        <div>
          <input
            type="number"
            placeholder="Quantity [1-40]"
            onChange={(e) => setNoOfQuestion(e.target.value)}
          />
        </div>
        <Link to="/survey"
          className="main-link" style={{ margin: "2rem" }}>
          take the quiz
        </Link>
      </Helper>
    </>
  )
}

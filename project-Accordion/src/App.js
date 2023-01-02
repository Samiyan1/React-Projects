import React from "react";
import Question from "./question";
import { useState } from "react";
import data from "./data";

function App() {
  const [soals, setsoals] = useState(data);

  return (
    <div className="container">
      <h3>سوالی برایتان پیش آمده؟</h3>
      <div className="info">
        {soals.map((soal,index) => {
          return <Question key={index} {...soal} />;
        })}
      </div>
    </div>
  );
}

export default App;

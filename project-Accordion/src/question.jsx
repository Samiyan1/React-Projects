import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React from "react";
import { useState } from "react";

const Question = ({title,info}) => {
  const [show, setshow] = useState(false);

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setshow(!show)}>
          {show === false ? <AiOutlinePlus /> : <AiOutlineMinus/>}
        </button>
      </header>
      {show && <p>{info}</p>}
    </div>
  );
};

export default Question;

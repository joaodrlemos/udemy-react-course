import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsOpened(!isOpened)}>
          {!isOpened ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {isOpened && <p>{info}</p>}
    </article>
  );
};

export default Question;

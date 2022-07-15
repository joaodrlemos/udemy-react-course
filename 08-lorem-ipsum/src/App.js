import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="count">Paragraphs:</label>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          GENERATE
        </button>
      </form>
      {text.map((t, index) => {
        return (
          <article className="lorem-text" key={index}>
            <p>{t}</p>
          </article>
        );
      })}
    </section>
  );
}

export default App;

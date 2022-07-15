import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    try {
      const cols = new Values(inputVal).all(10);
      setColors(cols);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <main>
      <section className="container">
        <h3>Color Generator</h3>
        <input
          className={error ? "error" : null}
          type="text"
          placeholder="#f15025"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="btn" onClick={(e) => handleClick(e)}>
          Submit
        </button>
      </section>
      <div className="colors">
        {colors.map((color, index) => {
          return <SingleColor {...color} key={index} hex={color.hex} />;
        })}
      </div>
    </main>
  );
}

export default App;

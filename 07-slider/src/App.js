import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import Section from "./Section";

function App() {
  const [people, setPeople] = useState(data);
  const [personIndex, setPersonIndex] = useState(1);

  useEffect(() => {
    if (personIndex < 1) {
      setPersonIndex(people.length);
    }
    if (personIndex > people.length) {
      setPersonIndex(1);
    }
  }, [personIndex]);

  useEffect(() => {
    let autoSlider = setInterval(() => {
      setPersonIndex(personIndex + 1);
    }, 5000);
    return () => {
      clearInterval(autoSlider);
    };
  }, [personIndex]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <section className="section-center">
        {people.map((person, pIndex) => {
          const { id, image, name, title, quote } = person;
          pIndex = +1;
          let position = "nextSlide";
          if (id === personIndex) {
            position = "activeSlide";
          }
          if (
            id === personIndex - 1 ||
            (personIndex === 1 && id === people.length)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => setPersonIndex(personIndex - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => setPersonIndex(personIndex + 1)}
        >
          <FiChevronRight />
        </button>
      </section>
    </section>
  );
}

export default App;

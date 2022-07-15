import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index];

  const handleClick = (e) => {
    const dir = e.target.parentElement.name;
    if (dir === "prev") {
      if (index == 0) {
        setIndex(people.length - 1);
      } else {
        setIndex((p) => {
          return p - 1;
        });
      }
    } else if (dir === "next") {
      if (id == people.length) {
        setIndex(0);
      } else {
        setIndex((p) => {
          return p + 1;
        });
      }
    } else {
      setIndex(Math.floor(Math.random() * people.length));
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          name="prev"
          onClick={(e) => handleClick(e)}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          name="next"
          onClick={(e) => handleClick(e)}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        name="random"
        onClick={(e) => handleClick(e)}
      >
        {" "}
        suprise-me{" "}
      </button>
    </article>
  );
};

export default Review;

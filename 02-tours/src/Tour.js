import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {!isOpened ? info.slice(0, 290) + "..." : info}
            <button onClick={() => setIsOpened(!isOpened)}>
              {!isOpened ? "Read more" : "Show less"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            Not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;

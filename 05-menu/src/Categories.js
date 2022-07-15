import React from "react";

const Categories = ({ categories, filterItemsByCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={() => filterItemsByCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [filteredItems, setFilteredItems] = useState(items);
  const categories = ["all", ...new Set(items.map((item) => item.category))];

  const filterItemsByCategory = (category) => {
    // console.log(category);
    if (category === "all") {
      setFilteredItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setFilteredItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline" />
        </div>
        <Categories
          categories={categories}
          filterItemsByCategory={filterItemsByCategory}
        />
        <Menu items={filteredItems} />
      </section>
    </main>
  );
}

export default App;

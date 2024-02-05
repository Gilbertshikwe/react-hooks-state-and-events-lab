// ShoppingList.js
import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, darkMode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className={`ShoppingList ${darkMode ? "dark" : "light"}`}>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

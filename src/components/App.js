// App.js
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Header onDarkModeToggle={toggleDarkMode} />
      <ShoppingList items={itemData} darkMode={darkMode} />
    </div>
  );
}

export default App;


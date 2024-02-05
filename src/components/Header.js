// Header.js
import React from "react";

function Header({ onDarkModeToggle }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeToggle}>Dark Mode</button>
    </header>
  );
}

export default Header;

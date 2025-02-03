import React from "react"; // Import the React library
import "../assets/styles/styles.css"; // Import styles

function Header() {
  return (
    <div className="container">
      <img src="/assets/images/logo.png" alt="logo" className="logo"></img>
      <h1 className="text-center text-dark">Prodigals</h1>
    </div>
  );
}

export default Header; // Export the Header component
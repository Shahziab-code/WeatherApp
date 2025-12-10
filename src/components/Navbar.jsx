import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../style/navbar.css";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(text)
    }
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Weather Dashboard</h2>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search Your Country"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input"
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </nav>
  );
}

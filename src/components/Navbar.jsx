import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../style/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Weather Dashboard</h2>
      </div>
      <div className="search">
        <input type="text" placeholder="Search Your Country" className="input" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { useState, useCallback } from "react"; // Import useCallback
import { bubble as Menu } from "react-burger-menu";
import "./Navbar.scss";
import logoCat from "../../assets/images/BrewCat.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0);
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setKey((prevkey) => prevkey + 1);
  }, []);
  return (
    <>
      <div className="sticky_top_bar">
        <Menu key={key} isOpen={isOpen} onClick={closeMenu}>
          <Link id="home" className="menu-item" to="/home" onClick={closeMenu}>
            Home
          </Link>
          <Link
            id="random_beer"
            className="menu-item"
            to="/randombeer"
            onClick={closeMenu}
          >
            Random Beer
          </Link>
          <Link
            id="story"
            className="menu-item"
            to="/ourstory"
            onClick={closeMenu}
          >
            Our Story
          </Link>
          <Link
            id="tasting"
            className="menu-item"
            to="/tasting"
            onClick={closeMenu}
          >
            Tasting Sessions
          </Link>
        </Menu>
        <div className="logo_bar">
          <a href="http://localhost:3000/home" className="link_backhome">
            <img src={logoCat} alt="logo" className="logo_mobile" />
          </a>
        </div>
      </div>
      {/* Logo above for mobile version, below for desktop display */}
      <div className="logo_and_nav">
        <nav>
          <a href="http://localhost:3000/home" className="link_backhome">
            <img src={logoCat} alt="logo" className="main_logo" />
          </a>
          <div className="items_nav_list">
            <ul className="nav_list">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/ourstory">Our Story</Link>
              </li>
              <li>
                <Link to="/randombeer">Random Beer</Link>
              </li>
              <li>
                <Link to="/tasting">Tasting</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;

import { Link } from "react-router-dom";
import { useState } from "react";
import { bubble as Menu } from "react-burger-menu";
import "./Navbar.scss";
import logoCat from "../../assets/images/BrewCat.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState();
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="sticky_top_bar">
        <Menu isOpen={isOpen} onClick={closeMenu}>
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
          <a href="http://localhost:3000/" className="link_backhome">
            <img src={logoCat} alt="logo" className="logo_mobile" />
          </a>
        </div>
      </div>
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

/* eslint-disable jsx-a11y/anchor-is-valid */
import { bubble as Menu } from "react-burger-menu";
import "./Navbar.scss";
import logoCat from "../../assets/images/BrewCat.svg";

function Navbar() {
  return (
    <>
      <div className="sticky_top_bar">
        <Menu>
          <a id="home" className="menu-item" href="https://www.brewdog.com/fr">
            Home
          </a>
          <a id="story" className="menu-item" href="https://www.brewdog.com/fr">
            Our Story
          </a>
          <a
            id="random_beer"
            className="menu-item"
            href="https://www.brewdog.com/fr"
          >
            Random Beer
          </a>
          <a id="story" className="menu-item" href="https://www.brewdog.com/fr">
            Histoire
          </a>
        </Menu>
        <div className="logo_bar">
          <a href="" className="link_backhome">
            <img src={logoCat} alt="logo" className="logo_mobile" />
          </a>
        </div>
      </div>
      <div className="logo_and_nav">
        <nav>
          <a href="" className="link_backhome">
            <img src={logoCat} alt="logo" className="main_logo" />
          </a>
          <div className="items_nav_list">
            <ul className="nav_list">
              {/* TODO : ajouter les liens */}
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Random Beer</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

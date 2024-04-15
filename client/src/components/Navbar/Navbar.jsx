/* eslint-disable jsx-a11y/anchor-is-valid */
import { bubble as Menu } from "react-burger-menu";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <div className="sticky_top_bar">
        <Menu>
          <a id="home" className="menu-item" href="https://www.brewdog.com/fr">
            Home
          </a>
          <a id="beer" className="menu-item" href="https://www.brewdog.com/fr">
            Beer
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
            <img
              src="https://assets.untappd.com/site/brewery_logos_hd/brewery-384906_85e05_hd.jpeg"
              alt="logo"
              className="logo_mobile"
            />
          </a>
        </div>
      </div>
      <div className="logo_and_nav">
        <nav>
          <a href="" className="link_backhome">
            <img
              src="https://assets.untappd.com/site/brewery_logos_hd/brewery-384906_85e05_hd.jpeg"
              alt="logo"
              className="main_logo"
            />
          </a>
          <div className="items_nav_list">
            <ul className="nav_list">
              {/* TODO : ajouter les liens */}
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Beer</a>
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

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";
import "./Navbar.scss";
import logoCat from "../../assets/images/BrewCat.svg";

function Navbar() {
  return (
    <>
      <div className="sticky_top_bar">
        <Menu>
          <Link id="home" className="menu-item" to="/">
            Home
          </Link>
          <Link id="story" className="menu-item" to="/ourstory">
            Our Story
          </Link>
          <Link id="random_beer" className="menu-item" to="/randombeer">
            Random Beer
          </Link>
        </Menu>
        {/* This Menu compo is used for displaying menu-burger package so mobile only */}

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ourstory">Our Story</Link>
              </li>
              <li>
                {/* <a href="/RandomBeer">Random Beer</a> */}
                <Link to="/randombeer">Random Beer</Link>
              </li>
              <li>
                <a href="#">Tasting Sessions</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

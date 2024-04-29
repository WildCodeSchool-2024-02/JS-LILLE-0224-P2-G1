import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu";
import "./Navbar.scss";
import logoCat from "../../assets/images/BrewCat.svg";

function Navbar() {
  return (
    <>
      <div className="sticky_top_bar">
        <Menu>
          <Link id="home" className="menu-item" to="/home">
            Home
          </Link>
          <Link id="random_beer" className="menu-item" to="/randombeer">
            Random Beer
          </Link>
          <Link id="story" className="menu-item" to="/ourstory">
            Our Story
          </Link>
          <Link id="tasting" className="menu-item" to="/tasting">
            Tasting Sessions
          </Link>
        </Menu>
        {/* This Menu compo is used for displaying menu-burger package so mobile only */}

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
              {/* TODO : ajouter les liens */}
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/randombeer">Random Beer</Link>
              </li>
              <li>
                <Link to="/ourstory">Our Story</Link>
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

import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="container">
      <div className="alcohol_danger">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/015/309/486/small/warning-caution-sign-on-transparent-background-free-png.png"
          alt=""
        />
        <p>
          PLEASE DO NOT SHARE WITH ANYONE UNDER THE LEGAL <br /> PURCHASE AGE
          FOR ALCOHOL. DRINK RESPONSIBLY.
        </p>
      </div>
      <div className="footer_bottom">
        <p>
          <span className="white_text">
            © Copyright BrewCat 2015-2024 - Tous droits réservés.
          </span>
          Mentions légales
        </p>
        <div className="social_networks">
          <FontAwesomeIcon icon={faFacebook} className="fa_icon" />
          <FontAwesomeIcon icon={faInstagram} className="fa_icon" />
          <FontAwesomeIcon icon={faYoutube} className="fa_icon" />
          <FontAwesomeIcon icon={faTwitter} className="fa_icon" />
        </div>
        <p>Site créé par Alexandre, Benoit, Élodie, Mathieu et Vincent</p>
      </div>
    </div>
  );
}

export default Footer;

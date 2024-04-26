import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer_container">
      <div className="alcohol_warning">
        <img
          className="alcohol_warning_picto"
          src="https://static.vecteezy.com/system/resources/thumbnails/015/309/486/small/warning-caution-sign-on-transparent-background-free-png.png"
          alt="a red attention icon"
        />
        <p className="alcohol_warning_text">
          PLEASE DO NOT SHARE WITH ANYONE UNDER THE LEGAL <br /> PURCHASE AGE
          FOR ALCOHOL. DRINK RESPONSIBLY.
        </p>
      </div>
      <div className="footer_bottom">
        <div>
          <span className="legal_mentions">
            <p> © Copyright BrewCat 2015-2024 - All rights reserved. </p>
          </span>
          <p className="legal_notice">Legal Notice</p>
        </div>
        <div className="social_networks_footer">
          <FontAwesomeIcon icon={faFacebook} className="fa_icon" />
          <FontAwesomeIcon icon={faInstagram} className="fa_icon" />
          <FontAwesomeIcon icon={faYoutube} className="fa_icon" />
          <FontAwesomeIcon icon={faTwitter} className="fa_icon" />
        </div>
        <div>
          <p className="creators">
            Site created by Alexandre, Benoit, Elodie, Mathieu et Vincent
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

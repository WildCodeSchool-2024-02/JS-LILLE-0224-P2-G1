import dobToAge from "dob-to-age";
import { useState, useEffect } from "react";
import "./AgeVerification.scss";
import { Link } from "react-router-dom";
import logoCat from "../../assets/images/BrewCat.svg";

function AgeVerification() {
  const [userDOB, setUserDOB] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [linkDirect, setLinkDirect] = useState("");
  const handleChange = (event) => {
    const dob = event.target.value;
    setUserDOB(dob);
    setUserAge(dobToAge(dob));
    // userAge update at every change
  };
  useEffect(() => {
    if (userAge >= 18) {
      setLinkDirect("/home");
    } else {
      setLinkDirect("https://www.google.fr");
    }
  }, [userAge]);
  return (
    <div className="logo_and_popup">
      <a href="https://localhost:3000" className="link_backhome">
        <img src={logoCat} alt="logo" className="logo_age" />
      </a>
      <div className="popInAge">
        <p className="intro">
          Welcome on our site, to enter you must be over 18
        </p>
        <label htmlFor="DOB" className="labelDob">
          Date of birth :
        </label>
        <input
          className="dateOfBirth"
          id="dateOfBirth"
          type="date"
          value={userDOB}
          onChange={handleChange}
        />
        <Link id="home" to={linkDirect} className="age_btn">
          Enter
        </Link>
      </div>
    </div>
  );
}
export default AgeVerification;

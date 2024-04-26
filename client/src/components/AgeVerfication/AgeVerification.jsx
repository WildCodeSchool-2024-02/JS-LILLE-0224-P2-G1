import dobToAge from "dob-to-age";
import { useState } from "react";
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

  const handleAge = () => {
    if (userAge >= 18) {
      setLinkDirect("https://localhost:3000");
    } else {
      setLinkDirect("https://www.google.fr");
    }
  };
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

        <button type="button" onClick={handleAge} className="age_btn">
          <Link id="home" to={linkDirect}>
            Enter
          </Link>
        </button>
      </div>
    </div>
  );
}
export default AgeVerification;

import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "./Checkbox";
import MinMax from "./MinMax";
import Validate from "./Validate";
import "./Filter.scss";

function Filter({ setBeersList }) {
  const [dropdown, setDropdown] = useState(false);
  const [typesSelected, setTypesSelected] = useState([]);
  const [inputValueAbvMin, setInputValueAbvMin] = useState(0);
  const [inputValueAbvMax, setInputValueAbvMax] = useState(55);
  const [inputValueIbuMin, setInputValueIbuMin] = useState(0);
  const [inputValueIbuMax, setInputValueIbuMax] = useState(150);
  const [abvMinError, setAbvMinError] = useState("");
  const [abvMaxError, setAbvMaxError] = useState("");
  const [ibuMinError, setIbuMinError] = useState("");
  const [ibuMaxError, setIbuMaxError] = useState("");
  const [reset, setReset] = useState(false);

  const handleClickValidate = () => {
    axios
      .get(
        `https://beers.utop.workers.dev/beers?beer_type=${typesSelected}&abv_min=${inputValueAbvMin}&abv_max=${inputValueAbvMax}&ibu_min=${inputValueIbuMin}&ibu_max=${inputValueIbuMax}`
      )
      .then((response) => {
        setBeersList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const DisplayBeers = () => {
    axios
      .get("https://beers.utop.workers.dev")
      .then((response) => {
        setBeersList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleReset = () => {
    setReset(true);
    DisplayBeers();
  };

  return (
    <div className="DivFilter">
      <button
        type="button"
        className="filterButton"
        onClick={() => setDropdown(!dropdown)} // Fonction permettant de dérouler le menu des filtres au clic sur bouton
      >
        Filter
      </button>

      <FontAwesomeIcon
        className="arrowRotate"
        onClick={handleReset}
        icon={faRotateRight}
      />
      {dropdown && ( // si dropdown est "TRUE" affiche la div çi-dessous
        <div className="FiltersContainer">
          <Checkbox
            resetFilter={reset}
            setReset={setReset}
            typesSelected={typesSelected}
            setTypesSelected={setTypesSelected}
          />
          <MinMax
            resetFilter={reset}
            setReset={setReset}
            inputValueAbvMin={inputValueAbvMin}
            setInputValueAbvMin={setInputValueAbvMin}
            inputValueAbvMax={inputValueAbvMax}
            setInputValueAbvMax={setInputValueAbvMax}
            setInputValueIbuMin={setInputValueIbuMin}
            setInputValueIbuMax={setInputValueIbuMax}
            abvMinError={abvMinError}
            setAbvMinError={setAbvMinError}
            abvMaxError={abvMaxError}
            setAbvMaxError={setAbvMaxError}
            ibuMinError={ibuMinError}
            setIbuMinError={setIbuMinError}
            ibuMaxError={ibuMaxError}
            setIbuMaxError={setIbuMaxError}
          />
          <Validate handleClickValidate={handleClickValidate} />
        </div>
      )}
    </div>
  );
}

Filter.propTypes = {
  setBeersList: PropTypes.func.isRequired,
};

export default Filter;

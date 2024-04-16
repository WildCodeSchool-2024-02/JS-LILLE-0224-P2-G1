import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import MinMax from "./MinMax";
import Validate from "./Validate";
import "./Filter.css";

function Filter({ setBeersList, basicBeersList }) {
  const [dropdown, setDropdown] = useState(false);
  const [typesSelected, setTypesSelected] = useState([]);

  useEffect(() => {
    // "si" aucun type de bière sélectionné, alors on affiche toute la liste de bière "basicBeersList"
    if (!typesSelected.length) {
      setBeersList(basicBeersList);
      return;
    }
    // Sinon, on affiche la liste "basicBeersList" filtrée selon le type de bière
    setBeersList(
      basicBeersList.filter((beer) => typesSelected.includes(beer.type))
    );
  }, [typesSelected]);

  return (
    <div>
      <button
        type="button"
        className="filterButton"
        onClick={() => setDropdown(!dropdown)} // Fonction permettant de dérouler le menu des filtres au clic sur bouton
      >
        Filter
      </button>
      {dropdown && ( // si dropdown est "TRUE" affiche la div çi-dessous
        <div>
          <Checkbox
            typesSelected={typesSelected}
            setTypesSelected={setTypesSelected}
          />
          <MinMax />
          <Validate />
        </div>
      )}
    </div>
  );
}

Filter.propTypes = {
  basicBeersList: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      abv: PropTypes.number.isRequired,
      ibu: PropTypes.number.isRequired,
    })
  ),
  setBeersList: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  basicBeersList: [],
};

export default Filter;

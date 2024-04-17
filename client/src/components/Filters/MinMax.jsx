import PropTypes from "prop-types";

function MinMax({
  setInputValueAbvMin,
  setInputValueAbvMax,
  setInputValueIbuMin,
  setInputValueIbuMax,
}) {
  const handleChangeAbvMin = (event) => {
    let abvMin;
    if (event.target.value > 55 || event.target.value < 0) {
      // Si la valeur saisie est > AbvMax et < 0
      alert("le chiffre doit etre entre 0 et 55");
    } else if (event.target.value !== "") {
      // Si la valeur saisie n'est pas vide, utiliser cette valeur
      abvMin = event.target.value;
    } else {
      // Si le champ est vide alors la valeur sera celle par defaut
      abvMin = event.target.defaultValue;
    }

    setInputValueAbvMin(abvMin);
  };

  const handleChangeAbvMax = (event) => {
    let abvMax;
    if (event.target.value > 55 || event.target.value < 0) {
      // Si la valeur saisie est > AbvMax et < 0
      alert("le chiffre doit etre entre 0 et 55");
    } else if (event.target.value !== "") {
      // Si la valeur saisie n'est pas vide, utiliser cette valeur
      abvMax = event.target.value;
    } else {
      // Si le champ est vide alors la valeur sera celle par defaut
      abvMax = event.target.defaultValue;
    }

    setInputValueAbvMax(abvMax);
  };

  const handleChangeIbuMin = (event) => {
    let ibuMin;
    if (event.target.value > 150 || event.target.value < 0) {
      // Si la valeur saisie est > ibuMax et < 0
      alert("le chiffre doit etre entre 0 et 150");
    } else if (event.target.value !== "") {
      // Si la valeur saisie n'est pas vide, utiliser cette valeur
      ibuMin = event.target.value;
    } else {
      // Si le champ est vide alors la valeur sera celle par defaut
      ibuMin = event.target.defaultValue;
    }

    setInputValueIbuMin(ibuMin);
  };

  const handleChangeIbuMax = (event) => {
    let ibuMax;
    if (event.target.value > 150 || event.target.value < 0) {
      alert("le chiffre doit etre entre 0 et 150");
      // Si la valeur saisie est > IbuMax et < 0
    } else if (event.target.value !== "") {
      // Si la valeur saisie n'est pas vide, utiliser cette valeur
      ibuMax = event.target.value;
    } else {
      // Si le champ est vide alors la valeur sera celle par defaut
      ibuMax = event.target.defaultValue;
    }

    setInputValueIbuMax(ibuMax);
  };

  return (
    <div>
      <section className="BlockFilter">
        <fieldset className="fieldsetFilter">
          <legend>Alcohol degrees (0 - 55) </legend>
          <label htmlFor="abv">Min : </label>
          <input
            onChange={handleChangeAbvMin}
            type="number"
            id="abv"
            name="abv"
            min="0"
            max="55"
          />
          <label htmlFor="abv">Max : </label>
          <input
            onChange={handleChangeAbvMax}
            type="number"
            id="abv"
            name="abv"
            min="0"
            max="55"
          />
        </fieldset>

        <fieldset className="fieldsetFilter">
          <legend>Bitterness (0 - 150) </legend>
          <label htmlFor="ibu">Min : </label>
          <input
            onChange={handleChangeIbuMin}
            type="number"
            id="ibu"
            name="ibu"
            min="0"
            max="150"
          />
          <label htmlFor="ibu">Max : </label>
          <input
            onChange={handleChangeIbuMax}
            type="number"
            id="ibu"
            name="ibu"
            min="0"
            max="150"
          />
        </fieldset>
      </section>
    </div>
  );
}

MinMax.propTypes = {
  setInputValueAbvMin: PropTypes.func.isRequired,
  setInputValueAbvMax: PropTypes.func.isRequired,
  setInputValueIbuMin: PropTypes.func.isRequired,
  setInputValueIbuMax: PropTypes.func.isRequired,
};

export default MinMax;

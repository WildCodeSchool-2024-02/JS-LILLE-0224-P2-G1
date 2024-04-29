import PropTypes from "prop-types";

function MinMax({
  setInputValueAbvMin,
  setInputValueAbvMax,
  setInputValueIbuMin,
  setInputValueIbuMax,
  setAbvMinError,
  setAbvMaxError,
  setIbuMinError,
  setIbuMaxError,
  abvMinError,
  abvMaxError,
  ibuMinError,
  ibuMaxError,
  resetFilter,
  setReset,
}) {
  // RESET FILTER : boucle sur les input et les passe tous en vide "" en leur assignant les valeurs de départ
  if (resetFilter) {
    const inputMinMax = document.getElementsByTagName("input");
    for (let i = 0; i < inputMinMax.length; i += 1) {
      inputMinMax[i].value = "";
    }
    setInputValueAbvMin(0);
    setInputValueAbvMax(55);
    setInputValueIbuMin(0);
    setInputValueIbuMax(150);
    setAbvMinError("");
    setAbvMaxError("");
    setIbuMinError("");
    setIbuMaxError("");
    setReset(!resetFilter);
  }

  const handleChangeAbvMin = (event) => {
    const value = parseFloat(event.target.value);
    if (value > 55 || value < 0) {
      setAbvMinError("The number must be between 0 and 55");
    } else {
      setInputValueAbvMin(value);
      setAbvMinError("");
    }
  };

  const handleChangeAbvMax = (event) => {
    const value = parseFloat(event.target.value);
    if (value > 55 || value < 0) {
      setAbvMaxError("The number must be between 0 and 55");
    } else {
      setInputValueAbvMax(value);
      setAbvMaxError("");
    }
  };

  const handleChangeIbuMin = (event) => {
    const value = parseFloat(event.target.value);
    if (value > 150 || value < 0) {
      setIbuMinError("The number must be between 0 and 150");
    } else {
      setInputValueIbuMin(value);
      setIbuMinError("");
    }
  };

  const handleChangeIbuMax = (event) => {
    const value = parseFloat(event.target.value);
    if (value > 150 || value < 0) {
      setIbuMaxError("The number must be between 0 and 150");
    } else {
      setInputValueIbuMax(value);
      setIbuMaxError("");
    }
  };

  return (
    <div>
      <section className="BlockFilter">
        <fieldset className="fieldsetFilter">
          <legend>Alcohol degrees (0 - 55) </legend>
          <label htmlFor="abvMin">Min : </label>
          <input
            onChange={handleChangeAbvMin}
            type="number"
            id="abvMin"
            name="abvMin"
            min="0"
            max="55"
          />
          <label htmlFor="abvMax">Max : </label>
          <input
            onChange={handleChangeAbvMax}
            type="number"
            id="abvMax"
            name="abvMax"
            min="0"
            max="55"
          />
          {abvMinError && <p className="errorMessage">{abvMinError}</p>}
          {abvMaxError && <p className="errorMessage">{abvMaxError}</p>}
        </fieldset>

        <fieldset className="fieldsetFilter">
          <legend>Bitterness (0 - 150) </legend>
          <label htmlFor="ibuMin">Min : </label>
          <input
            onChange={handleChangeIbuMin}
            type="number"
            id="ibuMin"
            name="ibuMin"
            min="0"
            max="150"
          />
          <label htmlFor="ibuMax">Max : </label>
          <input
            onChange={handleChangeIbuMax}
            type="number"
            id="ibuMax"
            name="ibuMax"
            min="0"
            max="150"
          />
          {ibuMinError && <p className="errorMessage">{ibuMinError}</p>}
          {ibuMaxError && <p className="errorMessage">{ibuMaxError}</p>}
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
  setAbvMinError: PropTypes.func.isRequired,
  setAbvMaxError: PropTypes.func.isRequired,
  setIbuMinError: PropTypes.func.isRequired,
  setIbuMaxError: PropTypes.func.isRequired,
  abvMinError: PropTypes.string.isRequired,
  abvMaxError: PropTypes.string.isRequired,
  ibuMinError: PropTypes.string.isRequired,
  ibuMaxError: PropTypes.string.isRequired,
  resetFilter: PropTypes.bool.isRequired,
  setReset: PropTypes.func.isRequired,
};

export default MinMax;

import PropTypes from "prop-types";

function Checkbox({ typesSelected, setTypesSelected }) {
  const handleChangeCheckbox = (e) => {
    //
    if (typesSelected.includes(e.target.name)) {
      setTypesSelected(typesSelected.filter((item) => item !== e.target.name));
    } else {
      // crée un nouveau tableau de résultats avec les nouveaux types de bières sélectionnés
      const newArray = [...typesSelected, e.target.name];
      setTypesSelected(newArray);
    }
  };

  return (
    <div>
      <fieldset className="fieldsetFilter">
        <legend>Beer types </legend>
        <div>
          <input
            onChange={handleChangeCheckbox}
            type="checkbox"
            id="Abbey"
            name="Abbey"
          />
          <label htmlFor="Abbey">Abbey</label>
        </div>

        <div>
          <input
            onChange={handleChangeCheckbox}
            type="checkbox"
            id="Braun"
            name="Braun"
          />
          <label htmlFor="Braun">Braun</label>
        </div>

        <div>
          <input
            onChange={handleChangeCheckbox}
            type="checkbox"
            id="Black"
            name="Black"
          />
          <label htmlFor="Black">Black</label>
        </div>

        <div>
          <input
            onChange={handleChangeCheckbox}
            type="checkbox"
            id="Blonde"
            name="Blonde"
          />
          <label htmlFor="Blonde">Blonde</label>
        </div>

        <div>
          <input
            onChange={handleChangeCheckbox}
            type="checkbox"
            id="IPA"
            name="IPA"
          />
          <label htmlFor="IPA">IPA</label>
        </div>
      </fieldset>
      {/* <button onClick={handleFilters} type="button" className="validateButton">
        Validate
      </button> */}
    </div>
  );
}

Checkbox.propTypes = {
  setTypesSelected: PropTypes.func.isRequired,
  typesSelected: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Checkbox;

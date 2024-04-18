import PropTypes from "prop-types";

function Checkbox({ typesSelected, setTypesSelected, resetFilter, setReset }) {
  // NOM de L'INPUT : fonction qui récupère le nom des checkbox qui ont changé d'état
  const handleChangeCheckbox = (e) => {
    if (typesSelected.includes(e.target.name)) {
      setTypesSelected(typesSelected.filter((item) => item !== e.target.name));
    } else {
      // crée un nouveau tableau de résultats avec les nouveaux types de bières sélectionnés
      const newArray = [...typesSelected, e.target.name];
      setTypesSelected(newArray);
    }
  };

  // RESET FILTER : boucle sur les checkbox et les passe tous en false
  if (resetFilter) {
    const inputCheck = document.getElementsByTagName("input");
    for (let i = 0; i < inputCheck.length; i += 1) {
      inputCheck[i].checked = false;
    }
    // les remet sous forme de tableau ?
    setTypesSelected([]);
    // arret de la boucle
    setReset(!resetFilter);
  }

  return (
    <div>
      <section>
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
      </section>
    </div>
  );
}

Checkbox.propTypes = {
  setTypesSelected: PropTypes.func.isRequired,
  typesSelected: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  resetFilter: PropTypes.func.isRequired,
  setReset: PropTypes.func.isRequired,
};

export default Checkbox;

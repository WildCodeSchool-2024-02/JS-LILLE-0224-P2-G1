function MinMax() {
  return (
    <div>
      <fieldset className="fieldsetFilter">
        <legend>Alcohol degrees (0 - 55) </legend>
        <label htmlFor="abv">Min : </label>
        <input type="number" id="abv" name="abv" min="0" max="55" />
        <label htmlFor="abv">Max : </label>
        <input type="number" id="abv" name="abv" min="0" max="55" />
      </fieldset>

      <fieldset className="fieldsetFilter">
        <legend>Bitterness (0 - 150) </legend>
        <label htmlFor="ibu">Min : </label>
        <input type="number" id="ibu" name="ibu" min="0" max="150" />
        <label htmlFor="ibu">Max : </label>
        <input type="number" id="ibu" name="ibu" min="0" max="150" />
      </fieldset>
    </div>
  );
}
export default MinMax;

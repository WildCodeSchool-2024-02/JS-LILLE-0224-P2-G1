import PropTypes from "prop-types";

function Validate({ handleClickValidate }) {
  return (
    <div>
      <button
        onClick={handleClickValidate}
        type="button"
        className="validateButton"
      >
        Validate
      </button>
    </div>
  );
}

Validate.propTypes = {
  handleClickValidate: PropTypes.func.isRequired,
};

export default Validate;

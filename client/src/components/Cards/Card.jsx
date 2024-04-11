import "./Card.css";
import PropTypes from "prop-types";

function Card({ Beer }) {
  return (
    <div className="container">
      <h3>{Beer.name}</h3>
      <img className="beer_image" src={Beer.image_url} alt="beer" />
      <div className="infos">
        <p>{Beer.type}</p>
        <div className="properties">
          <p className="property"> {Beer.abv}%</p>
          <p className="property">ibu: {Beer.ibu}</p>
        </div>
        <blockquote>{Beer.description}</blockquote>
      </div>
    </div>
  );
}

Card.propTypes = {
  Beer: PropTypes.string.isRequired,
};

export default Card;

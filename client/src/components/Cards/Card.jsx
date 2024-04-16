import "./Card.css";
import PropTypes from "prop-types";

function Card({ beer }) {
  return (
    <div className="container">
      <h3>{beer.name}</h3>
      <img className="beer_image" src={beer.image_url} alt="beer" />
      <div className="infos">
        <p>{beer.type}</p>
        <div className="properties">
          <p className="property"> {beer.abv}%</p>
          <p className="property">ibu: {beer.ibu}</p>
        </div>
        <blockquote>{beer.description}</blockquote>
      </div>
    </div>
  );
}

Card.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    ibu: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;

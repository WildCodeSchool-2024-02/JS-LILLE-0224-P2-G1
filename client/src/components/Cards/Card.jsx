import "./Card.css";
import PropTypes from "prop-types";

function Card({ beer }) {
  return (
    <div className="card_container">
      <h3>{beer.name}</h3>
      <img className="beer_image" src={beer.image_url} alt="beer" />
      <div className="beer_infos">
        <p>{beer.type}</p>
        <div className="beer_properties">
          <p className="beer_ABVIBU"> {beer.abv}%</p>
          <p className="beer_ABVIBU">ibu: {beer.ibu}</p>
        </div>
        <blockquote className="beer_description">{beer.description}</blockquote>
      </div>
    </div>
  );
}

Card.propTypes = {
  beer: PropTypes.string.isRequired,
};

export default Card;

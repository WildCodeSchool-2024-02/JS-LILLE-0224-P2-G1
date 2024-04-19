import "../Cards/Card.css";
import PropTypes from "prop-types";

function RandomBeerCard({ beer }) {
  return (
    <div className="card_container">
      <h3>{beer.name}</h3>
      <img className="beer_image" src={beer.image_url} alt="beer" />
      <div className="beer_infos">
        <p>{beer.type}</p>
        <div className="beer_properties">
          <p className="beer_ABVIBU"> {beer.abv}%</p>
          <p className="beer_ABVIBU">IBU: {beer.ibu}</p>
        </div>
        <blockquote className="beer_description">{beer.description}</blockquote>
      </div>
    </div>
  );
}
RandomBeerCard.propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    ibu: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default RandomBeerCard;

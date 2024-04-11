import PropTypes from "prop-types";
import Card from "./Card";
import "./CardsList.css";

function CardsList({ beerList }) {
  return (
    <div className="containers">
      {beerList.map((beer) => (
        <Card Beer={beer} key={`${beer.name}-${beer.id}`} />
      ))}
      ;
    </div>
  );
}

CardsList.propTypes = {
  beerList: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      abv: PropTypes.number.isRequired,
      ibu: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CardsList;

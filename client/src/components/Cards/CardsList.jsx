import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./Card";
import "./CardsList.css";

function CardsList({ beerList }) {
  const [indexOfLastBeer, setIndexOfLastBeer] = useState(12);

  const handleSeeMore = () => {
    setIndexOfLastBeer(indexOfLastBeer + 9);
  };

  const handleSeeLess = () => {
    setIndexOfLastBeer(12);
  };

  return (
    <>
      <div className="beer_mapping">
        {beerList.slice(0, indexOfLastBeer).map((beer) => (
          <Card beer={beer} key={`${beer.name}-${beer.id}`} />
        ))}
      </div>
      {indexOfLastBeer < beerList.length ? (
        <button
          className="display_more_btn"
          onClick={handleSeeMore}
          type="button"
        >
          See More
        </button>
      ) : (
        <button
          className="display_more_btn"
          onClick={handleSeeLess}
          type="button"
        >
          See Less
        </button>
      )}
    </>
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

import { useState } from "react";
import PropTypes from "prop-types";
import RandomBeerCard from "./RandomBeerCard";
import "./randomBeerList.css";

function RandomBeerList({ beerList }) {
  const [randomBeer, setRandomBeer] = useState(null);

  const chooseRandomBeer = () => {
    const randomIndex = Math.floor(Math.random() * beerList.length);
    const newRandomBeer = beerList[randomIndex];
    setRandomBeer(newRandomBeer);
  };

  return (
    <div className="beer_randomizing">
      <button onClick={chooseRandomBeer} className="random_btn" type="button">
        {" "}
        Get A New beer{" "}
      </button>
      {randomBeer && (
        <RandomBeerCard
          beer={randomBeer}
          key={`${randomBeer.name}-${randomBeer.id}`}
        />
      )}
    </div>
  );
}

RandomBeerList.propTypes = {
  beerList: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      abv: PropTypes.number.isRequired,
      ibu: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default RandomBeerList;

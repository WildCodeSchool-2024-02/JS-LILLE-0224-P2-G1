import { useState } from "react";
import PropTypes from "prop-types";
import RandomBeerCard from "./RandomBeerCard";
import RandomAnimation from "./RandomAnimation";
import "./randomBeerList.css";

function RandomBeerList({ beerList }) {
  const [randomBeer, setRandomBeer] = useState(() => {
    const randomIndex = Math.floor(Math.random() * beerList.length);
    return beerList[randomIndex];
  });

  const [startAnimation, setStartAnimation] = useState(false);

  const chooseRandomBeer = () => {
    const randomIndex = Math.floor(Math.random() * beerList.length);
    const newRandomBeer = beerList[randomIndex];
    if (startAnimation === false) {
      setTimeout(() => {
        setRandomBeer(newRandomBeer);
      }, 1600);
    } else {
      setRandomBeer(newRandomBeer);
    }
    setStartAnimation(true);
  };

  return (
    <div className="beer_randomizing">
      <div className="beer_animation">
        <RandomAnimation startAnimation={startAnimation} />
      </div>
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

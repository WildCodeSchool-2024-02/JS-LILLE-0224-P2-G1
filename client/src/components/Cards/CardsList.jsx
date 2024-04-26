import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./Card";
import "./CardsList.scss";

function CardsList({ beerList }) {
  const [indexOfLastBeer, setIndexOfLastBeer] = useState(12);
  const [sortedBeerList, setSortedBeerList] = useState(beerList);
  const [buttonName, setButtonName] = useState("Sort by Name (A-Z)");

  const handleSeeMore = () => {
    setIndexOfLastBeer(indexOfLastBeer + 9);
  };

  const handleSeeLess = () => {
    setIndexOfLastBeer(12);
  };

  const handleSorting = () => {
    if (buttonName === "Sort by Name (A-Z)") {
      const sortedList = [...beerList].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setSortedBeerList(sortedList);
      setButtonName("Sort by Name (Z-A)");
    } else if (buttonName === "Sort by Name (Z-A)") {
      const reverseSortedList = [...beerList].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setSortedBeerList(reverseSortedList);
      setButtonName("Unsort");
    } else {
      setSortedBeerList(beerList);
      setButtonName("Sort by Name (A-Z)");
    }
  };
  return (
    <>
      <div className="div_btn">
        <button type="button" className="sorting_btn" onClick={handleSorting}>
          {buttonName}
        </button>
      </div>
      <div className="beer_mapping">
        {sortedBeerList.slice(0, indexOfLastBeer).map((beer) => (
          <Card beer={beer} key={`${beer.name}-${beer.id}`} />
        ))}
      </div>
      {indexOfLastBeer < sortedBeerList.length ? (
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
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      abv: PropTypes.number.isRequired,
      ibu: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CardsList;

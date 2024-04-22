import axios from "axios";
import { useState, useEffect } from "react";
import RandomBeerList from "../components/RandomBeer/RandomBeerList";

function RandomBeerPage() {
  const [beersList, setBeersList] = useState();

  useEffect(() => {
    axios
      .get("https://beers.utop.workers.dev")
      .then((response) => {
        setBeersList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div>{beersList && <RandomBeerList beerList={beersList} />}</div>;
}

export default RandomBeerPage;

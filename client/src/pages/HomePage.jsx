import { useState, useEffect } from "react";
import axios from "axios";
import CardsList from "../components/Cards/CardsList";
import Filter from "../components/Filters/Filter";
import Carousel from "../components/Carousel/Carousel";

function HomePage() {
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

  return (
    <>
      <Carousel />
      <Filter setBeersList={setBeersList} />
      {beersList && <CardsList beerList={beersList} />}
    </>
  );
}

export default HomePage;

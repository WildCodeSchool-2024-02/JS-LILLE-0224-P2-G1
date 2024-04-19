import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import StoryContent from "./components/Story/StoryContent";
import RandomBeerList from "./components/RandomBeer/RandomBeerList";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CardsList from "./components/Cards/CardsList";
import Carousel from "./components/Carousel/Carousel";

function App() {
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
      {" "}
      <Navbar />
      <div>
        <Carousel />
      </div>
      <div>{beersList && <RandomBeerList beerList={beersList} />}</div>
      <div>{beersList && <CardsList beerList={beersList} />}</div>
      {/* special syntax for beerslist to avoid autorefresh */}
      <StoryContent />
      <Footer />
    </>
  );
}
export default App;

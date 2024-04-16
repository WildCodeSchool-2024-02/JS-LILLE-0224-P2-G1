import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CardsList from "./components/Cards/CardsList";
import Filter from "./components/Filters/Filter";

function App() {
  const [basicBeersList, setBasicBeersList] = useState();
  const [beersList, setBeersList] = useState(basicBeersList);

  useEffect(() => {
    axios
      .get("https://beers.utop.workers.dev")
      .then((response) => {
        setBasicBeersList(response.data);
        setBeersList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Filter setBeersList={setBeersList} basicBeersList={basicBeersList} />
      <div>{beersList && <CardsList beerList={beersList} />}</div>
    </>
  );
}
export default App;

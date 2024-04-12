import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer";
import CardsList from "./components/Cards/CardsList";

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

  return <div>{beersList && <CardsList beerList={beersList} />}</div>;

}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Tasting from "./components/Tasting/Tasting";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CardsList from "./components/Cards/CardsList";
import CardTasting from "./components/CardsTasting/CardTasting";

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
      <div>{beersList && <CardsList beerList={beersList} />}</div>
      {/* special syntax for beerslist to avoid autorefresh */}
      <Footer />
      <Tasting />
      <CardTasting />
      <Footer />
    </>
  );
}
export default App;

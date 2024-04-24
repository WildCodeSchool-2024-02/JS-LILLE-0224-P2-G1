import { Outlet } from "react-router-dom";
import "./App.css";
import StoryContent from "./components/Story/StoryContent";
import RandomBeerList from "./components/RandomBeer/RandomBeerList";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CardsList from "./components/Cards/CardsList";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [beersList, setBeersList] = useState();
function App() {
  return (
    <>
      <Navbar />
<
      <div>
        <Carousel />
      </div>
      <div>{beersList && <RandomBeerList beerList={beersList} />}</div>
      <div>{beersList && <CardsList beerList={beersList} />}</div>
      {/* special syntax for beerslist to avoid autorefresh */}
      <StoryContent />
      <main>
        <Outlet />
      </main>
      <Footer />
    
    </>
  );
}
export default App;

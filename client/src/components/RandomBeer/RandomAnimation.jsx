import { useEffect } from "react";
import "./RandomAnimation.css";
import PropTypes from "prop-types";

function RandomAnimation({ startAnimation }) {
  useEffect(() => {
    const beerRise = () => {
      document.querySelector(".beer").classList.add("fill");
      document.querySelector(".head").classList.add("active");
    };

    const pourBeer = () => {
      document.querySelector(".pour").classList.add("pouring");
      beerRise();
      setTimeout(() => {
        document.querySelector(".pour").classList.add("end");
      }, 1000);
    };
    if (startAnimation) {
      pourBeer();
    }
  }, [startAnimation]);
  return (
    <div>
      <div id="container_beer_animation">
        <div className="glass">
          <div className="beer" />
        </div>
        <div className="head" />
        <div className="pour" />
      </div>
    </div>
  );
}

RandomAnimation.propTypes = {
  startAnimation: PropTypes.bool.isRequired,
};
export default RandomAnimation;

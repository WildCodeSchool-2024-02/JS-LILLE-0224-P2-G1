/* eslint-disable */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import PropTypes from "prop-types";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#07b2d9" }}
      onClick={onClick}
    />
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#07b2d9" }}
      onClick={onClick}
    />
  );
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <p className="slickSlidePanel">
            BrewCat is a multinational brewery and pub chain based in Ellon,
            Scotland. With production of over 800,000 hectolitres, we claim to
            be the "#1 Craft Brewer in Europe".James Watt and Martin Dickie
            founded it in 2007, who together own 47% of the company. We also
            hold the record for the world's strongest beer, the Sink The
            Bismarck, an apparent 41% ABV, which helped us reclaiming the title
            form the german based brewery Schorschbräu.The Physics won World's
            Best Strong Pale Ale (Sub Category Winner) and Rip Tide won World's
            Best Imperial Stout (Style Trophy Winner) at the 2007 World Beer
            Awards, an annual competition organised by Beers of the World
            magazine. Paradox Grain won a gold medal at the 2008 World Beer Cup
            in the Wood and Barrel-aged Strong Beer Category. Hardcore IPA won
            Gold at the 2010 World Beer Cup in the Imperial IPA category.
          </p>
          <h3>About us</h3>
        </div>
        <div>
          <img
            src="https://www.brewdog.com/media/catalog/product/cache/eb360c13587b21a8ac6c611a2762b864/p/u/punk_ipa_houblonne_brewdog_biere_artisanale_48_canettes.png"
            className="slickSlidePanel"
            alt="BestBeer"
          />
          <h3>Beer of the month</h3>
        </div>
        <div>
          <img
            src="https://www.freetour.com/images/tours/469/hamburg-craft-beer-tasting-tour-03.jpg"
            className="slickSlidePanel"
            alt="BeerTasting"
          />
          <h3>Come and taste</h3>
        </div>
      </Slider>{" "}
    </div>
  );
}

export default Carousel;

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
    initialSlide: 0,
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
            Welcome to our Brewcat beer website ! Here you can find every beer
            we've created so far for your greatest delight. <br />
            You can sort our beers to suit your tastes or give a try to a random
            suggestion, book tasting events, and learn more about brand's story
          </p>
          <h3 className="carousel_title">Our concept ?</h3>
        </div>
        <div>
          <img
            src="https://www.brewdog.com/media/catalog/product/cache/eb360c13587b21a8ac6c611a2762b864/p/u/punk_ipa_houblonne_brewdog_biere_artisanale_48_canettes.png"
            className="slickSlidePanel"
            alt="BestBeer"
          />
          <h3 className="carousel_title">Beer of the month</h3>
        </div>
        <div>
          <img
            src="https://www.freetour.com/images/tours/469/hamburg-craft-beer-tasting-tour-03.jpg"
            className="slickSlidePanel"
            alt="BeerTasting"
          />
          <h3 className="carousel_title">Come and taste</h3>
        </div>
      </Slider>{" "}
    </div>
  );
}

export default Carousel;

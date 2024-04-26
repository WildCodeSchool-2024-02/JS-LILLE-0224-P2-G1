import "./Tasting.scss";

function Tasting() {
  return (
    <div>
      <main>
        <h2 className="first_text">OUR BEER TASTING COURSES</h2>
        <h3 className="introduction">
          We want to introduce you to the world of craft beer in a friendly and
          participatory way, as beer knows how to be.
        </h3>

        <img
          className="img_mobile"
          src="/assets/images/biere.png"
          alt="a beer and a glass in drawing"
        />

        <div className="tasting_workshop">
          <p className="text0">
            <h4 className="title4">Tasting course</h4>
            <br />
            Every month, we invite you to participate in a workshop in a partner
            bar or restaurant. We will talk to you about the art of taste a
            beer, but also the manufacturing process and the importance of the 4
            ingredients that make up beer, the history of said beverage and all
            the anecdotes attached to the world brewing.
          </p>

          <p className="text0">
            <h4 className="title4">A beer workshop</h4>
            <br />
            The opportunity to introduce yourself to the art of beerology (or
            zythologie) to make you a beer connoisseur artisanal from all
            angles, in order to preach the good word around you and impress your
            friends. The Beerology Workshop lasts 2 hours, with 4 beers to taste
            and a small snack.
          </p>
        </div>

        <p className="shortly">Shortly :</p>
      </main>
    </div>
  );
}
export default Tasting;

import "./CardTasting.scss";
import { ArrowRightAlt } from "@mui/icons-material";

function CardTasting() {
  return (
    <main>
      <section className="tasting_container">
        <div className="card_tasting">
          <img
            src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles/ena_16_9_extra_big/node_1056546/53080682/public/thumbnails/image/_mg_2800.jpg?itok=zk1rzoic1628865323"
            alt=""
          />
          <div className="card-content">
            <h1>11/05/2024</h1>
            <h2>LILLE</h2>

            <p>
              The BAL - Beer in Lille is the festival of beer and brewing
              culture in the Lille metropolis. A series fun events in bars,
              restaurants and public places which aim to create bridges between
              the world of beer and gastronomy.
            </p>
            <a
              href="https://www.bierealille.com/"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <span className="material-symbols-outlined">
                <ArrowRightAlt />
              </span>
            </a>
          </div>
        </div>

        <div className="card_tasting">
          <img
            src="https://img.freepik.com/photos-premium/boissons-romantiques-devant-tour-eiffel-au-coucher-du-soleil-paris-france_910371-195.jpg"
            alt=""
          />
          <div className="card-content">
            <h1>15/06/2024</h1>
            <h2>PARIS</h2>
            <p>
              BAPBAP - (Beer in Paris, Brewed in Paris) Craft brewery located in
              the 11th arrondissement of Paris. They brew a large range of craft
              beers. You can visit their beer bar to taste their creations
              directly on site.
            </p>
            <a
              href="https://www.bapbap.paris/visite-de-la-brasserie/"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <span className="material-symbols-outlined">
                <ArrowRightAlt />
              </span>
            </a>
          </div>
        </div>

        <div className="card_tasting">
          <img
            src="https://media.gqmagazine.fr/photos/5f7ddd8898c274a8707da089/16:9/w_2560%2Cc_limit/GettyImages-684133728.jpg"
            alt=""
          />
          <div className="card-content">
            <h1>13/07/2024</h1>
            <h2>LYON</h2>
            <p>
              LA BEER FABRIQUE - The family is growing in Lyon by offering
              brewing workshops and a whole range of concepts innovative around
              craft beer. Let yourself be tempted by our different tasting
              formats.
            </p>
            <a
              href="https://www.labeerfabrique.com/lyon/"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <span className="material-symbols-outlined">
                <ArrowRightAlt />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="tasting_container">
        <div className="card_tasting">
          <img
            src="https://www.lagourmetbox.com/media/Blog/1920391-inline.jpg"
            alt=""
          />
          <div className="card-content">
            <h1>10/08/2024</h1>
            <h2>ESQUELBECQ</h2>
            <p>
              BRASSERIE THIRIEZ - It's a family but also a great team. jumped by
              7 people. They brew a little over 2,000 each year. hectoliters.
              For them, beer is synonymous with sharing and conviviality. so
              come and taste!!
            </p>
            <a
              href="https://www.brasseriethiriez.com/la-brasserie-brasserie-familiale-des-flandres.html"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <span className="material-symbols-outlined">
                <ArrowRightAlt />
              </span>
            </a>
          </div>
        </div>

        <div className="card_tasting">
          <img
            src="https://img.freepik.com/photos-gratuite/verre-biere-mousseux-reflete-celebration-dans-bar-genere-par-ia_188544-34585.jpg?size=626&ext=jpg&ga=GA1.2.205140442.1709891244&semt=ais"
            alt=""
          />
          <div className="card-content">
            <h1>14/09/2024</h1>
            <h2>WAMBRECHIES</h2>
            <p>
              BRASSERIE TANDEM - Creation of a craft brewery in 2019 based in
              Wambrechies. She offers visits every Saturday to discover their
              manufacturing processes with a tasting of different beers.
            </p>
            <a
              href="https://www.brasserie-tandem.com/"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <span className="material-symbols-outlined">
                <ArrowRightAlt />
              </span>
            </a>
          </div>
        </div>

        <div className="card_tasting">
          <img
            src="https://img.freepik.com/photos-premium/trois-verres-biere-plage_911101-617.jpg?w=1060"
            alt=""
          />
          <div className="card-content">
            <h1>12/10/2024</h1>
            <h2>BREST</h2>
            <p>
              BRASSERIE DU BARIL - Created in July 2015 in the heart of Brest,
              this microbrewery produces organic craft beers. She will also
              surprise you with its ephemeral brews. So time for tasting!!
            </p>
            <a
              href="https://fr.gaultmillau.com/artisans/brasserie-du-baril"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
              <span className="material-symbols-outlined">
                <ArrowRightAlt />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CardTasting;

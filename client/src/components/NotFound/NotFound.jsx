import "./NotFound.css";

function NotFound() {
  //
  return (
    <div className="NotFound">
      {/* Conteneur de la page d'erreur */}
      <h2 className="Not_Found_Title"> Error 404 - Not Found</h2>
      {/* Titre de la page d'erreur */}
      <img
        src="https://media.istockphoto.com/id/1397562936/vector/cat-drinks-beer.jpg?s=612x612&w=0&k=20&c=Q9cd6sxayXMaUGegwFjsLoSkldlZlu_0k8xXJybBqbE="
        alt="AperoCat"
        className="Not_Found_Img"
      />
      {/* Image de la page d'erreur */}
      <p className="Not_Found_Text">
        Are meow lost? Maybe meow should go there!{" "}
      </p>
      {/* texte sous l'image */}
      <a className="Home_Page_Link" href="/">
        {" "}
        Homepage
      </a>
      {/* lien de retour vers la Homepage */}
    </div>
  );
}

export default NotFound;

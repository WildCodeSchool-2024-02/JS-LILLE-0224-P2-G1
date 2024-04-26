import "./NotFound.scss";

function NotFound() {
  return (
    <div className="notFound">
      {/* Error page container */}
      <h2 className="Not_Found_Title"> Error 404 - Not Found</h2>
      {/* Error page title */}
      <img
        src="https://media.istockphoto.com/id/1397562936/vector/cat-drinks-beer.jpg?s=612x612&w=0&k=20&c=Q9cd6sxayXMaUGegwFjsLoSkldlZlu_0k8xXJybBqbE="
        alt="AperoCat"
        className="not_Found_Img"
      />
      {/* Error page image */}
      <p className="not_Found_Text">
        Are meow lost? Maybe meow should go there!{" "}
      </p>
      {/* under image text */}
      <a className="home_Page_Link" href="/">
        {" "}
        Homepage
      </a>
      {/* HomePage link */}
    </div>
  );
}

export default NotFound;

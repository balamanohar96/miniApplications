import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link className="nav-item" to="/first">
        incriment,decriment
      </Link>
      <Link className="nav-item" to="/second">
        friends names
      </Link>
      <Link className="nav-item" to="/third">
        name search
      </Link>
      <Link className="nav-item" to="/fourth">
        copy inputs
      </Link>
      <Link className="nav-item" to="/fifth">
        To-Do
      </Link>
      <Link className="nav-item" to="/sixth">
        dynamic DropDowns
      </Link>
      <Link className="nav-item" to="/seventh">
        Hovered DropDown
      </Link>
    </div>
  );
}

export default Home;

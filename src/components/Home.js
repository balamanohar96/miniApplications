import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link className="nav-item" to="/counter">
        Counter
      </Link>
      <Link className="nav-item" to="/names">
        friends names
      </Link>
      <Link className="nav-item" to="/namesearch">
        name search
      </Link>
      <Link className="nav-item" to="/fullName">
        copy inputs
      </Link>
      <Link className="nav-item" to="/todo">
        To-Do
      </Link>
      <Link className="nav-item" to="/dynamicDropdown">
        dynamic DropDowns
      </Link>
      <Link className="nav-item" to="/hoveredDropdown">
        Hovered DropDown
      </Link>
    </div>
  );
}

export default Home;

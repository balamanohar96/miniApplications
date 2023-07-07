import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/first">incriment,decriment</Link>
      <Link to="/second">friends names</Link>
      <Link to="/third">name search</Link>
      <Link to="/fourth">copy inputs</Link>
      <Link to="/fifth">To-Do</Link>
      {/* <Link to="/todo">To do app</Link> */}
    </div>
  );
}

export default Home;

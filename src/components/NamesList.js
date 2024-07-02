import React from "react";

let names = [
  "venky",
  "gopi",
  "sai",
  "bala",
  "kumar",
  "sasi",
  "vamsi",
  "sunny",
  "vishnu",
];

function Second() {
  return (
    <>
      <div className="para second">

        {names.map((each, i) => {
          return <li key={i}>{each}</li>;
        })}
      </div>
      {/* <Link to="/">Home</Link> */}
    </>
  );
}

export default Second;

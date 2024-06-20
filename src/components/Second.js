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
        <p>this is second page, it contains my friends names</p>

        {names.map((each, i) => {
          return <li key={i}>{each}</li>;
        })}
      </div>
      {/* <Link to="/">Home</Link> */}
    </>
  );
}

export default Second;

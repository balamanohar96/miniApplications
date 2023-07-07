import React from "react";

let names = [
  "Ambika",
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

        {names.map((each) => {
          return <li>{each}</li>;
        })}
      </div>
      {/* <Link to="/">Home</Link> */}
    </>
  );
}

export default Second;

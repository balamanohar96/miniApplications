import React, { useState } from "react";

let names = [
  "ambika",
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

function Third() {
  let [userinput, setUserinput] = useState("");

  let matchingArr = names.filter((each) => {
    return each.includes(userinput.toLowerCase());
  });

  let eventHandler = (e) => {
    setUserinput(e.target.value);
  };

  return (
    <>
      <div className="para third">
        <p>search by name</p>
        <input onChange={eventHandler} type="text"></input>
        {matchingArr.map((each, i) => {
          return <li key={i}>{each}</li>;
        })}
        {matchingArr.length === 0 && <h3>no matches</h3>}
      </div>
    </>
  );
}

export default Third;

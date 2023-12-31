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
  let eventHandler = (e) => {
    setUserinput(e.target.value);
  };
  let matchingArr = names.filter((each) => {
    return each.includes(userinput);
  });
  return (
    <>
      <div className="para third">
        <p>this is third page, it contains search application</p>
        <input onChange={eventHandler} type="text"></input>
        {matchingArr.map((each) => {
          return <li>{each}</li>;
        })}
        {matchingArr.length===0 && <h3>no matches</h3>}
      </div>
    </>
  );
}

export default Third;

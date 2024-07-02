import React, { useState } from "react";

function Fourth() {
  let [namesobj, setNamesobj] = useState({ firstname: "", secondname: "" });
  let [fullname, setFullname] = useState("");
  let [isShow, setIsShow] = useState(false);

  let gohandler = () => {
    if (namesobj.firstname.trim() !== "" && namesobj.secondname.trim() !== "") {
      setFullname(
        `your full name is ${namesobj.firstname} ${namesobj.secondname}`
      );
      setIsShow(true);
    }
  };
  return (
    <div className="first para">
      <p>when button is clicked, fullName is printed below</p>
      <input
        type="text"
        placeholder="first name"
        onChange={(e) => {
          setNamesobj({ ...namesobj, firstname: e.target.value });
          setIsShow(false);
        }}
      ></input>
      <input
        type="text"
        placeholder="second name"
        onChange={(e) => {
          setNamesobj({ ...namesobj, secondname: e.target.value });
          setIsShow(false);
        }}
      ></input>
      <button onClick={gohandler}>submit</button>
      {isShow && <h4>{fullname}</h4>}
    </div>
  );
}

export default Fourth;

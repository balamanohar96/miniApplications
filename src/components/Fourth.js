import React, { useState } from "react";

function Fourth() {
  let [namesobj, setNamesobj] = useState({ firstname: "", secondname: "" });
  let [fullname, setFullname] = useState("");

  let gohandler = () => {
    setFullname(
      `your full name is ${namesobj.firstname} ${namesobj.secondname}`
    );
  };
  return (
    <div className="first para">
      <p>
        This is fourth page, In this page, when "submit" button is clicked, fullName is printed below
      </p>
      <input
        type="text"
        placeholder="first name"
        onChange={(e) =>
          setNamesobj({ ...namesobj, firstname: e.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="second name"
        onChange={(e) =>
          setNamesobj({ ...namesobj, secondname: e.target.value })
        }
      ></input>
      <button onClick={gohandler}>submit</button>
      {namesobj.firstname && namesobj.secondname && <h4>{fullname}</h4>}
    </div>
  );
}

export default Fourth;

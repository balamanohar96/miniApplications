import React,{useState} from "react";

function First() {
    let [value,setValue]=useState(0); 
  return (
    <div className="para first">
        <h1>{value}</h1>
      <button onClick={()=> setValue(value+1)}>incriment</button>
      <button onClick={()=> setValue(value-1)}>decriment</button>
      <button onClick={()=> setValue(0)}>reset</button>
      
    </div>
  );
}

export default First;

import React, { useState } from "react";

function Fifth() {
  let [userInput, setUserInput] = useState("");
  let [todoList, setTodoList] = useState([]);

  let addTodo = () => {
    if(userInput.trim() !==""){
      let newObj={
        value:userInput,
        id: Math.floor(Math.random() * 1000),
        isCompleted:false
      }
      setTodoList([...todoList, newObj])
      setUserInput("");
    }
  };

  let changeHandler = (e) => {
    setUserInput(e.target.value);
  };

  let completed=(id)=>{
    let index=todoList.findIndex((each)=>( each.id === id))
    let newTodoList=[...todoList]
    newTodoList[index]={...newTodoList[index], isCompleted : true};
    setTodoList(newTodoList)
  }

  let deleted=(id)=>{
    let newTodoList=todoList.filter((each)=>( each.id !== id));
    setTodoList(newTodoList)
  }

  return (
    <div className="para second">
      <p>this is fifth page, it has To-Do list</p>
      <input type="text" onChange={changeHandler} value={userInput} placeholder="To-do"></input>
      <button onClick={addTodo} type="submit">
        Add
      </button>
      <ul>
        {todoList.map((eachTodo, id) => {
          return <li className={ eachTodo.isCompleted && "crossText"} key={id}>{eachTodo.value}
          <button onClick={()=>completed(eachTodo.id)}>completed</button>
          <button onClick={()=>deleted(eachTodo.id)}>delete</button>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Fifth;

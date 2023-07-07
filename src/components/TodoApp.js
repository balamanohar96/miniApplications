import React, { useState } from "react";

function TodoApp() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const AddTask = () => {
    if (userInput !== "") {
      let todoObj = {
        id: Math.floor(Math.random() * 1000),
        value: userInput,
        isCompleted: false,
      };

      setTodoList([...todoList, todoObj]);
      setUserInput("");
    }
  };

  const deletetask = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  const taskCompleted = (id) => {
    //let's find index of element
    const index = todoList.findIndex((obj) => obj.id === id);

    //copy array into new variable
    const newTodoList = [...todoList];

    //edit our element
    newTodoList[index] = { ...newTodoList[index], isCompleted: true };
    setTodoList(newTodoList);
  };

  return (
    <div className="para second">
      <input
        type="text"
        value={userInput}
        onChange={(e) => handleChange(e)}
        placeholder="Add todo here..."
      />
      <button onClick={AddTask}>Add</button>

      <ul>
        {todoList.map((t,index) => (
          <li className={t.isCompleted && "crossText"} key={index}>
            {t.value}
            <button className="completed" onClick={() => taskCompleted(t.id)}>
              Completed
            </button>
            <button className="delete" onClick={() => deletetask(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

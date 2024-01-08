import React, { useState } from "react";

const TodoForm = (props) => {
  const [inputVal, setinputVal] = useState("");
  const onChangeHandler = (event) => {
    setinputVal(event.target.value);
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    props.addTodo(inputVal);
    setinputVal("");
  }
  return (
    <form className="TodoForm" onSubmit={submitHandler}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task to do?"
        value={inputVal}
        onChange={onChangeHandler}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;

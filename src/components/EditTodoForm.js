import React, { useState } from "react";

const EditTodoForm = (props) => {
  const [inputValue, setinputValue]  = useState(props.task.task);
  const onChangeHandler = (event) => {
    setinputValue(event.target.value);
  };

  const updateHandler = (event) =>{
    event.preventDefault();
    props.editTodo(inputValue,props.task.id);
  }
  return (
    <form className="TodoForm" onSubmit={updateHandler}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task?"
        value={inputValue}
        onChange={onChangeHandler}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;

import {
  FontAwesomeIcon,
  fontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = (props) => {
  return (
    <div className="Todo">
      <p
      className={`${props.task.completed ? "completed" : ""}`}
        onClick={() => {
          props.toggleComplete(props.task.id)}}>
        {props.task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            props.editTodo(props.task.id);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            props.deleteTodo(props.task.id);
          }}
        />
      </div>
    </div>
  );
};

export default Todo;

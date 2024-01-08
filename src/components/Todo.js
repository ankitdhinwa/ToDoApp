import {FontAwesomeIcon, fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
const Todo = ()=>{
    return(<div className="Todo">
        <p>This is first task</p>
        <div>
            <FontAwesomeIcon icon = {faPenToSquare}/>
            <FontAwesomeIcon icon = {faTrash}/>
        </div>
    </div>)
}

export default Todo;
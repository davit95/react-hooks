import React, {useState} from 'react';

function TodoListItem({ todo, deleteTodo, updateTodo }) {
    const [showEditInput, setShowEditInput] = useState(false);
    const [todoName, setTodoName] = useState(todo.name);

    const handleShowEdit = () => {
        setShowEditInput((showEditInput) => !showEditInput)
    }

    const handleUpdateTodo = (todo, todoName) => {
        updateTodo(todo, todoName);
        handleShowEdit();
    }

    const handleUpdateTodoName = e => {
        setTodoName(e.target.value)
    }

    return (
        <div>
            <li>{todo.name}</li>
            {
                showEditInput &&
                <input
                    type="text"
                    value={todoName}
                    name="edit-todo"
                    onChange={handleUpdateTodoName}
                />
            }
            <button onClick={() => deleteTodo(todo.id)}>X</button>
            <button onClick={handleShowEdit}>{ showEditInput ? 'Close' : 'Edit' }</button>
            {
                showEditInput && <button onClick={() => handleUpdateTodo(todo, todoName)}>Update</button>
            }
        </div>
    );
}

export default TodoListItem;
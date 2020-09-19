import React, {useState} from "react";

function AddTodo({ todoList, setTodoList }) {
    const [todoName, setTodoName] = useState('')

    const handleNameChange = e => {
        setTodoName(e.target.value)
    }

    const addTodo = todo => {
        const newTodo = {
            id: Math.random(),
            name: todoName
        };
        setTodoList([...todoList, newTodo]);
        setTodoName('')
    }

    return (
        <>
            <input type="text" name="todoName" value={todoName} onChange={handleNameChange} />
            <button onClick={addTodo}>Add Todo</button>
        </>
    )
}

export default AddTodo;
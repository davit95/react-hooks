import React, {useState} from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

export default function TodoListComponent() {
    const [todoList, setTodoList] = useState([
        {id:1, name: 'todo1'},
        {id:2, name: 'todo2'}
    ]);

    return (
        <div className = "App" >
            <TodoList todoList={todoList} setTodoList={setTodoList} />
            <AddTodo todoList={todoList} setTodoList={setTodoList} />
        </div>
    );
}
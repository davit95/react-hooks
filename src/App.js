import React, {useState} from 'react';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
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

export default App;
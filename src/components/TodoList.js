import React from 'react'
import TodoListItem from "./TodoListItem";

export default function TodoList ({ todoList, setTodoList }) {

    const deleteTodo = id => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    const updateTodo = (todo, name) => {
        const editedList = todoList.map(item => item.id === todo.id ? {...item, name} : item)
        setTodoList(editedList)
    }

    return (
        <div>
            {
                todoList.map(todo => {
                    return <TodoListItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        updateTodo={updateTodo}
                    />
                })
            }
        </div>
    )
}
import React from 'react'

export default function Todo({todo,toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
        <div className="todo-item">
            <label key={todo.id} className={todo.complete&&"todo-completed"}>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                <span>{todo.name}  </span>
            </label>
        </div>
    )
}

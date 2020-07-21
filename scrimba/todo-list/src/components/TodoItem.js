import React from "react"

const TodoItem = ({isChecked,todoText="Placeholder text"})=>
  <label className="todo-item">
    <input type="checkbox" checked={isChecked?true:false} onClick={isChecked=!isChecked} />
    <p>{todoText}</p>
  </label>

  export default TodoItem
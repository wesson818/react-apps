import React from "react"


const TodoItem = ({id,isChecked,todoText="Placeholder text",handleChange})=>
  <label className="todo-item">
    <input type="checkbox" checked={isChecked} onChange={()=>handleChange(id)} />
    <p className={isChecked?"todo-completed":null}>{todoText}</p>
  </label>

  export default TodoItem
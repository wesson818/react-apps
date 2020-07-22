import React from 'react'

const Counter = ({color,count,countAdd,countMin})=>
<div>
    <h1 style={{color:color}}>{count}</h1>
    <button onClick={countAdd}>Add one</button> 
    <button onClick={countMin}>Min one</button>
</div>

export default Counter
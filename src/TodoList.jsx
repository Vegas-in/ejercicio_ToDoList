import React from 'react'

function TodoList(props) {
  return (
    <article>
        <label> <input type="checkbox" /> {props.task}</label>
        <br/>
        <button onClick={()=>props.delete()}>Borrar</button>
    </article>
  )
}

export default TodoList
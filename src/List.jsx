import React, { useState } from "react";
import TodoList from './TodoList'
import data from "./data";

function List() {

    const [list, setList] = useState(data);
    const [values, setValues] = useState({
        title: ""
      })

    const paintTask = () => {
        return list.map((item, index) => (<TodoList
            key={index}
            task={item.task}
            delete={() => deleteTask(index)}
        />
        ))
    };

    const createTask = (e) => {
        e.preventDefault();
        
        const task = e.target.title.value;
        console.log(task);
        
        const item = { task }; // Nuevo objeto destino
        setList([...list, item]); // Añade el nuevo destino a la lista
        e.target.reset()
    }
      

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setValues({
          ...values,
          [e.target.name]: e.target.value
      })
      }

    const clearTasks = () => setList([]);

    const resetTasks = () => setList(data);

    const deleteTask = (pos) => {
        alert("borrado"); 
   
        const remainingItems = list.filter((item, index) => index !== pos) // Devuelve todos menos la posicion que le pasamos
        setList(remainingItems)
     };

    return (
        <section>

            <form onSubmit={createTask}>
                <label htmlFor="name">Introduce nueva tarea pendiente</label>
                <br />
                <input type="text" name="title" onChange={handleChange}/>
                <br />
                {values.title ? <button type="submit">ADD</button> : null}
                <br />
            </form>
            <button onClick={clearTasks}>CLEAR</button>
            <br />
            <button onClick={resetTasks}>RESET</button> 

            <h3>Esta es la lista de tareas!!</h3>

            {paintTask()}

        </section>
    )
}

export default List
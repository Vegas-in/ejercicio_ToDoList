import React, { useState, useRef } from "react";
import TodoList from './TodoList'
import data from "./data";



function List() {

    const [list, setList] = useState(data);
    const [values, setValues] = useState({
        title: ""
      })
    const [timer, setTimer] = useState(null);
    const [addMsg, setAddMsg] = useState(false)

    const titleRef = useRef(null);

    const paintTask = () => {
        return list.map((item, index) => (<TodoList
            key={index}
            task={item.task}
            delete={() => deleteTask(index)}
        />
        ))
    };

    const paintMsg = () => {
        setAddMsg(true);
        setTimeout(() => {
            setAddMsg(false)
        }, 5000);
    }

    const createTask = (e) => {
        e.preventDefault();
        
        const task = e.target.title.value;

        const item = { task }; // Nuevo objeto destino
        setList([...list, item]); // Añade el nuevo destino a la lista

        
        paintMsg();


        e.target.reset();
    }
    
    let clearInput = () => {
        titleRef.current.value = "";
        setValues({title: ""})
    }; 

    const handleChange = (e) => {
        setValues({
          /* ...values, */
          [e.target.name]: e.target.value
        })
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(setTimeout(clearInput, 5000))
    };

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
                <input type="text" name="title" pattern=".{6,}" onChange={handleChange} ref={titleRef}/>
                <br />
                {addMsg == true ? <div >TAREA AÑADIDAAA!!</div> : <></>}
                <br />
                {values.title ? <button type="submit">ADD</button> : null}
                <br />
                {values.title.length > 0 && values.title.length < 6 ? <div>Error! introduzca al menos 6 caracteres please!</div> : <></>}
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
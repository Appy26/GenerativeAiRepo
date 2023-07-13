import React, { useState } from 'react'
import TodoList from './TodoList'
import styles from "./Styles.module.css"

const Todo = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])

    const AddTodo = () => {
        let obj = {
            id: Date.now(),
            title: text,
            status: false
        }
        setTodos([...todos, obj])
    }
    const HandleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const HandleToggle = (id) => {
        let arr = todos.filter((el, index) => {
            if (el.id === id) {
                el.status = !el.status
            }
            return el
        })
        setTodos(arr)
    }
    // console.log(todos)
    return (
        <div>
            <input type="text" placeholder="Todo✍" onChange={(e) => { setText(e.target.value) }} value={text} className={styles.input} />
            <br />
            <button onClick={AddTodo} className={styles.btn}>Add Todo</button>
            <TodoList todos={todos} HandleDelete={HandleDelete} HandleToggle={HandleToggle} />
        </div>
    )
}

export default Todo
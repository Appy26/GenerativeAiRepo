import React from 'react'
import styles from "./Styles.module.css"
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className={styles.main}>
            Hello Welcome to the Todo app , Please go to the todo section for adding a new todo
            <br />
            <button> <Link to="/todo"><p className={styles.links}>Go to Todo Page</p></Link> </button>
        </div>
    )
}

export default Homepage
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"

const Navbar = () => {
    const Links = [
        {
            to: "/", text: "Home"
        },
        {
            to: "/todo", text: "Todos"
        },
    ]
    return (
        <div>
            <div className={styles.nav}>
                {Links.map((el, index) => {
                    return <div key={index}>
                        <NavLink to={el.to}><p className={styles.li}>{el.text}</p></NavLink>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Navbar
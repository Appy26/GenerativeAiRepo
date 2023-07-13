import React from "react";
import styles from "./Styles.module.css";

const TodoList = ({ todos, HandleDelete, HandleToggle }) => {
    return (
        <div>
            {todos?.map((el, index) => {
                return (
                    <div key={index}>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                {el.title}
                                {"----->"}
                                {el.status ? "Completed" : "Not Completed"}
                            </li>
                            <button
                                onClick={() => {
                                    HandleToggle(el.id);
                                }}
                                className={styles.btn3}
                            >
                                Toggle
                            </button>
                            <button
                                onClick={() => {
                                    HandleDelete(el.id);
                                }}
                                className={styles.btn2}
                            >
                                Delete
                            </button>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
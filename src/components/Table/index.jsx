import React from "react";
import "./styles.module.css";
import Row from "./components/Row/index";
import styles from "./styles.module.css";

export default function Table({
  todoList,
  updateStatus,
  deleteTodo,
  updateTodo,
}) {
  return (
    <ul className={styles.todoWrap}>
      <li className={styles.todo}>
        <div className={styles.div1}></div>
        <div className={styles.div2}>Name</div>
        <div className={styles.div3}>Description</div>
        <div className={styles.div4}>Status</div>
        <div className={styles.div5}>Action</div>
      </li>
      {todoList.length
        ? todoList.map((el, i) => (
            <Row
              row={el}
              key={el.id}
              updateStatus={updateStatus}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))
        : null}
    </ul>
  );
}

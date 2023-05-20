
import React, { useState, useCallback } from "react";
import styles from "./style.module.css";
import StatusButton from "./StatusButton/index.jsx";
import Button from "../../../common/Button";
import Input from "../../../Form/Input";

export default function Row({ row, updateStatus, deleteTodo, updateTodo }) {
  const buttonSuccessClass = `${styles.button} btn btn-success`;
  const buttonUnSuccessClass = `${styles.button} btn btn-danger`;
  const padding = "5px 10px 5px 10px";

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(row.title);
  const [description, setDescription] = useState(row.description);

  const toggleEdit = useCallback(() => {
    setEdit((prevEdit) => !prevEdit);
  }, []);

  const update = () => {
    updateTodo({ ...row, title, description });
    setEdit((prevEdit) => !prevEdit);
  };

  const handleTitleChange = (value) => {
    setTitle(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <li className={styles.todo}>
      <div className={styles.div1}>
        <input
          type="checkbox"
          onChange={() => updateStatus(row)}
          checked={row.completed}
        />
      </div>
      <div className={styles.div2}>
        {edit ? (
          <Input
            value={title}
            style={{ width: "100%" }}
            createTitle={handleTitleChange}
          />
        ) : (
          row.title
        )}
      </div>
      <div className={styles.div3}>
        {edit ? (
          <Input
            value={description}
            style={{ width: "100%" }}
            createTitle={handleDescriptionChange}
          />
        ) : (
          row.description
        )}
      </div>
      <div className={styles.div4}>
        <StatusButton
          color={row.completed ? "#54A655" : "#C9424A"}
          text={row.completed ? "Completed" : "Pending"}
          classN={row.completed ? buttonSuccessClass : buttonUnSuccessClass}
          padding={padding}
        />
      </div>
      <div className={styles.div5}>
        <Button
          text={edit ? "Save" : "Edit"}
          action={edit ? update : toggleEdit}
          padding="5px 10px 5px 10px"
          color="#3772F2"
          classN={"btn btn-primary"}
        />

        <Button
          text="Delete"
          action={() => deleteTodo(row)}
          padding="5px 10px 5px 10px"
          color="#C9434A"
          classN={"btn btn-danger"}
        />
      </div>
    </li>
  );
}

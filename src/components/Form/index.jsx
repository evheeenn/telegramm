import React, { useState } from "react";
import Input from "./Input";
import Button from "../common/Button";
import styles from "./styles.module.css";

export default function Form({ createTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0); // Додайте стан для id

  const updateTitle = (value) => {
    setTitle(value);
  };

  const updateDescription = (value) => {
    setDescription(value);
  };

  const create = () => {
    setTitle("");
    setDescription("");
    createTodo({
      id: id.toString(), // Конвертуйте id у строковий формат
      title,
      description,
      completed: false,
    });
    setId((prevId) => prevId + 1); // Оновіть id для наступного елементу
  };

  const buttonClasses = `btn btn-primary`;

  return (
    <div className={styles.formWrapper}>
      <Input createTitle={updateTitle} value={title} text="Todo Title" />
      <Input
        createTitle={updateDescription}
        value={description}
        text="Description"
      />
      <Button
        action={create}
        text={"Create Todo"}
        padding={"10px"}
        classN={buttonClasses}
      />
    </div>
  );
}

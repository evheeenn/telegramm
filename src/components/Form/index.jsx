import React, { useState } from "react";
import Input from "./Input";
import Button from "../common/Button";
import styles from "./styles.module.css";

export default function Form({ createTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updateTitle = (value) => {
    setTitle(value);
  };

  const updateDescription = (value) => {
    setDescription(value);
  };

  const create = () => {
    setTitle("");
    setDescription("");
    createTodo(title, description);
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

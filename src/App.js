import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/index";
import API from "./services/api.js";
import Form from "./components/Form";
import Button from "./components/common/Button";

function App() {
  const [state, setState] = useState([]);

  const [renderData, setRenderData] = useState([]);

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    API.getTodos(setState).then((res) => setState([...res]));
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setRenderData([...state]);
    } else if (filter === "Completed") {
      const completed = state.filter((el) => el.completed);
      setRenderData([...completed]);
    } else if (filter === "Pending") {
      const pending = state.filter((el) => !el.completed);
      setRenderData([...pending]);
    }
  }, [state, filter]);

  const updateStatus = (element) => {
    API.updateStatus(element).then((res) => {
      const stateToUpdate = state.reduce((acc, el) => {
        if (el.id === element.id) {
          acc.push(res);
          return acc;
        } else {
          acc.push(el);
          return acc;
        }
      }, []);
      setState([...stateToUpdate]);
    });
  };

  const createTodo = (title, description) => {
    API.createTodo(title, description).then((res) => {
      setState([...state, res]);
    });
  };

  const deleteTodo = (todo) => {
    API.deleteTodo(todo).then(() => {
      const updatedState = state.filter((el) => el.id !== todo.id);
      setState(updatedState);
    });
  };

  const updateTodo = (element) => {
    API.updateTodo(element).then((res) => {
      const stateToUpdate = state.reduce((acc, el) => {
        if (el.id === element.id) {
          acc.push(res);
          return acc;
        } else {
          acc.push(el);
          return acc;
        }
      }, []);
      setState([...stateToUpdate]);
    });
  };

  const changeFilter = (e) => {
    setFilter(e.target.innerText);
  };

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <Form createTodo={createTodo} />
      <div className="filter-wrapper">
        <Button
          text={"All"}
          action={changeFilter}
          padding={"10px 57px 10px 57px"}
          borderRadius={"14px"}
          classN={"btn btn-primary"}
        />
        <Button
          color="#E94025"
          text={"Pending"}
          action={changeFilter}
          padding={"10px 50px 10px 50px"}
          classN={"btn btn-danger"}
        />
        <Button
          color="#719B43"
          text={"Completed"}
          action={changeFilter}
          padding={"10px 70px 10px 70px"}
          classN={"btn btn-success"}
        />
      </div>
      <Table
        todoList={renderData}
        updateStatus={updateStatus}
        createTodo={createTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;

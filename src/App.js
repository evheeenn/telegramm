import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table/index";
import Form from "./components/Form";
import Button from "./components/common/Button";

function App() {
  const [state, setState] = useState([]);

  const [renderData, setRenderData] = useState([]);

  const [filter, setFilter] = useState("All");

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
    const stateToUpdate = state.map((el) => {
      if (el.id === element.id) {
        return { ...el, completed: !el.completed };
      }
      return el;
    });
    setState(stateToUpdate);
  };

  const createTodo = (todo) => {
    setState([...state, todo]);
  };

  const deleteTodo = (todo) => {
    const updatedState = state.filter((el) => el.id !== todo.id);
    setState(updatedState);
  };

  const updateTodo = (element) => {
    const updatedState = state.map((el) => {
      if (el.id === element.id) {
        return {
          ...el,
          title: element.title,
          description: element.description,
        };
      }
      return el;
    });
    setState(updatedState);
  };

  const changeFilter = (e) => {
    setFilter(e.target.innerText);
  };

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <Form createTodo={createTodo} />
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

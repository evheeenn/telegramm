export default {
  getTodos: async (setState) => {
    return await fetch("https://61498bf2035b3600175ba32f.mockapi.io/todo").then(
      (res) => res.json()
    );
  },

  updateStatus: async (row) => {
    return await fetch(
      `https://61498bf2035b3600175ba32f.mockapi.io/todo/${row.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ completed: !row.completed }),
      }
    ).then((res) => res.json());
  },

  createTodo: async (title, description) => {
    return await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        completed: false,
      }),
    }).then((res) => res.json());
  },

  deleteTodo: async (row) => {
    await fetch(`https://61498bf2035b3600175ba32f.mockapi.io/todo/${row.id}`, {
      method: "DELETE",
    })
      .then(fetch("https://61498bf2035b3600175ba32f.mockapi.io/todo"))
      .then((res) => res.json());
  },

  updateTodo: async (row) => {
    return await fetch(
      `https://61498bf2035b3600175ba32f.mockapi.io/todo/${row.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...row }),
      }
    ).then((res) => res.json());
  },
};

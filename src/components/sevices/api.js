export const API = {
  getUsers: async () => {
    return await fetch(
      "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users"
    ).then((res) => res.json());
  },

  registration: async (newUser) => {
    return await fetch(
      "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users",
      {
        method: "POST",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(newUser),
      }
    ).then((res) => res.json());
  },

  updateStatus: (user) => {
    return fetch(
      "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/" +
        user.id
    )
      .then((res) => res.json())
      .then((data) => {
        data.status = true;
        return fetch(
          "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/" +
            data.id,
          {
            method: "PUT",
            headers: { "content-type": "application/json; charset=utf-8" },
            body: JSON.stringify(data),
          }
        );
      });
  },
};

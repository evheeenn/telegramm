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

  getProducts: async () => {
    try {
      const response = await fetch(
        "https://634e9f834af5fdff3a625f84.mockapi.io/products"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const acc = data.reduce((acc, el) => {
        if (acc[el.category]) {
          acc[el.category].push(el);
        } else {
          acc[el.category] = [];
          acc[el.category].push(el);
        }
        return acc;
      }, {});
      return acc;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  updateStatusWhenLogout: async (user) => {
    await fetch(
      "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/" +
        user.id
    )
      .then((res) => res.json())
      .then((data) => {
        data.status = false;
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

  updateProducts: async (user, product) => {
    const existingItem = user.shoppingCart.find(
      (item) => item.id === product.id
    );
    if (existingItem) {
      existingItem.count++;
    } else {
      product.count = 1;
      user.shoppingCart.push(product);
    }

    fetch(
      `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${user.id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((res) => localStorage.setItem("user", JSON.stringify(res)));
  },
};

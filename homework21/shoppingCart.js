let user = JSON.parse(localStorage.getItem("user"));

fetch(
  `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${user.id}`
)
  .then((res) => res.json())
  .then((res) => $("#product-count p").text(res.shoppingCart.length));

let updateProductCount = () => {
  fetch(
    `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${user.id}`
  )
    .then((res) => res.json())
    .then((res) => $("#product-count p").text(res.shoppingCart.length));
};

let updateStatus = (user) => {
  fetch(
    "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/" + user.id
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
};

if (user) {
  $("#logout-p").css({
    display: "block",
  });

  $("#logout-p").on("click", () => {
    updateStatus(user);
    localStorage.removeItem("user");
    setTimeout(() => {
      window.location.href = "./account.html";
    }, 1000);
  });
}

$("#cabinet").text(user.name);
$("#cabinet").attr("href", "./account.html");

let renderCart = (data) => {
  let sum = 0;

  $.each(data, function () {
    let obj = this;
    let productRow = $("<div>").addClass("row product");
    let td1 = $("<div>").addClass("td1 pr-info");
    let img = $("<img>")
      .attr("src", `./img/images/products/${this.img}.png`)
      .attr("width", "127");
    let prodName = $("<p>").addClass("prod-name").text(this.title);
    td1.append(img, prodName);
    let td2 = $("<div>").addClass("td2 pr-info");
    const priceValue =
      this.price - (this.price * parseFloat(this.salePercent)) / 100;
    let td3 = $("<div>").addClass("td3 pr-info");

    let td4 = $("<div>").addClass("td4 pr-info");
    let input = $("<input>")
      .attr("type", "number")
      .attr("min", "1")
      .attr("data-id", this.id)
      .addClass("quantity");
    input.val(this.count);

    td4.append(input);
    let td5 = $("<div>").addClass("td5 pr-info");

    if (this.sale) {
      let sale = $("<p>")
        .addClass("sale")
        .text("-" + this.salePercent + "%");
      let price = $("<p>")
        .addClass("price")
        .text("$" + priceValue);
      let total = $("<p>")
        .addClass("total")
        .text("$" + priceValue);

      input.on("input", () => {
        let quantity = input.val();
        let price = this.sale ? priceValue : this.price;
        let newTotal = price * quantity;
        total.text("$" + newTotal);
        sum = 0;
        $(".total").each(function () {
          sum += parseFloat($(this).text().replace("$", ""));
        });
        $(".sum-price").text("$" + sum);

        const productId = input.attr("data-id");
        const user = JSON.parse(localStorage.getItem("user"));

        fetch(
          `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${user.id}`
        )
          .then((res) => res.json())
          .then((res) => {
            const shoppingCart = res.shoppingCart;
            const product = shoppingCart.find((item) => item.id === productId);
            if (product) {
              product.count = parseInt(quantity); // Update the count value
            }
            return fetch(
              `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${user.id}`,
              {
                method: "PUT",
                headers: { "content-type": "application/json; charset=utf-8" },
                body: JSON.stringify(res),
              }
            );
          })
          .then(() => {
            updateProductCount();
          })
          .catch((error) => {
            console.log(error);
          });
      });

      td2.append(price);
      td3.append(sale);
      td5.append(total);

      sum = sum + priceValue;
    } else {
      let noSale = $("<p>").text("-");
      let price = $("<p>")
        .addClass("price")
        .text("$" + this.price);
      td2.append(price);
      let total = $("<p>")
        .addClass("total")
        .text("$" + this.price);

      input.on("input", () => {
        let quantity = input.val();
        let price = this.sale ? priceValue : this.price;
        let newTotal = price * quantity;
        total.text("$" + newTotal);
        sum = 0;
        $(".total").each(function () {
          sum += parseFloat($(this).text().replace("$", ""));
        });
        $(".sum-price").text("$" + sum);

        const productId = input.attr("data-id");
        const user = JSON.parse(localStorage.getItem("user"));

        fetch(
          `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${user.id}`
        )
          .then((res) => res.json())
          .then((res) => {
            const shoppingCart = res.shoppingCart;
            const product = shoppingCart.find((item) => item.id === productId);
            if (product) {
              product.count = parseInt(quantity); // Update the count value
            }
            return fetch(
              `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${user.id}`,
              {
                method: "PUT",
                headers: { "content-type": "application/json; charset=utf-8" },
                body: JSON.stringify(res),
              }
            );
          })
          .then(() => {
            updateProductCount();
          })
          .catch((error) => {
            console.log(error);
          });
      });

      td2.append(price);
      td3.append(noSale);
      td5.append(total);

      sum = sum + this.price;
    }

    let td6 = $("<div>").addClass("td6 pr-info");

    let deleteImg = $("<img>")
      .attr("src", "./img/images/delete.png")
      .attr("width", "43");
    td6.append(deleteImg);

    deleteImg.on("click", function () {
      const productId = input.attr("data-id");
      user.shoppingCart = user.shoppingCart.filter(
        (item) => item.id !== productId
      );
      localStorage.setItem("user", JSON.stringify(user));
      $(this).closest(".product").remove();
      updateProductCount();
      sum -= parseFloat(
        $(this).closest(".product").find(".total").text().replace("$", "")
      );
      $(".sum-price").text("$" + sum);

      const userId = user.id;
      const shoppingCart = user.shoppingCart;

      fetch(
        `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${userId}`
      )
        .then((res) => res.json())
        .then((res) => {
          res.shoppingCart = shoppingCart;

          return fetch(
            `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${userId}`,
            {
              method: "PUT",
              headers: { "content-type": "application/json; charset=utf-8" },
              body: JSON.stringify(res),
            }
          );
        })
        .then(() => {
          updateProductCount();
        })
        .catch((error) => {
          console.log(error);
        });
    });

    productRow.append(td1, td2, td3, td4, td5, td6);

    $(".table").append(productRow);
    $(".sum-price").text("$" + sum);

    $('button[type="submit"]').on("click", (e) => {
      e.preventDefault();

      fetch(
        "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/" +
          user.id
      )
        .then((res) => res.json())
        .then((res) => {
          const cartItems = res.shoppingCart;

          const orderPromises = cartItems.map((cartItem) => {
            const productId = cartItem.id;
            const count = cartItem.count;
            const product = cartItem;

            const existingOrder = res.orders.find(
              (order) => order.id === productId
            );

            if (existingOrder) {
              existingOrder.count += count;
            } else {
              const newOrder = { ...product, count };
              res.orders.push(newOrder);
            }

            return fetch(
              "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/orders",
              {
                method: "POST",
                headers: { "content-type": "application/json; charset=utf-8" },
                body: JSON.stringify({
                  userId: user.id,
                  productId: productId,
                  count: count,
                }),
              }
            );
          });

          return Promise.all(orderPromises).then(() => {
            res.shoppingCart = [];

            return fetch(
              "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/" +
                res.id,
              {
                method: "PUT",
                headers: { "content-type": "application/json; charset=utf-8" },
                body: JSON.stringify(res),
              }
            );
          });
        })
        .then(() => {
          setTimeout(() => {
            window.location.href = "./account.html";
          }, 1000);
        });
    });
  });
};

let userApi;

fetch(
  "https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/" + user.id
)
  .then((res) => res.json())
  .then((res) => renderCart(res.shoppingCart));

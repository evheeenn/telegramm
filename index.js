let defaultForm = document.querySelector("#default-form");
let errorBanner = document.querySelector("#banner");
let closeBanner = document.querySelector("#cross");
closeBanner.addEventListener("click", () => {
  errorBanner.style.display = "none";
});
let checkName = [];

fetch("https://63693f7228cd16bba71904e4.mockapi.io/heroes")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((el) => {
      checkName.push(el.name.toUpperCase());
    });
  });

defaultForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newName = document.querySelector("#def-name");
  let newOption = document.querySelector(".def-option:checked");
  let newCheckbox = document.querySelector("#favourite-hero");
  let heroObject = {};

  heroObject.name = newName.value;
  heroObject.comics = newOption.value;

  if (newCheckbox.checked) {
    heroObject.favourite = true;
  } else {
    heroObject.favourite = false;
  }

  if (checkName.includes(newName.value.toUpperCase())) {
    errorBіanner.style.display = "flex";
  } else {
    fetch("https://63693f7228cd16bba71904e4.mockapi.io/heroes", {
      method: "POST",
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify(heroObject),
    }).then(() => {
      renderDataFromBase([heroObject]);
    });
  }
});

let removeHero = (el) => {
  console.log(el);
  let formToRemove = document.querySelector(`form[data-id="${el.id}"]`);
  formToRemove.remove();
};

let deleteHero = (id) => {
  console.log("OK");
  fetch("https://63693f7228cd16bba71904e4.mockapi.io/heroes/" + id, {
    method: "DELETE",
  })
    .then((res) => (res.ok ? res.json() : console.error(res.status)))
    .then((res) => removeHero(res));
};

let defName = document.querySelector("#def-name");

let dataWrapper = document.querySelector("#update-forms-wrapper");

let renderDataFromBase = (data) => {
  data.forEach((el) => {
    let form = document.createElement("form");
    form.classList.add("update-forms");
    form.dataset.id = el.id;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    let fieldsetFirst = document.createElement("fieldset");

    let labelForName = document.createElement("label");
    labelForName.setAttribute("for", "name");
    labelForName.textContent = "Name:";

    let name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("name", "name");
    name.value = el.name;
    checkName.push(el.name);

    let fieldsetSecond = document.createElement("fieldset");

    let labelForSelect = document.createElement("label");
    labelForSelect.setAttribute("for", "select");
    labelForSelect.textContent = "Comics";

    let select = document.createElement("select");
    select.setAttribute("name", "select");

    if (el["comics"] === "DC") {
      let option = document.createElement("option");
      option.classList.add("options");
      option.setAttribute("value", "DC");
      option.textContent = "DC";
      select.appendChild(option);
      let optionTwo = document.createElement("option");
      optionTwo.classList.add("options");
      optionTwo.setAttribute("value", "Marvel");
      optionTwo.textContent = "Marvel";
      select.appendChild(optionTwo);
    } else {
      let option = document.createElement("option");
      option.setAttribute("value", "Marvel");
      option.textContent = "Marvel";
      select.appendChild(option);
      option.classList.add("options");

      let optionTwo = document.createElement("option");
      optionTwo.classList.add("options");
      optionTwo.setAttribute("value", "DC");
      optionTwo.textContent = "DC";
      select.appendChild(optionTwo);
    }

    let fieldsetThird = document.createElement("fieldset");

    let labelForCheckbox = document.createElement("label");
    labelForCheckbox.setAttribute("for", "favourite");
    labelForCheckbox.textContent = "Favourite:";

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "favourite");

    if (el["favourite"]) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }

    let deleteEl = document.createElement("input");
    deleteEl.classList.add("delete");
    deleteEl.setAttribute("type", "submit");
    deleteEl.setAttribute("value", "Delete");

    let updateEl = document.createElement("input");
    updateEl.classList.add("update");
    updateEl.setAttribute("type", "submit");
    updateEl.setAttribute("value", "Update");

    dataWrapper.appendChild(form);

    let updateHero = (el, id) => {
      let option = form.querySelector(".options:checked");

      el.name = name.value;
      el.comics = option.value;

      if (checkbox.checked) {
        el.favourite = true;
      } else {
        el.favourite = false;
      }

      fetch("https://63693f7228cd16bba71904e4.mockapi.io/heroes/" + id, {
        method: "PUT",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(el),
      });
    };

    deleteEl.addEventListener("click", (event) => {
      deleteHero(el.id);
    });

    updateEl.addEventListener("click", () => {
      updateHero(el, el.id);
    });

    form.appendChild(fieldsetFirst);
    form.appendChild(fieldsetSecond);
    form.appendChild(fieldsetThird);
    form.appendChild(deleteEl);
    form.appendChild(updateEl);

    fieldsetFirst.appendChild(labelForName);
    fieldsetFirst.appendChild(name);

    fieldsetSecond.appendChild(labelForSelect);
    fieldsetSecond.appendChild(select);

    fieldsetThird.appendChild(labelForCheckbox);
    fieldsetThird.appendChild(checkbox);
  });
};

let getDataFromBase = () => {
  fetch("https://63693f7228cd16bba71904e4.mockapi.io/heroes")
    .then((res) => res.json())
    .then((res) => renderDataFromBase(res));
};

getDataFromBase();

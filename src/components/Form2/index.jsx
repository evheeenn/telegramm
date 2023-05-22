import React, { useState } from "react";
import Button from "../Button";
import Error from "../Error";
import { API } from "../sevices/api.js";

export default function Form({ h1, h4 }) {
  const buttonClass = "btn btn-danger";

  class User {
    constructor(name, email, password) {
      this.orders = [];
      this.shoppingCart = [];
      this.name = name;
      this.email = email;
      this.password = password;
      this.status = true;
    }
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const nameValue = (event) => {
    setName(event.target.value);
  };

  const emailValue = (event) => {
    setEmail(event.target.value);
  };

  const passwordValue = (event) => {
    setPassword(event.target.value);
  };

  const verifPasswordValue = (event) => {
    setVerifPassword(event.target.value);
  };

  const registration = async (e, name, email, password) => {
    e.preventDefault();

    const handleRegistration = (user) => {
      localStorage.setItem("user", JSON.stringify(user));
    };

    const userCheck = await API.getUsers();

    const userExist = userCheck.some((user) => user.email === email);
    if (userExist) {
      setErrorText(`User with email ${email} already exists!`);
      setErrorDisplay("flex");
    } else if (password !== verifPassword) {
      setErrorText("Password does not match.");
      setErrorDisplay("flex");
    } else {
      e.target.reset();
      setErrorText("");
      setErrorDisplay("none");
      const newUser = new User(name, email, password);
      return API.registration(newUser).then((res) => handleRegistration(res));
    }
  };

  return (
    <form onSubmit={(e) => registration(e, name, email, password)}>
      <h1>{h1}</h1>
      <h4>{h4}</h4>
      <Error display={errorDisplay} text={errorText} />
      <input
        onChange={nameValue}
        type={"text"}
        className={"form-control"}
        placeholder={"Full name"}
        style={{
          marginTop: "37px",
          border: "2px solid #a0a0a0",
          width: "95%",
          height: "47px",
        }}
        required
      ></input>
      <input
        onChange={emailValue}
        type={"email"}
        className={"form-control"}
        placeholder={"Email Address"}
        style={{
          marginTop: "17px",
          border: "2px solid #a0a0a0",
          width: "95%",
          height: "47px",
        }}
        required
      ></input>
      <input
        onChange={passwordValue}
        type={"password"}
        className={"form-control"}
        placeholder={"Password"}
        style={{
          marginTop: "17px",
          border: "2px solid #a0a0a0",
          width: "95%",
          height: "47px",
        }}
        required
      ></input>
      <input
        onChange={verifPasswordValue}
        type={"password"}
        className={"form-control"}
        placeholder={"Verify password"}
        style={{
          marginTop: "17px",
          border: "2px solid #a0a0a0",
          width: "95%",
          height: "47px",
        }}
        required
      ></input>
      <Button
        classProp={buttonClass}
        text={"Create account"}
        style={{
          width: "207px",
          marginTop: "17px",
          borderRadius: "25px",
          backgroundColor: "#d73a3d",
          fontWeight: "500",
        }}
      />
    </form>
  );
}

import React from "react";
import Button from "../Button";
import Error from "../Error";
import { useState } from "react";
import { API } from "../sevices/api.js";

export default function Form({ h1, h4, type, placeholder }) {
  const buttonClass = "btn btn-danger";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userExisting, setUserExist] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const emailValue = (event) => {
    setEmail(event.target.value);
  };

  const passwordValue = (event) => {
    setPassword(event.target.value);
  };

  const validation = async (e, inputEmail, inputPassword) => {
    e.preventDefault();
    let usersData = await API.getUsers();
    let userExist = false;

    usersData.forEach((el) => {
      if (el.email === inputEmail) {
        userExist = true;
        setUserExist(true);
        if (el.password === inputPassword) {
          localStorage.setItem("user", JSON.stringify(el));
          API.updateStatus(el);
          e.target.reset();
          setErrorText("");
          setErrorDisplay("none");
        } else {
          setErrorText("Invalid password.");
          setErrorDisplay("flex");
        }
      }
    });

    if (!userExist) {
      setUserExist(false);
      setErrorText("Invalid email.");
      setErrorDisplay("flex");
    }
  };

  return (
    <form onSubmit={(e) => validation(e, email, password)}>
      <h1>{h1}</h1>
      <h4>{h4}</h4>
      <Error display={errorDisplay} text={errorText} />
      <input
        onChange={emailValue}
        type={"email"}
        className={"form-control"}
        placeholder={"Email Address"}
        style={{
          marginTop: "37px",
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
      <Button
        classProp={buttonClass}
        text={"Sign In"}
        style={{
          width: "117px",
          marginTop: "17px",
          borderRadius: "25px",
          fontWeight: "500",
        }}
      />
    </form>
  );
}

import React, { useState } from "react";
import CustomizedButton from "../Button";
import Error from "../Error";
import { API } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField } from "@mui/material";

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

  const navigate = useNavigate();

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

    const userCheck = await API.getUsers();

    const userExist = userCheck.some((user) => user.email === email);
    if (userExist) {
      setErrorText(`User with email ${email} already exists!`);
      setErrorDisplay("flex");
    } else if (password !== verifPassword) {
      setErrorText("Password does not match.");
      setErrorDisplay("flex");
    } else {
      const newUser = new User(name, email, password);
      await API.registration(newUser).then((res) =>
        localStorage.setItem("user", JSON.stringify(res))
      );
      e.target.reset();
      setErrorText("");
      setErrorDisplay("none");
      navigate("/");
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={(e) => registration(e, name, email, password)}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "2.5rem",
        }}
      >
        {h1}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: "1.5rem",
          marginTop: "7px",
        }}
      >
        {h4}
      </Typography>
      <Error display={errorDisplay} text={errorText} />

      <TextField
        onChange={nameValue}
        type={"name"}
        id="outlined-basic"
        label="Full name"
        variant="outlined"
        required
        sx={{
          marginTop: "27px",
          width: "95%",
        }}
      />

      <TextField
        onChange={emailValue}
        type={"email"}
        id="outlined-basic"
        label="Email Address"
        variant="outlined"
        required
        sx={{
          marginTop: "17px",
          width: "95%",
        }}
      />

      <TextField
        onChange={passwordValue}
        type={"password"}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        required
        sx={{
          marginTop: "17px",
          width: "95%",
        }}
      />

      <TextField
        onChange={verifPasswordValue}
        type={"password"}
        id="outlined-basic"
        label="Verify password"
        variant="outlined"
        required
        sx={{
          marginTop: "17px",
          width: "95%",
        }}
      />

      <CustomizedButton
        text={"Create account"}
        style={{
          width: "207px",
          marginTop: "17px",
          borderRadius: "25px",
          border: "none",
          backgroundColor: "#d73a3d",
          fontWeight: "500",
        }}
      />
    </Box>
  );
}
import React from "react";
import CustomizedButton from "../Button";
import Error from "../Error";
import { useState, useEffect } from "react";
import { API } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserThunk,
  getUsersForValidationThunk,
} from "../../../../store/actions";

export default function Form({ h1, h4, type, placeholder }) {
  const usersData = useSelector((state) => state.usersForValidation);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userExisting, setUserExist] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const emailValue = (event) => {
    setEmail(event.target.value);
  };

  const passwordValue = (event) => {
    setPassword(event.target.value);
  };

  const validation = async (e, inputEmail, inputPassword) => {
    e.preventDefault();
    let userExist = false;

    usersData.forEach((el) => {
      if (el.email === inputEmail) {
        userExist = true;
        setUserExist(true);
        if (el.password === inputPassword) {
          localStorage.setItem("user", JSON.stringify(el.id));
          dispatch(getUserThunk(el.id));
          e.target.reset();
          setErrorText("");
          setErrorDisplay("none");
          navigate("/");
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
    <Box component={"form"} onSubmit={(e) => validation(e, email, password)}>
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
        onChange={emailValue}
        type={"email"}
        id="outlined-basic"
        label="Email Address"
        variant="outlined"
        required
        sx={{
          marginTop: "27px",
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

      <CustomizedButton
        text={"Sign In"}
        style={{
          width: "117px",
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

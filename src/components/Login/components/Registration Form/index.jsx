import React from "react";
import { Formik } from "formik";
import {
  Typography,
  Alert,
  TextField,
  Box,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getUsersForValidationThunk,
  registrationThunk,
} from "../../../../store/actions";
import { useNavigate } from "react-router-dom";
import CustomizedButton from "../Button";

export default function RegistrationForm({ h1, h4 }) {
  const userCheck = useSelector((state) => state.usersForValidation);
  const dispatch = useDispatch();

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

  const [errorText, setErrorText] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const submitRegistration = async (values) => {
    const userExist = userCheck.some((user) => user.email === values.email);
    if (userExist) {
      setErrorText(`User with email ${values.email} already exists!`);
      setErrorDisplay("flex");
    } else if (values.password !== values.verifyPassword) {
      setErrorText("Password does not match.");
      setErrorDisplay("flex");
    } else {
      const newUser = new User(values.name, values.email, values.password);
      await dispatch(registrationThunk(newUser));
      setErrorText("");
      setErrorDisplay("none");
      navigate("/");
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", verifyPassword: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        submitRegistration(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Box component={"form"} onSubmit={handleSubmit}>
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
          <Alert
            severity={"error"}
            sx={{ width: "95%", display: errorDisplay, marginTop: "27px" }}
          >
            {errorText}
          </Alert>
          <TextField
            type="name"
            name="name"
            label="Full name"
            variant="outlined"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            sx={{
              marginTop: "27px",
              width: "95%",
            }}
          />
          <TextField
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            label="Email Address"
            variant="outlined"
            required
            sx={{
              marginTop: "27px",
              width: "95%",
            }}
          />
          <TextField
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            label="Password"
            variant="outlined"
            required
            sx={{
              marginTop: "27px",
              width: "95%",
            }}
          />
          <TextField
            type="password"
            name="verifyPassword"
            label="Verify password"
            variant="outlined"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.verifyPassword}
            sx={{
              marginTop: "27px",
              width: "95%",
            }}
          />
          <CustomizedButton
            type={"submit"}
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
      )}
    </Formik>
  );
}

import React from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserThunk } from "../../../../store/actions";
import { Box, Typography, TextField, Alert } from "@mui/material";
import CustomizedButton from "../Button";

export default function LoginForm({ h1, h4 }) {
  const usersData = useSelector((state) => state.usersForValidation);
  const [errorText, setErrorText] = useState("");
  const [errorDisplay, setErrorDisplay] = useState("none");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitValidation = (values) => {
    let userExist = false;
    usersData.forEach((el) => {
      if (el.email === values.email) {
        console.log(el.email, values.email);
        userExist = true;
        if (el.password === values.password) {
          console.log(el.email, values.email);
          setErrorText("");
          setErrorDisplay("none");
          localStorage.setItem("user", JSON.stringify(el.id));
          dispatch(getUserThunk(el.id));
          navigate("/");
        } else {
          setErrorText("Invalid password.");
          setErrorDisplay("flex");
        }
      }
    });

    if (!userExist) {
      setErrorText("Invalid email.");
      setErrorDisplay("flex");
    }
  };

  console.log(usersData);

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting }) => {
          submitValidation(values);
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
              type="email"
              name="email"
              label="Email Address"
              variant="outlined"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              required
              sx={{
                marginTop: "27px",
                width: "95%",
              }}
            />
            {errors.email && touched.email && errors.email}
            <TextField
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              required
              sx={{
                marginTop: "17px",
                width: "95%",
              }}
            />
            {errors.password && touched.password && errors.password}
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
              type="submit"
              disabled={isSubmitting}
              Submit
            />
          </Box>
        )}
      </Formik>
    </>
  );
}

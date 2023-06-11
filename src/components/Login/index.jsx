import React from "react";
import { useEffect } from "react";
import Header from "./../Header";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { getUsersForValidationThunk } from "../../store/actions";
import LoginForm from "./components/Login Form";
import RegistrationForm from "./components/Registration Form";

export default function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersForValidationThunk());
  }, []);
  
  return (
    <Box>
      <Header />
      <Box
        sx={{
          marginTop: "57px",
          height: "57.5vh",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            paddingLeft: "37px",
            borderRight: "3px solid #bbbbbb",
          }}
        >
          <LoginForm h1={"Secure Sign In"} h4={"For current customers"}/>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            paddingLeft: "37px",
          }}
        >
          <RegistrationForm h1={"Quick Registration"} h4={"For new customers"} />
        </Box>
      </Box>
    </Box>
  );
}

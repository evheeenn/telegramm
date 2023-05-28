import React from "react";
import Header from "./../Header";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import { Box } from "@mui/material";

export default function Login() {
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
          <Form h1={"Secure Sign In"} h4={"For current customers"} />
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            paddingLeft: "37px",
          }}
        >
          <Form2 h1={"Quick Registration"} h4={"For new customers"} />
        </Box>
      </Box>
    </Box>
  );
}

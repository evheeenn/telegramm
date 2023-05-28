import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";
import cart from "./img/shopping-cart.png";
import { Link } from "react-router-dom";
import { API } from "../services/api";
import { Box, Typography } from "@mui/material";

export default function Header({ count, action, isLogin, setUserLogin }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userLog = JSON.parse(localStorage.getItem("user"));
    if (userLog) {
      setUserLogin(true);
      setUser(userLog);
    }
  }, [isLogin]);

  const logOut = async () => {
    await API.updateStatusWhenLogout(user);
    localStorage.removeItem("user");
    setUserLogin(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 73,
        backgroundColor: "#66ab59",
      }}
    >
      <Box
        sx={{
          width: "59px",
          heigth: "100%",
          marginTop: "3px",
          marginLeft: "7.5%",
        }}
      >
        <Link to="/">
          <img src={logo} width="63" />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "50%",
          marginRight: "11%",
        }}
      >
        <Box
          sx={{
            color: "white",
            paddingRight: "15px",
            borderRight: "2px solid white",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginTop: "7px",
            }}
          >
            Hi,{" "}
            {isLogin ? (
              <Link
                to="/account"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingBottom: "5px",
                  borderBottom: "1px dashed white",
                }}
              >
                {user.name}
              </Link>
            ) : (
              <Link
                to="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingBottom: "1px",
                  borderBottom: "1px dashed white",
                }}
              >
                Log in
              </Link>
            )}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "17px",
            height: "17px",
            marginTop: "5px",
            marginLeft: "11px",
          }}
        >
          <Box>
            <Link to="/shoppingCart">
              <img src={cart} width="25" />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "21px",
              height: "21px",
              zIndex: 2,
              marginTop: "-199%",
              marginLeft: "110%",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                marginTop: "auto",
                marginBottom: "auto",
                color: "#66ab59",
                fontSize: "12px",
              }}
            >
              {isLogin ? count : 0}
            </Typography>
          </Box>
        </Box>
        {isLogin ? (
          <Box>
            <Typography
              variant="body1"
              sx={{
                marginTop: "7px",
                color: "white",
                cursor: "pointer",
                textDecoration: "none",
                marginLeft: "37px",
                borderBottom: "1px dashed white",
              }}
              onClick={logOut}
            >
              Log out
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

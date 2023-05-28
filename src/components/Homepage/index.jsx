import React, { useEffect, useState, useCallback } from "react";
import Header from "../Header";
import Product from "./components/Product";
import { API } from "../services/api";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [data, setData] = useState([]);
  const [userLogIn, setUserLogin] = useState(false);
  const [user, setUser] = useState({});
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const userLog = JSON.parse(localStorage.getItem("user"));
    if (userLog) {
      setUserLogin(true);
      setUser(userLog);
      setCount(userLog.shoppingCart.length);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await API.getProducts();
        setData(products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const logOut = async () => {
    await API.updateStatusWhenLogout(user);
    localStorage.removeItem("user");
    setUserLogin(false);
  };

  const addToCart = useCallback(
    async (data) => {
      if (!userLogIn) {
        navigate("/login");
      } else {
        await fetch(
          `https://6442d57333997d3ef91aa550.mockapi.io/api/mindboard/users/${user.id}`
        )
          .then((res) => res.json())
          .then((res) => {
            API.updateProducts(res, data);
            setCount(res.shoppingCart.length);
          });
      }
    },
    [userLogIn, navigate, user]
  );

  return (
    <>
      <Header
        count={count}
        action={logOut}
        isLogin={userLogIn}
        setUserLogin={setUserLogin}
      />
      <Box
        sx={{
          marginTop: "17px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          marginLeft: "83px",
        }}
      >
        {Object.keys(data).map((category) => (
          <Container
            key={category}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "450px",
              margin: "0 0 0 0",
            }}
          >
            <Typography
              variant="h2"
              className="bootstrap-font-class"
              sx={{
                fontSize: "31px",
                fontWeight: "700",
                marginLeft: "1%",
              }}
            >
              {category}
            </Typography>
            <Box sx={{ display: "flex" }}>
              {data[category].map((el) => (
                <Product
                  key={el.id}
                  data={el}
                  addToCart={addToCart}
                  user={userLogIn}
                  userLogIn={userLogIn}
                />
              ))}
            </Box>
          </Container>
        ))}
      </Box>
    </>
  );
}

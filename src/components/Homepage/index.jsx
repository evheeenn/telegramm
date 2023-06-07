import React, { useEffect, useState, useCallback } from "react";
import Header from "../Header";
import Product from "./components/Product";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  updateShoppingCartThunk,
  updateStatusWhenLogoutThunk,
} from "../../store/actions";

export default function Homepage() {
  const [userLogIn, setUserLogin] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (user) {
      setUserLogin(true);
      setCount(user.shoppingCart.length);
    }
  }, [user]);

  const logOut = async (user) => {
    await dispatch(updateStatusWhenLogoutThunk(user));
    localStorage.removeItem("user");
    await setUserLogin(false);
  };

  const addToCart = useCallback(
    async (data) => {
      if (!userLogIn) {
        navigate("/login");
      } else {
        await dispatch(updateShoppingCartThunk(user, data));
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
        {Object.keys(products).map((category) => (
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
              {products[category].map((el) => (
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

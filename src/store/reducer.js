import {
  USERS_FOR_VALIDATION,
  USER_LOGIN,
  USER_LOGOUT,
  PRODUCTS,
  USER_UPDATED,
} from "./actions";

const INITIAL_STATE = {
  user: false,
  usersForValidation: [],
  products: [],
};

export const usersReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, user: payload };

    case USER_LOGOUT:
      return { ...state, user: payload };

    case USERS_FOR_VALIDATION:
      return { ...state, usersForValidation: payload };

    case PRODUCTS:
      return { ...state, products: payload };

    case USER_UPDATED:
      return { ...state, user: payload };

    default:
      return state;
  }
};

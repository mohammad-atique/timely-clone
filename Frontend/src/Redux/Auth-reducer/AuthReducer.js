
import * as types from "./actionTypes";

const signInData = {
  userData: {},
  token: "",
  isAuth: false,
  isLoading: false,
  isError: false,

  successfullyCreated: false,
  createAccountLooding: false,
  createAccountError: false,
  errorData: [],
};

export const AuthReducer = (state = signInData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        userData: payload.data,
      };
    case types.SIGNIN_FAILURE:
      return {
        ...state,
        isAuth:false,
        isLoading: false,
        isError: true,
        errorData: payload,
      };
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        createAccountLooding: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        createAccountLooding: false,
        successfullyCreated: true,
        createAccountError: false,
        userData: payload,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        createAccountLooding: false,
        successfullyCreated: false,
        createAccountError: true,
        isAuth:false,
        errorData: payload,
      };
    case types.SIGNOUT:
      return {
        ...state,
        userData: {},
        token: "",
        isAuth: false,
        isLoading: false,
        isError: false,

        successfullyCreated: false,
        createAccountLooding: false,
        createAccountError: false,
        errorData: [],
      };
    default:
      return state;
  }
};

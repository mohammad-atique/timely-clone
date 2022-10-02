import axios from "axios";
import * as types from "./actionTypes";


const signInFunc = (data) => (dispatch) => {
  dispatch({ type: types.SIGNIN_REQUEST });

  axios
    .post("http://localhost:5000/auth/login", data)
    .then((response) => {
      // console.log(response);
      //   dispatch({ type: SIGNIN_SUCCESS, payload: response.data.token })
      dispatch({ type: types.SIGNIN_SUCCESS, payload: response.data });
    })
    .catch((e) => {
      // console.log(e);
      dispatch({
        type: types.SIGNIN_FAILURE,
        payload: e.response.data?.message
          ? e.response.data.message === "Incorrect credentials"
            ? [{ msg: e.response.data.message, param: "password" }]
            : [{ msg: e.response.data.message, param: "email" }]
          : e.response.data.errors,
      });
    });
};

const signUpFunc = (data) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });

  axios
    .post("http://localhost:5000/auth/register", data)
    .then((response) => {
      // console.log(response)
      dispatch({ type: types.SIGNUP_SUCCESS, payload: response.data.data });
    })
    .catch((e) => {
      // console.log(e)
      dispatch({ type: types.SIGNUP_FAILURE, payload: e.response.data.errors });
    });
};

export { signInFunc, signUpFunc };

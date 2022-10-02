import axios from "axios";
import * as types from "./actionTypes";


const getProfile = (token) => (dispatch) => {
  dispatch({ type: types.GET_PROFILE_REQUEST });

  axios
    .get("http://localhost:5000/profile",{
                headers: { 'Authorization': 'Bearer ' + token},
              })
    .then((response) => {
      console.log(response);
      //   dispatch({ type: SIGNIN_SUCCESS, payload: response.data.token })
      dispatch({ type: types.GET_PROFILE_SUCCESS, payload: response.data });
    })
    .catch((e) => {
      console.log(e);
      dispatch({
        type: types.GET_PROFILE_FAILURE
      });
    });
};

// .patch("http://localhost:5000/profile/edit", formData, {
//         headers: { "Content-Type": "multipart/form-data" ,'Authorization': 'Bearer ' + token},
//       })
//       .then((r) => console.log(r.data))
//       .catch((e) => console.log(e.error));


export { getProfile };

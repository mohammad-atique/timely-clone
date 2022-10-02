import axios from "axios";
import * as types from "./actionTypes";

const getProfile = (token) => (dispatch) => {
  dispatch({ type: types.GET_PROFILE_REQUEST });
  axios
    .get("http://localhost:5000/profile", {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      // console.log(response);
      //   dispatch({ type: SIGNIN_SUCCESS, payload: response.data.token })
      dispatch({ type: types.GET_PROFILE_SUCCESS, payload: response.data });
    })
    .catch((e) => {
      // console.log(e);
      dispatch({
        type: types.GET_PROFILE_FAILURE,
      });
    });
};

const updateProfile = (payload) => (dispatch) => {
  // console.log("payload==>", payload);
  dispatch({ type: types.UPDATE_PROFILE_REQUEST });
  return axios
    .patch("http://localhost:5000/profile/edit", payload.formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + payload.token,
      },
    })
    .then((response) => {
      // console.log("update res -->", response.data);
      //   dispatch({ type: SIGNIN_SUCCESS, payload: response.data.token })
      return dispatch({ type: types.UPDATE_PROFILE_SUCCESS });
    })
    .catch((e) => {
      // console.log("error",e);
      return dispatch({
        type: types.UPDATE_PROFILE_FAILURE,
      });
    });
};
export const getProjects = (params) => (dispatch) => {
  dispatch({ type: types.GET_PROJECTS_REQUEST });
  const token = localStorage.getItem("");
  return axios
    .get("http://localhost:5000/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) =>
      dispatch({
        type: types.GET_PROJECTS_SUCCESSFULL,
        payload: { data: res.data.projects, name: res.data.name },
      })
    )
    .catch((err) => dispatch({ type: types.GET_PROJECTS_FAILURE }));
};
export const addProject = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_PROJECT_REQUEST });
  const token = localStorage.getItem("");
  return axios
    .post("http://localhost:5000/projects/create", payload.projectState, {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    })
    .then((res) => dispatch({ type: types.ADD_PROJECT_SUCCESSFULL }))
    .catch((err) => dispatch({ type: types.ADD_PROJECT_FAILURE }));
};
export const updateProject = (payload, id) => (dispatch) => {
  dispatch({ type: types.UPDATE_PROJECT_REQUEST });
  const token = localStorage.getItem("");
  return axios
    .patch(`http://localhost:5000/projects/update/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => dispatch({ type: types.UPDATE_PROJECT_SUCCESS }))
    .catch((err) => dispatch({ type: types.UPDATE_PROJECT_FAILURE }));
};
export const deleteProject = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_PROJECT_REQUEST });
  const token = localStorage.getItem("");
  return axios
    .delete(`http://localhost:5000/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => dispatch({ type: types.DELETE_PROJECT_SUCCESS }))
    .catch(() => dispatch({ type: types.DELETE_PROJECT_FAILURE }));
};

// axios
//   .patch("http://localhost:5000/profile/edit", formData, {
//     headers: { "Content-Type": "multipart/form-data" ,'Authorization': 'Bearer ' + token},
//   })
//   .then((r) => console.log(r.data))
//   .catch((e) => console.log(e.error));

export { getProfile, updateProfile };

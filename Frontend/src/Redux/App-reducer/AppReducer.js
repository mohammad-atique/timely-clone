import * as types from "./actionTypes";

const appData = {
  userData:{},
  isLoading:false,
  isError:false,
};

export const AppReducer = (state = appData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: payload.user,
      };
    case types.GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      
      };
    default:
      return state;
  }
};

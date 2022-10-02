import * as types from "./actionTypes";

const initData = {

  isLoading:false,
  isError:false,
  projectsData:[],
  name:""

};

export const AppReducer = (oldState = initData, action) => {
  const { type, payload } = action;
  switch (type) {

    case types.GET_PROJECTS_REQUEST: return{...oldState,isLoading:true}

    case types.GET_PROJECTS_SUCCESSFULL: return{...oldState,isLoading:false,projectsData:[...payload.data],name:payload.name}

    case types.GET_PROJECTS_FAILURE: return{...oldState,isError:true}

    default:
      return oldState;
      
  }
};

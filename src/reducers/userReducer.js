import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "../actions/types";

const initialState = {
  users: localStorage.getItem("users"),
  user: localStorage.getItem("isAuth"),
  loading: true,
  msg: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("isAuth", JSON.stringify(action.payload));
      window.location.reload();
      return {
        ...state,
        users: [action.payload, ...state.users],
        user: action.payload,
        loading: false,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        msg: "Something went wrong !",
        loading: false,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("isAuth");
      return {
        ...state,
        user: null,
        loading: false,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        msg: "Something went wrong !",
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;

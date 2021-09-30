import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from "./types";

export const userRegister = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_SUCCESS, payload: name, email, password });
  } catch (err) {
    dispatch({ type: REGISTER_FAILED, payload: err });
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (err) {
    dispatch({ type: LOGOUT_FAILED, payload: err });
  }
};

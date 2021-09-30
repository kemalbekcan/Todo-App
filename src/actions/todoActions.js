import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,
  TODO_DELETE_ITEM,
  TODO_UPDATE_ITEM
} from "./types";

export const addTodoItem =
  (id, header, description, category) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_TODO_SUCCESS,
        payload: id,
        header,
        description,
        category,
      });
    } catch (err) {
      dispatch({ type: ADD_TODO_FAILED, payload: err });
    }
  };

export const todoItemDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: TODO_DELETE_ITEM, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const todoItemUpdate = (id, header, description, category) => async (dispatch) => {
  try {
    dispatch({type: TODO_UPDATE_ITEM, payload: id, header, description, category})
  } catch (err) {
    console.log(err)
  }
}
import {
  ADD_TODO_SUCCESS,
  TODO_DELETE_ITEM,
  TODO_UPDATE_ITEM,
} from "../actions/types";

const initialState = {
  todoItems: [],
  loading: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todoItems: [action.payload, ...state.todoItems],
        loading: false,
      };
    case TODO_DELETE_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.filter((item) => item.id !== action.payload),
        loading: false
      };
    case TODO_UPDATE_ITEM:
      console.log("id",action.payload.id)
      return {
        ...state,
        todoItems: state.todoItems.map((item) => item.id !== action.payload ? action.payload : item),
        loading: false
      }
    default:
      return state;
  }
};

export default todoReducer;

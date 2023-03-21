import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_COMP_TODO,
} from "../types/todoTypes";

const initialState = {
  //   todoList: [{ id: 1, text: "Work react redux", completed: false }],
  todoList: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
        return {
          todoList: payload
            ? [
                ...state.todoList,
                { id: new Date().getTime(), text: payload, completed: false },
              ]
            : state.todoList,
        };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === payload ? { ...item, completed: !item.completed } : item
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== payload),
      };
    case CLEAR_TODO:
      return {
        todoList: [],
      };
    case CLEAR_COMP_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.completed === false),
      };

    default:
      return {...state,
        todoList: JSON.parse(localStorage.getItem("todoList") || []),
      };
  }
};
export default todoReducer;

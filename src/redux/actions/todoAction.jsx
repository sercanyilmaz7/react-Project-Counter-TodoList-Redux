import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_COMP_TODO
} from "../types/todoTypes";

export const addTodo = (payload) => ({ type: ADD_TODO, payload: payload });
export const clearTodo = (payload) => ({ type: CLEAR_TODO, payload: payload });
export const clearCompTodo = (payload) => ({ type: CLEAR_COMP_TODO, payload: payload });
export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload: payload,
});
export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload: payload,
});

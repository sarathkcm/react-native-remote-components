
import { nanoid } from "nanoid";

export const ADD_TODO = "store/add-todo";
export const TOGGLE_TODO = "store/toggle-todo";

export const addTodo = ({ title, completed = false }) => ({
    type: ADD_TODO, payload: { id: nanoid(), title, completed }
});

export const toggleTodo = ({ id, completed }) => ({
    type: TOGGLE_TODO, payload: { id, completed }
});
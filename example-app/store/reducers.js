import { ADD_TODO, TOGGLE_TODO } from "./actions";

export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case TOGGLE_TODO:
            return state?.map(a => {
                if (a.id === action.payload.id) {
                    return { ...a, completed: action.payload.completed }
                }
                return a;
            });
        default:
            return state;
    }
}
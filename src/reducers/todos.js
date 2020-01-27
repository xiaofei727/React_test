import ActionTypes from "../constants/actionTypes";

const initialState = {
    loading: false,
    todos: [],
    todo: {}
};

export default function Todos(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_ALL_TODOS.REQUEST:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.GET_ALL_TODOS.SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            };
        case ActionTypes.GET_ALL_TODOS.FAILURE:
            return {
                ...state,
                loading: false
            };
        case ActionTypes.GET_TODO_ITEM.REQUEST:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.GET_TODO_ITEM.SUCCESS:
            return {
                ...state,
                todo: action.payload,
                loading: false
            };
        case ActionTypes.GET_TODO_ITEM.FAILURE:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}
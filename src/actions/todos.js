import TodosApi from '../api/TodosApi';
import ActionTypes from '../constants/actionTypes';

export function getAllTodos() {
    
    return dispatch => {
        dispatch(request());
        return TodosApi
          .getAllTodos()
          .then(resp => dispatch(success(resp.data)))
          .catch(error => dispatch(failure(error)));
    };

    function request() { return { type: ActionTypes.GET_ALL_TODOS.REQUEST } }
    function success(todos) { return { type: ActionTypes.GET_ALL_TODOS.SUCCESS, payload: todos } }
    function failure(error) { return { type: ActionTypes.GET_ALL_TODOS.FAILURE, payload: error } }
}

export function getTodoById(id) {
    
    return dispatch => {
        dispatch(request());
        return TodosApi
          .getTodoById(id)
          .then(resp => dispatch(success(resp.data)))
          .catch(error => dispatch(failure(error)));
    };

    function request() { return { type: ActionTypes.GET_TODO_ITEM.REQUEST } }
    function success(todo) { return { type: ActionTypes.GET_TODO_ITEM.SUCCESS, payload: todo } }
    function failure(error) { return { type: ActionTypes.GET_TODO_ITEM.FAILURE, payload: error } }
}
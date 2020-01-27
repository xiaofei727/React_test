import { defineAction } from 'redux-define';

export default {
    GET_ALL_TODOS : defineAction('GET_ALL_TODOS', ['REQUEST', 'SUCCESS', 'FAILURE']),
    GET_TODO_ITEM : defineAction('GET_TODO_ITEM', ['REQUEST', 'SUCCESS', 'FAILURE'])
}
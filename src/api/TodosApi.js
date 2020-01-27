import axios from 'axios';
import BaseApi from './BaseApi';

class TodosApi extends BaseApi {

    getAllTodos() {
        return axios.get(this.REACT_APP_SERVER_URL + "todos");
    }

    getTodoById(todo_id) {
        return axios.get(this.REACT_APP_SERVER_URL + "todos/" + todo_id);
    }
}

export default new TodosApi();

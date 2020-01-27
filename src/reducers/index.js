import { combineReducers } from "redux";
import TodosModule from "./todos";
import AuthModule from "./auth";

export default combineReducers({
    todos: TodosModule,
    auth: AuthModule
});
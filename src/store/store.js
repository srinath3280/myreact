import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter.reducers";
import todolistReducer from "./reducers/todolist.reducers";

var finalReducer = combineReducers({c:counterReducer,t:todolistReducer});
var store = new createStore(finalReducer)
export default store;
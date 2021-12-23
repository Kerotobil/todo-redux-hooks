import { combineReducers } from "redux";
import todoReducer from "./reducers/toDoReducer";
import { ToDoState } from "./types/toDo";

export interface AppState {
  todo: ToDoState;
}

const rootReducer = combineReducers<AppState>({
  
  todo: todoReducer,
});

export default rootReducer;

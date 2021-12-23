import { ThunkDispatch } from "redux-thunk";

export type ToDo = {
  id?: string;
  toDoText: string;
  howMany: number;
  hour?: Date;
};

export interface ToDoState {
  item: ToDo[];
}

export interface ToDoActions {
  type: "TODO_ADD" | "TODO-REMOVE";
  payload: ToDo;
}

export type ListAction = ToDoActions;
export type ListDispatch = ThunkDispatch<ToDoState, void, ListAction>;

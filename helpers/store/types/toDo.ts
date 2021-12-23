import { ThunkDispatch } from "redux-thunk";

export type ToDo = {
  id?: string;
  toDoText: string;
  howMany?: number;
  hour?: Date;
  isOk?: boolean;
};

export interface AddTodo {
  type: "TODO_ADD";
  payload: {
    text: string;
    howMany: number;
  };
}

export interface TodoOk {
  type: "TODO_ISOK";
  payload: {
    text: string;
    isOk: boolean;
  };
}

export interface ToDoState {
  item: ToDo[];
}

export type ToDoActions = AddTodo | TodoOk;

export type ListAction = ToDoActions;
export type ListDispatch = ThunkDispatch<ToDoState, void, ListAction>;

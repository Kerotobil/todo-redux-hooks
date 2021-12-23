export interface AddTodo {
  text: string;
  howMany: number;
}

export interface TodoOk {
  text: string;
  isOk: boolean;
}

export type TodoActions = AddTodo | TodoOk;

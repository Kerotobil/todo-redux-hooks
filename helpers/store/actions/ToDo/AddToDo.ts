import { AddTodo } from "../../types/toDo";
type Props = {
  item: AddTodo;
};

export const addToDo = (props: Props) => {
  return { type: props.item.type, payload: props.item.payload };
};

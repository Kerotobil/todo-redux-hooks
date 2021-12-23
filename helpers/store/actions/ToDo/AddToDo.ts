import { ToDo } from "../../types/toDo";
type Props = {
  item: ToDo;
};

export const addToDo = (props: Props) => {
  return { type: "TODO_ADD", payload: props.item };
};

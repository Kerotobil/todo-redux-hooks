import { ToDo } from "../../types/toDo";
type Props = {
  item: ToDo;
};

export const toggleOk = (props: Props) => {
  return { type: "TODO_ISOK", payload: props.item };
};

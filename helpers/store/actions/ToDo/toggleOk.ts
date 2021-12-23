import { TodoOk } from "../../types/toDo";
type Props = {
  item: TodoOk;
};

export const toggleOk = (props: Props) => {
  return { type: props.item.type, payload: props.item.payload };
};

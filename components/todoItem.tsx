import { MinusIcon, PlusIcon, CheckIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../helpers/store";
import { toggleOk } from "../helpers/store/actions/ToDo/toggleOk";
type Props = {
  index: number;
  text: string;
  howMany: number;
};

export const TodoItem = (props: Props) => {
  const dispatch = useDispatch();
  const ListItem = useSelector(
    (state: AppState) => state.todo.item[props.index]
  );
  return (
    <div
      className={`flex w-full justify-center space-x-2 mx-auto ${
        ListItem.isOk ? "opacity-75" : "opacity-100"
      }`}
    >
      <div className="bg-gray-600 rounded text-gray-200 max-w-md flex justify-between px-6 w-full">
        <div>{props.text}</div>
        <div> {props.howMany}</div>
      </div>
      <div
        className="cursor-pointer"
        onClick={() =>
          dispatch(
            toggleOk({ item: { isOk: !ListItem.isOk, toDoText: props.text } })
          )
        }
      >
        <CheckIcon
          className={`w-5 h-5 ${
            ListItem.isOk ? "text-red-700" : "text-green-700"
          }`}
        />
      </div>
    </div>
  );
};

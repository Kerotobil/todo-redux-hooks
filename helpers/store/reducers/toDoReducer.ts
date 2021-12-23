import { ToDoActions, ToDoState } from "../types/toDo";

const defaultState: ToDoState = {
  item: [],
};

const todoReducer = (
  state: ToDoState = defaultState,
  action: ToDoActions
): ToDoState => {
  switch (action.type) {
    case "TODO_ADD": {
      const itemIndex = state.item.findIndex(
        (item) => action.payload.text == item.toDoText
      );

      console.log(action.payload.text);

      if (itemIndex !== -1) {
        const qty = state.item[itemIndex].howMany;
        state.item[itemIndex].howMany = action.payload.howMany + qty;
        return { ...state };
      } else {
        state.item.push({
          toDoText: action.payload.text,
          howMany: action.payload.howMany,
        });
        return { ...state };
      }
    }
    case "TODO_ISOK": {
      const itemIndex = state.item.findIndex(
        (item) => item.toDoText == action.payload.text
      );
      state.item[itemIndex].isOk = action.payload.isOk;
      return { ...state };
    }
    default:
      return state;
  }
};
export default todoReducer;

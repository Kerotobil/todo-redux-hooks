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
        (item) => action.payload.toDoText == item.toDoText
      );

      if (itemIndex !== -1) {
        const qty = state.item[itemIndex].howMany;
        state.item[itemIndex].howMany = action.payload.howMany + qty;
        return { ...state };
      } else {
        state.item.push(action.payload);
        return { ...state };
      }
    }
    case "TODO-REMOVE": {
    }
    default:
      return state;
  }
};
export default todoReducer;

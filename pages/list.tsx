import { useSelector } from "react-redux";
import { Layout } from "../components/layouts";
import { TodoItem } from "../components/todoItem";
import { AppState } from "../helpers/store";

export default function List() {
  const TodoList = useSelector((state: AppState) => state.todo);

  return (
    <Layout variant="home">
      <div className="w-full">
        <div className="my-48 min-h-min h-8 py-2 mx-8">
          <div className="space-y-2">
            <div className="rounded text-gray-800 max-w-md mx-auto flex justify-between px-4 w-full">
              <div>{"Sırada Ne var "}</div>
              <div> {"Kaç Kez"}</div>
            </div>
            {TodoList.item.map((item, index) => (
              <TodoItem
                index={index}
                key={index}
                text={item.toDoText}
                howMany={item.howMany}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

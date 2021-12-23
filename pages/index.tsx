import { ClipboardListIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToDoList } from "../components/todo";
import { AppState } from "../helpers/store";

export default function Home() {
  const selector = useSelector((state: AppState) => state.todo);

  const [totalWork, setTotalWork] = useState<number>();

  useEffect(() => {
    const reducer = (previousValue: any, currentValue: any) =>
      previousValue + currentValue;

    const total = selector.item.map((item) => item.howMany).reduce(reducer, 0);
    console.log(total);
    setTotalWork(total);
  }, [selector]);

  return (
    <div className="bg-red-200 pt-4  mx-auto h-screen">
      {console.log(selector)}
      <div className="relative max-w-4xl mx-auto">
        <p className="text-gray-800 text-center text-4xl font-thin">
          Todo List
        </p>
        <div className="my-48 py-24">
          <ToDoList />
        </div>
        <div className="absolute top-4 right-2">
          <div className="relative">
            <a href="">
              <div className="absolute -bottom-2 -right-2 z-10 bg-yellow-50 text-xs font-bold px-1.5 py-0.5 scale-75 rounded-full">
                {totalWork}
              </div>
              <ClipboardListIcon className="w-8 h-8 text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

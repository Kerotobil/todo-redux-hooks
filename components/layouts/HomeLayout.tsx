import Link from "next/link";
import { ClipboardListIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppState } from "../../helpers/store";

export const HomeLayout = (props) => {
  const selector = useSelector((state: AppState) => state.todo);
  const [totalWork, setTotalWork] = useState<number>();

  useEffect(() => {
    const reducer = (previousValue: any, currentValue: any) =>
      previousValue + currentValue;

    const total = selector.item.map((item) => (item.isOk ? 0 : item.howMany));

    if (total == []) {
      setTotalWork(0);
    } else {
      setTotalWork(total.reduce(reducer, 0));
    }
  }, [selector]);

  return (
    <div className="bg-red-200 pt-4  mx-auto h-screen">
      <div className="relative max-w-4xl mx-auto">
        <Link href="/">
          <a>
            <p className="text-gray-800 text-center text-4xl font-thin">
              Todo List
            </p>
          </a>
        </Link>
        {props.children}
        <div className="absolute top-4 right-2">
          <div className="relative">
            <Link href="/list">
              <a>
                <div className="absolute -bottom-2 -right-2 z-10 bg-yellow-50 text-xs font-bold px-1.5 py-0.5 scale-75 rounded-full">
                  {totalWork}
                </div>
                <ClipboardListIcon className="w-8 h-8 text-gray-500" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

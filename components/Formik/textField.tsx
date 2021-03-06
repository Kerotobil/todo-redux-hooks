import { Field, useField } from "formik";
import React from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

enum EventName {
  DEC = "DEC",
  INC = "INC",
}

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  quantityName: string;
  howMany: number;
  label?: string;
  placeholderText?: string;
  onClick: (e: EventName) => void;
};

export const TextField = (props: Props) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <div>
      <div className="flex space-x-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {props.label}
          </label>
          <Field
            name={props.name}
            className={`block border border-transparent py-2 px-4 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              meta.error ? "border-2 border-red-800" : ""
            }`}
          />
        </div>
        <div>
          <label className="block text-center text-sm font-medium text-gray-700">
            {"Kaç kez"}
          </label>
          <div className="flex flex-row h-6 w-full rounded-lg relative bg-transparent mt-1">
            <div
              onClick={() => props.onClick(EventName.DEC)}
              className="bg-gray-100 w-6 h-6 text-gray-600 hover:text-gray-200 hover:bg-gray-400 rounded cursor-pointer outline-none"
            >
              <MinusIcon className="w-full h-full py-0 mx-auto" />
            </div>
            <input
              type="number"
              className="w-8 px-0 lg:w-10 bg-gray-100 mx-1  text-right font-semibold text-md border-transparent rounded hover:text-black focus:text-black text-gray-700"
              name={props.quantityName}
              value={props.howMany}
              onChange={() => null}
              readOnly={true}
              disabled
            />
            <div
              onClick={() => props.onClick(EventName.INC)}
              className="bg-gray-100 w-6 h-6 text-gray-600 hover:text-gray-200 hover:bg-gray-400 rounded cursor-pointer"
            >
              <PlusIcon className="w-full h-full mx-auto text-center align-middle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

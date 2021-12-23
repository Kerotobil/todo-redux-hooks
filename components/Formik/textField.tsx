import { Field } from "formik";
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
  return (
    <div>
      <div className="flex space-x-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {props.label}
          </label>
          <Field
            name={props.name}
            className="block py-2 px-4 w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-center text-sm font-medium text-gray-700">
            {"Kaç kez"}
          </label>
          <div className="flex flex-row h-6 w-full rounded-lg relative bg-transparent mt-1">
            <div
              onClick={() => props.onClick(EventName.DEC)}
              className="bg-gray-100 text-gray-600 hover:text-gray-200 hover:bg-gray-400 rounded cursor-pointer outline-none"
            >
              <MinusIcon className="w-5 h-5 mx-auto" />
            </div>
            <input
              type="number"
              className="w-8 px-0 lg:w-10 bg-gray-100 mx-1  text-right font-semibold text-md border-transparent rounded hover:text-black focus:text-black text-gray-700"
              name={props.quantityName}
              value={props.howMany}
              onChange={() => null}
              readOnly
              disabled
            />
            <div
              onClick={() => props.onClick(EventName.INC)}
              className="bg-gray-100 text-gray-600 hover:text-gray-200 hover:bg-gray-400 rounded cursor-pointer"
            >
              <PlusIcon className="w-5 h-5 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

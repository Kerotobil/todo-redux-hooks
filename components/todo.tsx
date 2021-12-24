import { Formik, Form, yupToFormErrors } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../helpers/store";
import { addToDo } from "../helpers/store/actions/ToDo/AddToDo";
import { ToDo } from "../helpers/store/types/toDo";
import { TextField } from "./Formik/textField";
import * as yup from "yup";

export const ToDoList = () => {
  const [datum, setDatum] = useState<ToDo>({
    howMany: 1,
    toDoText: "",
  });
  const dispatch = useDispatch();

  return (
    <div className="">
      <Formik
        initialValues={datum}
        validationSchema={yup.object().shape({
          toDoText: yup.string().required(" "),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            addToDo({
              item: {
                type: "TODO_ADD",
                payload: { text: values.toDoText, howMany: values.howMany },
              },
            })
          );
          resetForm();
        }}
      >
        {(props) => (
          <Form>
            <div className="max-w-lg mx-auto grid grid-cols-12 gap-y-2 gap-x-4 pb-2">
              <div className="col-span-full mx-auto">
                <div className="mt-1 px-8">
                  <TextField
                    name="toDoText"
                    label="Ne yapacağım?"
                    howMany={props.values.howMany}
                    quantityName={"howMany"}
                    onClick={(eventname) => {
                      if (eventname == "INC") {
                        props.setFieldValue(
                          "howMany",
                          props.values.howMany + 1
                        );
                      } else {
                        if (props.values.howMany == 1) return;
                        else {
                          props.setFieldValue(
                            "howMany",
                            props.values.howMany - 1
                          );
                        }
                      }
                    }}
                  />
                </div>
              </div>
              <div className="col-start-5 col-span-4 px-8 rounded-md">
                <button
                  type="submit"
                  className="w-full px-4 py-2 min-w-min  text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {`Ekle`}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

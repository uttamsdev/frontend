import React, { useContext } from "react";
import { FormElementContext } from "./Form";

export const FormSubmit = () => {
    const {double} = useContext(FormElementContext);
  return (
    <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
      <button className=" btn btn-primary">Submit</button>
    </div>
  );
};

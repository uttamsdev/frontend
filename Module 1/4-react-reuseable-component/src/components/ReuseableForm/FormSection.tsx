import React, { useContext } from "react";
import cn from "../../utils/cn";
import { FormElementContext } from "./Form";

export const FormSection = ({children}) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn("justify-items-center grid grid-cols-1  gap-3", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};

import React, { createContext } from "react";
import cn from "../../utils/cn";

export const FormElementContext = createContext<{double : boolean} | null>(null);

export const Form = ({ children, onSubmit, double }) => {
  return (
    <FormElementContext.Provider value={{double}}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "max-full p-5 border border-gray-300 rounded-md mx-auto shadow-sm",
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};

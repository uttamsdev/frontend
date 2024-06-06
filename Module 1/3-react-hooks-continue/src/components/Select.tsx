import React, { Children } from "react";

const Select = ({ children }) => {
  return <select>{children}</select>;
};


const SelectOption = ({value, children}) => {
    return <option>{children}</option>
}

Select.SelectOption = SelectOption;
export default Select;
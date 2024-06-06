import React, { forwardRef } from "react";
type TCustomInputProps = {
  className: string;
};
const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>(
  ({ className }, inputRef) => {
    //we have to use forwardRef wrapped to the component..
    return (
      <div>
        <form>
          <input className={className} type="text" ref={inputRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
);

export default CustomInput;

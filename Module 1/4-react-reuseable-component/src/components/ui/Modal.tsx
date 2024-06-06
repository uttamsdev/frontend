//modal using portal:  index.html er moddhe portal id diye ekta div nibo..
//modal k amra portal er moddhe render korabo...
//portal 2 ta eleemnt nei parameter hisebe jsx & id
import { createPortal } from "react-dom";
import React, { ChangeEvent, createContext, useContext, useRef } from "react";
import cn from "../../utils/cn";

//Modal context
const ModalContext = createContext();

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClose = (e: MouseEventHandler<HTMLDivElement>) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{onClose}}>
      <div
        className={cn(
          "fixed inset-0 bg-gray-500/70  duration-300 invisible z-[9999] flex items-center justify-center",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={containerRef}
          className=" bg-white w-full max-w-sm rounded-md "
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = () => {
    const {onClose} = useContext(ModalContext);
  return <button onClick={onclose}>Close button</button>;
};

Modal.CloseButton = CloseButton; //compound component

export default Modal;

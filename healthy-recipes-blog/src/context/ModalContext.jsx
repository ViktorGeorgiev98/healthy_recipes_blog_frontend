import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
}

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};
export { useModalContext, ModalContextProvider };

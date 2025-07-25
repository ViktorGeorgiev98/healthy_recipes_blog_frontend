import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  return (
    <ModalContext.Provider
      value={{ openModal, setOpenModal, selectedRecipeId, setSelectedRecipeId }}
    >
      {children}
    </ModalContext.Provider>
  );
}

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useModalContext must be used inside <ModalContextProvider>"
    );
  }
  return context;
};
export { useModalContext, ModalContextProvider };

import { motion, AnimatePresence } from "framer-motion";
import { useModalContext } from "../context/ModalContext";

export default function Modal({ children }) {
  const { openModal, setOpenModal } = useModalContext();

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          className="fixed inset-0 bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-[1000] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, duration: 0.5 }}
          exit={{ opacity: 0, duration: 0.5 }}
        >
          <motion.div
            className="relative bg-white bg-opacity-90 p-10 rounded-2xl shadow-2xl w-full max-w-3xl text-center"
            initial={{ scale: 0.01, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.01, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-4 text-4xl text-gray-500 hover:text-gray-700 transition cursor-pointer z-100000 pointer-events-auto"
            >
              &times;
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

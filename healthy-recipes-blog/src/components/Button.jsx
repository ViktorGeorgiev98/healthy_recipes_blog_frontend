import { motion, scale } from "framer-motion";

export default function Button({ type = "secondary", onClick, children }) {
  const styles = {
    primary: {
      css: "py-2 px-4 text-green-700 font-bold text-xl bg-yellow-500 flex items-center justify-center shadow-lg rounded-sm border-black border-1 border-solid cursor-pointer",
    },
    secondary: {
      css: "py-2 px-4 text-gray-700 font-bold text-xl bg-white flex items-center justify-center shadow-lg rounded-sm border-black border-1 border-solid cursor-pointer hover:text-yellow-600 transition-all duration-300 hover:scale-105",
    },
    tertiary: { css: "" },
  };

  const animations = {
    primary: {
      scale: [1, 1.1, 1], // Pop up and down
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
    secondary: {
      "": "",
    },
  };

  return (
    <motion.button
      className={styles[type].css}
      whileHover={animations[type]}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

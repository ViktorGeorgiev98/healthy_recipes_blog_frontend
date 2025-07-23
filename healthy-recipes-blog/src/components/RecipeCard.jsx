import { NavLink } from "react-router";
import Button from "./Button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { APIURL } from "../utils/constants";

export default function RecipeCard({ title, description, image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="w-80 h-[500px] rounded-2xl overflow-hidden shadow-xl bg-white transition-transform transform hover:scale-105 duration-500 flex flex-col gap-10 cursor-pointer hover:-translate-y-5"
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Image: full width, no padding */}
      <img
        src={`${APIURL}${image}`}
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* Content below image: centered with padding */}
      <div className="p-6 flex flex-col items-center text-center gap-8">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <Button buttonType="secondary">Details</Button>
      </div>
    </motion.div>
  );
}

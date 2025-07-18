import { NavLink } from "react-router";
import Button from "./Button";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function RecipeCard({ title, description, image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white transition-transform transform hover:scale-105 duration-500 flex flex-col cursor-pointer hover:-translate-y-5"
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Image: full width, no padding */}
      <img
        src={`https://healthyrecipesblogapi-production.up.railway.app${image}`}
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* Content below image: centered with padding */}
      <div className="p-6 flex flex-col items-center text-center gap-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <Button type="secondary">Details</Button>
      </div>
    </motion.div>
  );
}

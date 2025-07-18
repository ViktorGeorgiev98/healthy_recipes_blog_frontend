import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CommunityCard({ title, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white transition-transform transform hover:scale-105 duration-500 flex flex-col cursor-pointer hover:-translate-y-5"
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Content below image: centered with padding */}
      <div className="p-6 flex flex-col items-center text-center gap-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

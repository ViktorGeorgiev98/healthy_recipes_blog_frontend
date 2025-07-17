import { motion } from "framer-motion";
import Button from "../components/Button";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="h-[85vh] bg-green-300 w-full flex items-center justify-around gap-20"
    >
      <div className="flex flex-col items-start justify-center gap-10">
        <motion.h1
          className="text-7xl font-bold uppercase tracking-widest italic text-yellow-500"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Healthy Recipes
        </motion.h1>
        <motion.h4
          className="text-2xl font-semibold text-gray-700"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Your go-to blog for tasty, healthy recipes that make clean eating
          simple.
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-start gap-7"
        >
          <Button type="secondary">Check Recipes</Button>
          <Button type="primary">Register Now</Button>
        </motion.div>
      </div>
      <div>image</div>
    </section>
  );
}

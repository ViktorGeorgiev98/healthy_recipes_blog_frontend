import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="h-[85vh] bg-green-300 w-full flex items-center justify-around gap-20"
    >
      <div className="flex flex-col items-start justify-center gap-10">
        <motion.h1
          className="text-7xl font-bold uppercase tracking-widest italic text-yellow-600"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Healthy Recipes
        </motion.h1>
        <motion.h4
          className="text-2xl font-semibold"
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
        >
          <button>Browse Recipes</button>
          <button>Sign Up</button>
        </motion.div>
      </div>
      <div>image</div>
    </section>
  );
}

import { motion } from "framer-motion";
import Button from "../components/Button";
import { useNavigate } from "react-router";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      id="hero-section"
      className="h-[85vh] bg-green-300 w-full flex items-center justify-between gap-10 px-16"
    >
      <div className="flex flex-col items-start justify-center gap-20 px-25">
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
          <Button onClick={() => navigate("/recipes")} type="secondary">
            Check Recipes
          </Button>
          <Button onClick={() => navigate("/register")} type="primary">
            Register Now
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <img
          class="w-full h-auto rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          src="/public/healthy-salad.png"
          alt="healthy salad"
        />
      </motion.div>
    </section>
  );
}

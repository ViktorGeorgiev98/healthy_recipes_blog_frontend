import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      id="about"
      className="py-20 flex flex-col items-center justify-center gap-20 w-full bg-green-300"
    >
      <h2 className="text-3xl font-bold uppercase tracking-widest italic text-white hover:rotate-5 transition-all duration-300">
        About Healthy Recipes Blog
      </h2>
      <motion.div
        className="min-h-screen flex items-center justify-center px-8 py-20 bg-white text-gray-800 shadow-2xl rounded-md"
        ref={ref}
        initial={{ opacity: 0, y: 150 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl text-lg leading-relaxed space-y-6 text-center">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-yellow-500">
              Healthy Recipes Blog
            </span>{" "}
            — your go-to destination for nutritious, delicious, and easy-to-make
            meals that fit into any lifestyle.
          </p>
          <p>
            We believe that eating well shouldn't be complicated or boring.
            That’s why we’re on a mission to make healthy cooking
            <span className="font-semibold text-green-600">
              {" "}
              accessible, flavorful, and fun
            </span>
            .
          </p>
          <p>
            Whether you're a seasoned home cook or just starting your journey
            toward better eating, our collection of carefully curated recipes is
            designed to{" "}
            <span className="italic">
              nourish your body and satisfy your cravings
            </span>
            .
          </p>
          <p>
            From quick weekday dinners to protein-packed breakfasts and vibrant
            plant-based meals, we’ve got something for everyone.
          </p>
          <p>
            Each recipe includes simple ingredients, clear instructions, and
            nutritional insights to help you stay on track without stress.
          </p>
          <p>
            Join our growing community of food lovers and discover how healthy
            eating can be both inspiring and sustainable.
          </p>
          <p className="font-semibold text-green-700 text-xl">
            Eat well. Live well. Love what you cook. 💚
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

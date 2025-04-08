import { LoginForm } from "./LoginForm";
import { motion } from "framer-motion";
export function HeroSection() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2  p-14 md:p-20 text-white bg-[#2F1893]">
      <motion.div
        className="flex flex-col justify-center gap-6"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold display">
          Generate Awesome Web Pages
        </h1>
        <p className="text-lg max-w-md">
          The most important part of the Startup is the samples. The samples
          form a set of 25 usable pages you can use as is or you can add new
          blocks.
        </p>
        <button className="btn-secondary  bg-[#E93A7D] p-3 rounded-4xl w-34">
          Learn More
        </button>
      </motion.div>

      <div className="flex justify-center items-center mt-10 md:mt-0 ">
        <LoginForm />
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-40, 40],
    y: [0, -60],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="bg-primary w-full h-screen flex justify-center items-center transition"
      whileInView={{ opacity: [1, 0] }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <motion.div
        className="bg-white w-3 h-3 my-10 mx-auto rounded-[50%]"
        variants={loaderVariants}
        animate="animationOne"
      />
    </motion.div>
  );
};

export default Loader;

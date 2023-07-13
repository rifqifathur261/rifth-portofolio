import { useRef } from "react";
import { images } from "../constants";
import { motion, useScroll, useTransform } from "framer-motion";
import TrainLayer from "./TrainLayer";

const MultiLayerParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const layer1 = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const layer2 = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const layer3 = useTransform(scrollYProgress, [0, 1], ["0%", "140%"]);
  const layer4 = useTransform(scrollYProgress, [0, 1], ["0%", "160%"]);
  const layer5 = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);
  const layer6 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const layerBirds = useTransform(scrollYProgress, [0, 1], ["0%", "220%"]);
  const layerSun = useTransform(scrollYProgress, [0, 1], ["0%", "240%"]);
  const layerTrain = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-content-center bg-illustration-bg"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 80] }}
        className="absolute inset-0 z-[24]"
        style={{
          y: layerTrain,
        }}
      >
        <TrainLayer />
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 3.5 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('../src/assets/images/illustration/sun.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layerSun,
        }}
      />
      {/* <motion.div
        // initial={{ y: 100 }}
        // animate={{ y: [100, 0] }}
        // transition={{ delay: 3 }}
        animate={{
          y: [10, 20, 10, 20, 10],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
        className="absolute inset-0 z-[20]"
        style={{
          backgroundImage: `url('../src/assets/images/illustration/birds.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layerBirds,
        }}
      /> */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 2.5 }}
        className="absolute inset-0 z-[21]"
        style={{
          backgroundImage: `url('../src/assets/images/illustration/layer-6.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer6,
        }}
      />

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 2 }}
        className="absolute inset-0 z-[22]"
        style={{
          backgroundImage: `url('../src/assets/images/illustration/layer-5.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer5,
        }}
      />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 1.5 }}
        className="absolute inset-0 z-[23]"
        style={{
          backgroundImage: `url('../src/assets/images/illustration/layer-4.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer4,
        }}
      />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 1 }}
        className="absolute inset-0 z-[24]"
        style={{
          backgroundImage: `url('../src/assets/images/illustration/layer-3.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer3,
        }}
      />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 z-[25]"
        style={{
          backgroundImage: `url('../src/assets/images/illustration/layer-2.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer2,
        }}
      />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: `url('../src/assets/images/illustration/layer-1.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer1,
        }}
      />
    </div>
  );
};

export default MultiLayerParallax;

import { useRef, useState } from "react";
import { images } from "../constants";
import { motion, useScroll, useTransform } from "framer-motion";
import TrainLayer from "./TrainLayer";

const MultiLayerParallax = () => {
  const [loader, setOnload] = useState({});
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const layer1 = useTransform(scrollYProgress, [0, 1], ["0%", "1%"]);
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
      {/* <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 80] }}
        transition={{ delay: 2.5 }}
        className="absolute inset-0 z-[24]"
        style={{
          y: layerTrain,
        }}
      >
        <TrainLayer />
      </motion.div> */}
      <motion.div
        id="Train2"
        initial={{ x: 1500 }}
        animate={{
          x: [1500, -1500],
        }}
        transition={{
          duration: 11,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute inset-0 z-[50]"
        style={{
          backgroundImage: `url('/images/Train1.webp')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer4,
        }}
      />
      <motion.div
        id="Train1"
        initial={{ x: -1500 }}
        animate={{
          x: [-1500, 1500],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute inset-0 z-[50]"
        style={{
          backgroundImage: `url('/images/Train1.webp')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer4,
        }}
      />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 1.8 }}
        className="absolute inset-0 z-[50] -pb-20"
        style={{
          backgroundImage: `url('/images/Bridge.webp')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer4,
        }}
      />
      {/* <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 1.8 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/sun.webp')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layerSun,
        }}
      /> */}
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
          backgroundImage: `url('/images/birds.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layerBirds,
        }}
      /> */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 1.5 }}
        className="absolute inset-0 z-[20]"
        style={{
          backgroundImage: `url('/images/layer-6.webp')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer6,
        }}
      />

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 1.2 }}
        className="absolute inset-0 z-[30]"
        style={{
          backgroundImage: `url('/images/layer-5.webp')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer5,
        }}
      />
      {/* <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 0.9 }}
        className="absolute inset-0 z-[40]"
        style={{
          backgroundImage: `url('/images/layer-4.webp')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer4,
        }}
      />*/}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 0.6 }}
        className="absolute inset-0 z-[50]"
        style={{
          backgroundImage: `url('/images/layer-3.webp')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer3,
        }}
      />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        transition={{ delay: 0.3 }}
        className="absolute inset-0 z-[60]"
        style={{
          backgroundImage: `url('/images/layer-2.webp')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer2,
        }}
      />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, 0] }}
        className="absolute inset-0 z-[70]"
        style={{
          backgroundImage: `url('/images/layer-0.png')`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer1,
        }}
      />
    </div>
  );
};

export default MultiLayerParallax;

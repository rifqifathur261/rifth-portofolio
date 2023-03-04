import { motion } from "framer-motion";

const MotionWrap = (Component: any, classNames: any, idName: any) =>
  function HOC() {
    return (
      <div id={idName}>
        {idName == "Hero" ? (
          <Component />
        ) : (
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`${idName != "Hero" ? "" : ""} ${classNames}`}
          >
            {/* <div id={idName}> */}
            <Component />
            {/* </div> */}
          </motion.div>
        )}
      </div>
    );
  };

export default MotionWrap;

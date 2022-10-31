import { Parallax } from "react-scroll-parallax";
import { images } from "../constants";
import styles from "../style";
import MotionWrap from "../wrapper/MotionWrap";

const Hero = () => (
  <div className="flex justify-center items-center bg-illustration-bg relative w-full h-screen pt-[200px] pb-[199px]">
    <Parallax speed={-990} className="absolute">
      <img src={images.sun} alt="sun" className={styles.imageCover} />
    </Parallax>

    <Parallax speed={-700} className="absolute">
      <img src={images.birds} alt="birds" className={styles.imageCover} />
    </Parallax>

    <Parallax speed={-700} className="absolute">
      <img src={images.layer6} alt="mountain-6" className={styles.imageCover} />
    </Parallax>

    <Parallax speed={-600} className="absolute">
      <img src={images.layer5} alt="mountain-5" className={styles.imageCover} />
    </Parallax>

    <Parallax speed={-400} className="absolute">
      <img src={images.layer4} alt="mountain-4" className={styles.imageCover} />
    </Parallax>

    <Parallax speed={-60} className="absolute">
      <img src={images.layer3} alt="mountain-3" className={styles.imageCover} />
    </Parallax>

    <Parallax speed={-30} className="absolute">
      <img src={images.layer2} alt="mountain-2" className={styles.imageCover} />
    </Parallax>

    <Parallax speed={0} className="absolute">
      <img src={images.layer1} alt="mountain-1" className={styles.imageCover} />
    </Parallax>
  </div>
);

export default MotionWrap(
  Hero,
  "flex justify-center items-center bg-illustration-bg relative w-full h-screen pt-[200px] pb-[199px]"
);

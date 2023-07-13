import { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from "./style";
import { motion } from "framer-motion";
import {
  Navbar,
  Hero,
  About,
  Projects,
  Skills,
  Testimonials,
  Footer,
  Loader,
} from "./components/";
import MultiLayerParallax from "./components/MultiLayerParallax";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="font-walsheim bg-base w-full">
            <Navbar />
            <MultiLayerParallax />
            {/* <Hero /> */}

            <div
              className={`${styles.paddingX} ${styles.flexCenter} z-[2] absolute bg-base w-full`}
            >
              <div className="container">
                <About />
                <Projects />
                <Skills />
                <Testimonials />
                <Footer />
              </div>
            </div>
          </div>
        </div>
        // <ParallaxProvider>
        // </ParallaxProvider>
      )}
    </>
  );
};

export default App;

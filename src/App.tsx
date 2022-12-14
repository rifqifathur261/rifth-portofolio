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
        <ParallaxProvider>
          <div className="font-walsheim bg-base w-full">
            <Navbar />

            <Hero />

            <div
              className={`${styles.paddingX} ${styles.flexCenter} z-[2] absolute bg-base w-full`}
            >
              <div className="container">
                <About />
                <Projects />
                <Skills />
                <Testimonials />
                {/* <Footer /> */}
              </div>
            </div>
          </div>
        </ParallaxProvider>
      )}
    </>
  );
};

export default App;

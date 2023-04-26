import { motion } from "framer-motion";
import { useState } from "react";
import { images } from "../constants";
import styles from "../style";

const navigations = ["About", "Projects", "Skills", "Testimonials"];

const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <div
      className={`${styles.flexCenter} w-full bg-transparent backdrop-blur-sm fixed z-[3]`}
    >
      <nav
        className={`container flex justify-between items-center ${styles.padding}`}
      >
        <motion.img
          whileInView={{ x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 1 }}
          src={images.logo}
          alt="navbar logo"
          className="w-[90px] h-[20px]"
        />

        <ul className="sm:flex justify-center items-center hidden">
          {navigations.map((navItem, index) => (
            <motion.div
              whileInView={{ x: [0, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 1.2 }}
              key={navItem}
            >
              <li className={index == navigations.length - 1 ? "mr-0" : "mr-6"}>
                <a
                  href={`#${navItem}`}
                  className={`text-text ${styles.animatedUnderline} before:-bottom-1`}
                >
                  {navItem}
                </a>
              </li>
            </motion.div>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center relative">
          <img
            src={images.icMenu}
            alt="hamburger"
            onClick={() => setToogle(true)}
          />

          {toogle && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
              className="fixed z-10 top-0 right-0  p-4 h-screen bg-primary"
            >
              <img
                src={images.icClose}
                alt="hamburger"
                onClick={() => setToogle(false)}
              />
              <ul className="">
                {/* <li>Item</li> */}
                {navigations.map((item, index) => (
                  <li key={index} className="m-4 font-thin text-white text-xl">
                    <a
                      href={`#${item}`}
                      className={`text-text ${styles.animatedUnderline} before:-bottom-1`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

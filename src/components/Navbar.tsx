import { motion } from "framer-motion";
import { images } from "../constants";
import styles from "../style";

const navigations = ["About", "Projects", "Skills", "Testimonials", "Contact"];

const Navbar = () => {
  return (
    <div
      className={`${styles.flexCenter} w-full bg-transparent backdrop-blur-sm fixed z-[3]`}
    >
      <nav
        className={`container flex justify-between items-center ${styles.padding}`}
      >
        <motion.img
          whileInView={{ x: [0, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          src={images.logo}
          alt="navbar logo"
          className="w-[90px] h-[20px]"
        />

        <ul className="flex justify-center items-center">
          {navigations.map((navItem, index) => (
            <motion.div
              whileInView={{ y: [0, 0], opacity: [0, 1] }}
              transition={{ duration: index * 0.5 }}
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

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src="" alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

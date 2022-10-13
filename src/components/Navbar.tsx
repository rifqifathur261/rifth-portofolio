import { images } from "../constants";
import styles from "../style";

const navigations = ["About", "Projects", "Skills", "Testimonials", "Contact"];

const Navbar = () => (
  <div
    className={`${styles.flexCenter} w-full bg-transparent backdrop-blur-sm fixed z-[3]`}
  >
    <nav
      className={`container flex justify-between items-center ${styles.padding}`}
    >
      <img src={images.logo} alt="logo" className="w-[90px] h-[20px]" />

      <ul className="flex justify-center items-center">
        {navigations.map((navItem, index) => (
          <li
            className={index == navigations.length - 1 ? "mr-0" : "mr-6"}
            key={navItem}
          >
            <a
              href={`#${navItem}`}
              className={`text-text ${styles.animatedUnderline}`}
            >
              {navItem}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src="" alt="" />
      </div>
    </nav>
  </div>
);

export default Navbar;

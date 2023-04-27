import styles from "../style";
import Divider from "./Divider";
import { FiLinkedin, FiInstagram, FiGithub, FiFigma } from "react-icons/fi";
import MotionWrap from "../wrapper/MotionWrap";
import { Button } from "../components";

const Footer = () => {
  return (
    <>
      <Divider />
      <section>
        <div className={`${styles.flexCenter} flex-col text-center mb-11`}>
          <h1 className={`${styles.title}`}>
            Get In
            <span className={styles.primaryTextGradient}> Touch</span>
          </h1>

          <p className="text-grey my-20 sm:w-2/5 text-2xl">
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <div>
            <Button
              props={{
                text: "Say Hello!",
                bottom: "before:-bottom-1",
                url: "mailto:goniawan261@gmail.com?subject=Hello Rifqi!",
              }}
            />
          </div>

          <div className="flex sm:gap-16 gap-10 my-24">
            <a href="https://www.linkedin.com/in/rifqifathurrahman261/">
              <FiLinkedin
                className="w-12 h-12 text-grey hover:text-accent cursor-pointer"
                strokeWidth="1px"
              />
            </a>
            <a href="https://www.instagram.com/rifth02/">
              <FiInstagram
                className="w-12 h-12 text-grey hover:text-accent cursor-pointer"
                strokeWidth="1px"
              />
            </a>
            <a href="https://github.com/rifqifathur261">
              <FiGithub
                className="w-12 h-12 text-grey hover:text-accent cursor-pointer"
                strokeWidth="1px"
              />
            </a>
            <a href="https://www.figma.com/@rifth">
              <FiFigma
                className="w-12 h-12 text-grey hover:text-accent cursor-pointer"
                strokeWidth="1px"
              />
            </a>
          </div>
          <div>
            <p className={`text-white text-sm`}>
              Design & Built by{" "}
              <span className={styles.occeanTextGradient}>Rifth</span>
            </p>
            {/* <p className={`text-white text-sm mt-4`}>
              Inspired by{" "}
              <span className={styles.primaryTextGradient}>Ruination</span> from
              League of Legends
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MotionWrap(Footer, "", "Footer");

import styles from "../style";
import Button from "./Button";
import Divider from "./Divider";
import { FiLinkedin, FiInstagram, FiGithub, FiMail } from "react-icons/fi";
import { useState } from "react";
import MotionWrap from "../wrapper/MotionWrap";

const Footer = () => {
  return (
    <>
      <Divider />
      <section id="footer">
        <div className={`${styles.flexCenter} flex-col text-center mb-11`}>
          <h1 className={`${styles.title}`}>
            Get In
            <span className={styles.primaryTextGradient}> Touch</span>
          </h1>

          <p className="text-grey my-20 w-2/5 text-2xl">
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <div>
            <Button
              props={{ text: "Say Hello!", bottom: "before:-bottom-1" }}
            />
          </div>

          <div className="flex gap-16 my-24">
            <FiLinkedin
              className="w-12 h-12 text-grey hover:text-accent cursor-pointer"
              strokeWidth="1px"
            />
            <FiInstagram
              className="w-12 h-12 text-grey hover:text-accent cursor-pointer"
              strokeWidth="1px"
            />
            <FiGithub
              className="w-12 h-12 text-grey hover:text-accent cursor-pointer"
              strokeWidth="1px"
            />
            <FiMail
              className="w-12 h-12 text-grey hover:text-accent cursor-pointer"
              strokeWidth="1px"
            />
          </div>
          <div>
            <p className={`text-white text-sm`}>
              Design & Built by{" "}
              <span className={styles.occeanTextGradient}>
                Rifqi Fathurrahman
              </span>
            </p>
            <p className={`text-white text-sm mt-4`}>
              Inspired by{" "}
              <span className={styles.primaryTextGradient}>Ruination</span> from
              League of Legends
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MotionWrap(Footer, "");

import { motion } from "framer-motion";
import { images } from "../constants";
import styles from "../style";
import Divider from "./Divider";

const Testimonials = () => {
  return (
    <>
      <Divider />

      <section id="testimonials">
        <div className="text-center">
          <h1 className={`${styles.title} text-center`}>
            <span className={styles.primaryTextGradient}>Testimonials</span>
          </h1>
          <p className="text-grey mt-4">
            What people i've worked with are saying
          </p>
        </div>
        <div className={`${styles.flexCenter} mt-14 gap-20`}>
          <img src={images.icArrowLeft} alt="Icon arrow left" />
          {[1].map((item) => (
            <div className="w-4/5 bg-base-2 flex flex-col p-8 flex-shrink">
              <div className="flex flex-row gap-6">
                <img
                  src={images.testimonialProfile}
                  alt="Testimonial Profile"
                  className="w-16 h-16"
                />
                <div className="gap-2 flex flex-col">
                  <div className={`${styles.occeanTextGradient} text-sm`}>
                    eBdesk Technology
                  </div>
                  <div className="text-white font-bold text-3xl">
                    Akbar Wah Uhuy, S.Kon.
                  </div>
                </div>
              </div>
              <p className="text-grey italic mt-6">
                “A great professional who exceeded my expectations. Did an
                excellent job. Good communication recommending improvements. I
                will continue to work with him.”
              </p>
            </div>
          ))}
          <img src={images.icArrowRight} alt="Icon arrow right" />
        </div>
      </section>
    </>
  );
};

export default Testimonials;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import { images } from "../constants";
import styles from "../style";
import MotionWrap from "../wrapper/MotionWrap";
import Divider from "./Divider";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [testimonials, setTestimonials] = useState([
    { name: "", company: "", description: "", image: "" },
  ]);
  const [testimonial, setTestimonial] = useState({ name: "", company: "" });

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client
      .fetch(query)
      .then((res) => {
        setTestimonials(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const nextPrev = (type: Boolean) => {
    if (type) {
      if (currentIndex == testimonials.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (currentIndex == 0) {
        setCurrentIndex(testimonials.length - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

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
          <img
            src={images.icArrowLeft}
            alt="Icon arrow left"
            className="hover:-translate-x-4 transition-all cursor-pointer"
            onClick={() => nextPrev(false)}
          />
          {/* {[1].map((item, index) => ( */}
          <div
            className={`w-4/5 p-1 flex-shrink transition-all ${styles.primaryGradient}`}
          >
            <div className="bg-base flex flex-col p-8">
              <div className="flex flex-row gap-6">
                {testimonials[currentIndex]?.image && (
                  <img
                    src={urlFor(testimonials[currentIndex]?.image).url()}
                    alt="Testimonial Profile"
                    className="w-16 h-16 rounded-full"
                  />
                )}

                <div className="gap-2 flex flex-col">
                  <div className={`${styles.occeanTextGradient} text-sm`}>
                    {testimonials[currentIndex]?.company}
                  </div>
                  <div className="text-white font-bold text-3xl">
                    {testimonials[currentIndex]?.name}
                  </div>
                </div>
              </div>
              <p className="text-grey italic mt-6">
                {testimonials[currentIndex]?.description}
              </p>
            </div>
          </div>
          {/* ))} */}
          <img
            src={images.icArrowRight}
            alt="Icon arrow right"
            className="hover:translate-x-4 transition-all cursor-pointer"
            onClick={() => nextPrev(true)}
          />
        </div>
      </section>
    </>
  );
};

export default MotionWrap(Testimonials, "");

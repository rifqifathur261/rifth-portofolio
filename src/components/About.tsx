import styles from "../style";
import profile from "../assets/images/1658984065190.avif";
import { images } from "../constants";
import { Button } from "../components";
import MotionWrap from "../wrapper/MotionWrap";

import { client, urlFor } from "../client.js";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState(Object);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      console.log("data euy ", data);
      setAbout(data[0]);
    });
  }, []);

  return (
    <section id="about" className={`${styles.flexCenter} ${styles.marginY}`}>
      <div className="w-full">
        <p className="text-center text-grey font-bold tracking-[0.3em] mr-">
          HI, MY NAME IS
        </p>
        <h1
          className={`${styles.primaryTextGradient} font-bold text-6xl mt-16`}
        >
          Rifqi
          <br /> front-end dev.
        </h1>
        <div className={styles.flexCenter}>
          <p className="text-center text-grey font-bold text-2xl mt-10 sm:max-w-[480px] w-full">
            {about.about}
          </p>
        </div>
        <div
          className={`flex flex-col md:flex-row gap-10 sm:gap-24 mt-20 ${styles.paddingX}`}
        >
          <div className="flex-1 flex md:justify justify-end">
            <div className="group relative w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] ">
              <div className="w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] border-[3px] border-accent rounded-lg absolute group-hover:sm:right-4 group-hover:sm:top-4 group-hover:right-2 group-hover:top-2 sm:right-6 sm:top-6 right-4 top-4 transition-all"></div>
              <div className="w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] border-[3px] border-accent rounded-lg absolute group-hover:sm:left-4 group-hover:sm:bottom-4 group-hover:left-2 group-hover:bottom-2 sm:left-6 sm:bottom-6 left-4 bottom-4 transition-all"></div>
              <img
                src={profile}
                alt="profile"
                className="w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] object-cover rounded-lg  hover:filter-none absolute"
                style={{
                  filter: "sepia(100%) hue-rotate(140deg) saturate(150%) ",
                }}
              />
            </div>
          </div>
          <div className="flex-1 text-white">
            <h1 className="text-5xl sm:text-6xl font-bold">
              <span className={`${styles.primaryTextGradient}`}>About</span> Me
            </h1>
            <p className="text-xl mt-4">
              {about.aboutDetail}
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="grid grid-cols-12">
              {about.recentTechs?.map((item: any, index: any) => (
                <div className="flex flex-row col-span-6 mt-4" key={index}>
                  <img src={images.indicator} alt="indicator" />
                  <span className="ml-4 text-xl text-grey">{item}</span>
                </div>
              ))}
            </div>

            <Button
              props={{
                text: "Resume",
                bottom: "before:-bottom-2",
                url: about.resumeLink,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(About, "");

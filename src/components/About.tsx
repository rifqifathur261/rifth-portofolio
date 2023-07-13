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
      setAbout(data[0]);
    });
  }, []);

  return (
    <section className={`${styles.flexCenter} ${styles.marginY}`}>
      <div className="w-full">
        <p className="text-center text-grey font-bold tracking-[0.3em] mr-">
          HI, MY NAME IS
        </p>
        <h1
          className={`${styles.primaryTextGradient}  font-bold text-5xl mt-16`}
        >
          {about.name}
          <br />
          Fathurrahman
          {/* <div className={`${styles.occeanTextGradient}`}>
            {about.profession}
          </div> */}
        </h1>
        <div className={styles.flexCenter}>
          <p className="text-center text-grey font-bold text-2xl mt-10 sm:max-w-[480px] w-full">
            {about.about}
          </p>
        </div>
        <div
          className={`flex flex-col md:flex-row gap-10 sm:gap-24 mt-20 ${styles.paddingX}`}
        >
          <div className="flex-1 flex md:justify md:justify-end justify-center">
            <div className="group relative w-[18rem] h-[18rem] sm:w-[20rem] sm:h-[20rem] flex justify-center items-center">
              <div className="w-[14rem] h-[14rem] sm:w-[20rem] sm:h-[20rem] border-[3px] border-accent rounded-lg absolute group-hover:sm:right-4 group-hover:sm:top-4 group-hover:right-5 group-hover:top-5 sm:right-6 sm:top-6 right-3 top-3 transition-all"></div>
              <div className="w-[14rem] h-[14rem] sm:w-[20rem] sm:h-[20rem] border-[3px] border-accent rounded-lg absolute group-hover:sm:left-4 group-hover:sm:bottom-4 group-hover:left-5 group-hover:bottom-5 sm:left-6 sm:bottom-6 left-3 bottom-3 transition-all"></div>
              {/* <img
                src={profile}
                alt="profile"
                className="w-[14rem] h-[14rem]  sm:w-[20rem] sm:h-[20rem] object-cover rounded-lg  hover:filter-none absolute"
                style={{
                  filter: "sepia(100%) hue-rotate(140deg) saturate(150%) ",
                }}
              /> */}
              {about.profileImage && (
                <img
                  src={urlFor(about.profileImage).url()}
                  alt="profile"
                  style={{
                    filter: "sepia(100%) hue-rotate(140deg) saturate(150%) ",
                  }}
                  className="w-[14rem] h-[14rem]  sm:w-[20rem] sm:h-[20rem] object-cover rounded-lg  hover:filter-none absolute"
                />
              )}
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
                <div
                  className="flex items-center flex-row col-span-6 mt-4"
                  key={index}
                >
                  <img src={images.indicator} alt="indicator" width="20" />
                  <span className="ml-4 text-lg text-grey">{item}</span>
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

export default MotionWrap(About, "", "About");

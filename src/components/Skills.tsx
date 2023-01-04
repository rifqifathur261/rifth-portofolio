import { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { Divider } from "../components";
import { images } from "../constants";
import styles from "../style";
import MotionWrap from "../wrapper/MotionWrap";

const Skills = () => {
  const [works, setWorks] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    const queryWorks = '*[_type == "works"]';

    client
      .fetch(query)
      .then((res) => {
        setSkills(res);
        console.log("skills ", res);
      })
      .catch((error) => {
        console.log(error);
      });
    client
      .fetch(queryWorks)
      .then((res) => {
        setWorks(res);
        console.log("works ", res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Divider />
      <section id="skills" className={`${styles.flexCenter} flex-col`}>
        <div className="text-center">
          <h1 className={`${styles.title} text-center`}>
            <span className={styles.primaryTextGradient}>Skills</span> &
            Experiences
          </h1>
        </div>
        <div className="flex sm:items-start items-center flex-col sm:flex-row w-full gap-20 mt-20">
          <div className="flex-1">
            <div className="flex flex-wrap md:justify-start justify-center gap-8 text-white">
              {skills.map((item: any, index) => (
                <div className={`${styles.flexCenter} flex-col`} key={index}>
                  <div className="rounded-full bg-base-2 p-5 w-20 h-20">
                    <img src={urlFor(item.image).url()} alt="Skill logo" />
                  </div>
                  <span className="mt-4">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 text-white">
            {works.map((item: any, index) => (
              <div
                className={`flex flex-row ${index > 0 ? "mt-20" : ""}`}
                key={index}
              >
                <div>{item.year}</div>

                <div className="sm:ml-20 ml-10 gap-y-4 flex flex-col">
                  {item.works.map((item: any, workIndex: any) => (
                    <div key={workIndex} className="flex flex-col">
                      <h1 className="">{item.name}</h1>
                      <span className="text-sm text-grey">{item.company}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MotionWrap(Skills, "");

import { useState } from "react";
import styles from "../style";
import { images } from "../constants";
import { Button, Divider } from "../components";
import MotionWrap from "../wrapper/MotionWrap";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const handleProjectFilter = (item: any) => {
    console.log(item);
    setActiveFilter(item);
  };
  return (
    <>
      <section id="projects">
        <Divider />

        <div className={`${styles.flexCenter} flex-col`}>
          <h1 className={styles.title}>
            Some <span className={styles.primaryTextGradient}>Things</span> I've
            Built
          </h1>

          {/* FILTERS */}
          <div className="flex flex-row mt-20">
            {["All", "UI/UX", "Web App", "Mobile App", "Games"].map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => handleProjectFilter(item)}
                  className={`text-grey py-1 px-6 cursor-pointer ${
                    activeFilter == item
                      ? "text-accent border rounded-md border-accent"
                      : ""
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* ITEMS */}
        <div className="grid grid-cols-4 gap-4 xl:py-20 py-10">
          {["1", "2", "2", "2", "2", "2", "2", "2"].map((item, index) => (
            <div className="bg-base-2 w-full rounded-lg p-4" key={index}>
              <div className="relative h-52">
                <img
                  src={images.projectImage}
                  alt="project image"
                  className="w-full absolute h-52 object-cover rounded-lg"
                />
                <div className="absolute bg-base-2 w-40 h-50 rounded-tl-lg rounded-tr-lg px-4 py-1 z-10 bottom-0 left-1/2 -ml-20 text-center text-grey">
                  <span>UI/UX</span>
                </div>
              </div>
              <div>
                <h1 className="py-4 text-white text-center font-medium">
                  Rifth Portfolio Design
                </h1>
                <p className="text-grey">
                  A Portfolio site mockup with beautyful design and fully mobile
                  responsive
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button props={{ text: "See More", bottom: "before:-bottom-2" }} />
        </div>
      </section>
    </>
  );
};

export default MotionWrap(Projects, "");

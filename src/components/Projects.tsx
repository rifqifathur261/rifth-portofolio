import { useEffect, useState } from "react";
import styles from "../style";
import { images } from "../constants";
import { Button, Divider } from "../components";
import MotionWrap from "../wrapper/MotionWrap";
import { client, urlFor } from "../client";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filters, setFilters] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleProjectFilter = (item: any) => {
    console.log(item);
    setActiveFilter(item);
  };

  useEffect(() => {
    const filterQuery = '*[_type == "projectFilters"]';
    const projectQuery = '*[_type == "projects"]';

    client.fetch(filterQuery).then((res) => {
      setFilters(res);
    });

    client.fetch(projectQuery).then((res) => {
      setProjects(res);
    });
  }, []);

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
            {filters?.map((item: any, index) => (
              <div
                key={index}
                onClick={() => handleProjectFilter(item.title)}
                className={`text-grey py-1 px-6 cursor-pointer ${
                  activeFilter == item.title
                    ? "text-accent border rounded-md border-accent"
                    : ""
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>

        {/* ITEMS */}
        <div className="grid grid-cols-4 gap-4 xl:py-20 py-10">
          {projects?.map((item: any, index) => (
            <div className="bg-base-2 w-full rounded-lg p-4" key={index}>
              <div className="relative h-52">
                <img
                  src={urlFor(item.imgUrl).url()}
                  alt="project image"
                  className="w-full absolute h-52 object-cover rounded-lg"
                />
                <div className="absolute bg-base-2 w-40 h-50 rounded-tl-lg rounded-tr-lg px-4 py-1 z-10 bottom-0 left-1/2 -ml-20 text-center text-grey">
                  <span>UI/UX</span>
                </div>
              </div>
              <div>
                <h1 className="py-4 text-white text-center font-medium">
                  {item.title}
                </h1>
                <p className="text-grey">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            props={{ text: "See More", bottom: "before:-bottom-2", url: "" }}
          />
        </div>
      </section>
    </>
  );
};

export default MotionWrap(Projects, "");

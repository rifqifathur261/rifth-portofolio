import { useEffect, useState } from "react";
import styles from "../style";
import { images } from "../constants";
import { Button, Divider } from "../components";
import MotionWrap from "../wrapper/MotionWrap";
import { client, urlFor } from "../client";
import { motion } from "framer-motion";

const Projects = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [filters, setFilters] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const filterQuery = '*[_type == "projectFilters"] | order(title asc)';
    const projectQuery = '*[_type == "projects"]';

    client.fetch(filterQuery).then((res) => {
      setFilters(res);
    });

    client.fetch(projectQuery).then((res) => {
      setProjects(res);
      setFilterWork(res);
    });
  }, []);

  const handleProjectFilter = (item: any) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    // console.log("item ", item);

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        // console.log("all");

        setFilterWork(projects);
      } else {
        // console.log("else");
        console.log("active filter ", item);
        setFilterWork(
          projects.filter((res: any) => {
            return res.tags.includes(item);
          })
        );
        // console.log(
        //   "filterwork ",
        //   projects.filter((res: any) => res.type == item)
        // );
        // console.log("filterwork ", filterWork);
        // console.log("project ", projects);
      }
    }, 500);
  };

  return (
    <>
      <section>
        <Divider />

        <div className={`${styles.flexCenter} flex-col`}>
          <h1 className={styles.title}>
            Some <span className={styles.primaryTextGradient}>Things</span> I've
            Built
          </h1>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center flex-row mt-10 sm:mt20 gap-5">
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
        {/* {filterWork.length != 0 ? ( */}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:py-20 py-10"
        >
          {filterWork.map((item: any, index) => (
            <div className="bg-base-2 w-full rounded-lg p-4" key={index}>
              <div className="relative h-52">
                {item.imgUrl && (
                  <motion.img
                    whileInView={{ scale: [0.95, 1] }}
                    whileHover={{ scale: [1, 0.95] }}
                    transition={{
                      duration: 0.25,
                    }}
                    src={urlFor(item.imgUrl).url()}
                    alt="project image"
                    className="w-full absolute h-52 object-cover rounded-lg cursor-pointer"
                  />
                )}
                <div className="absolute bg-base-2 w-40 h-50 rounded-tl-lg rounded-tr-lg px-4 py-1 z-10 bottom-0 left-1/2 -ml-20 text-center text-grey">
                  <span>{item.type}</span>
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
        </motion.div>
        {/* ) : (
          <div className="text-white flex justify-center py-48">No data</div>
        )} */}
        <div className="text-center">
          <Button
            props={{
              text: "See on Github",
              bottom: "before:-bottom-2",
              url: "https://github.com/rifqifathur261",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default MotionWrap(Projects, "", "Projects");

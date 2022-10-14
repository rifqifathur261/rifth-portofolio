import styles from "../style";
import Divider from "./Divider";

const Projects = () => (
  <section id="project">
    <Divider />

    <div className={`${styles.flexCenter} flex-col`}>
      <h1 className={styles.title}>
        Some <span className={styles.primaryTextGradient}>Things</span> I've
        Built
      </h1>

      {/* FILTERS */}
      <div className="flex flex-row">
        {["All", "UI/UX", "Web App", "Mobile App", "Games"].map(
          (item, index) => (
            <div className="text-accent" key={index}>
              {item}
            </div>
          )
        )}
      </div>

      {/* ITEMS */}
      <div className="grid-cols-4">
        <div className="text-white">test</div>
      </div>
    </div>
  </section>
);

export default Projects;

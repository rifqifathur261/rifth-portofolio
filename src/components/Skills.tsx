import { Button, Divider } from "../components";
import { layout } from "../style";
import styles from "../style";

const Skills = () => {
  return (
    <>
      <Divider />
      <section className={layout.section}>
        <div className="text-center">
          <h1 className={`${styles.title} text-center`}>
            <span className={styles.primaryTextGradient}>Skills</span> &
            Experiences
          </h1>
        </div>
        <div className="flex flex-col"></div>
      </section>
    </>
  );
};

export default Skills;

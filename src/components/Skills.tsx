import { Divider } from "../components";
import { images } from "../constants";
import styles from "../style";
import MotionWrap from "../wrapper/MotionWrap";

const Skills = () => {
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
        <div className="flex flex-row w-full gap-20 mt-20">
          <div className="flex-1">
            <div className="flex flex-wrap gap-8 text-white">
              {[
                "Vue Js",
                "React Js",
                "Tailwind",
                "Flutter",
                "tes",
                "test",
                "tes",
                "test",
                "tess",
                "tes",
                "test",
                "tes",
                "test",
                "tess",
              ].map((item, index) => (
                <div className={`${styles.flexCenter} flex-col`} key={index}>
                  <div className="rounded-full bg-base-2 p-5 w-20 h-20">
                    <img src={images.vue} alt="Skill logo" />
                  </div>
                  <span className="mt-4">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 text-white">
            <div className="flex flex-row">
              <div>2022</div>
              <div className="sm:ml-20 ml-10 gap-y-4 grid">
                <div>
                  <h1 className="">Frontend Developer</h1>
                  <span className="text-sm text-grey">PT ebDesk Teknologi</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-20">
              <div>2020</div>
              <div className="sm:ml-20 ml-10 gap-y-4 grid">
                <div>
                  <h1 className="">Fullstack Developer</h1>
                  <span className="text-sm text-grey">
                    PT Walden Global Services
                  </span>
                </div>
                <div>
                  <h1 className="">Quality Assurance</h1>
                  <span className="text-sm text-grey">
                    PT Walden Global Services
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MotionWrap(Skills, "");

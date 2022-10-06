import styles from "../style";
import profile from "../assets/images/1658984065190.jpg";
import { images } from "../constants";

const About = () => (
  <div className={`${styles.flexCenter} ${styles.marginY}`}>
    <div className="w-full">
      <p className="text-center text-grey font-bold tracking-[0.3em]">
        HI, MY NAME IS
      </p>
      <h1 className={`${styles.primaryTextGradient} font-bold text-7xl mt-16`}>
        Rifqi
        <br /> front-end dev.
      </h1>
      <div className={styles.flexCenter}>
        <p className="text-center text-grey font-bold text-2xl mt-10 sm:max-w-[480px] w-full">
          I am a frontend developer with a passion for building beautiful and a
          functional web applications.
        </p>
      </div>
      <div
        className={`flex flex-col md:flex-row gap-10 sm:gap-24 mt-20 ${styles.paddingX}`}
      >
        <div className="flex-1 flex md:justify-end justify-center">
          <div className="group relative w-[18rem] h-[18rem] sm:w-[30rem] sm:h-[30rem] ">
            <div className="w-[18rem] h-[18rem] sm:w-[30rem] sm:h-[30rem] border-[3px] border-accent rounded-lg absolute group-hover:sm:right-4 group-hover:sm:top-4 group-hover:right-2 group-hover:top-2 sm:right-6 sm:top-6 right-4 top-4 transition-all"></div>
            <div className="w-[18rem] h-[18rem] sm:w-[30rem] sm:h-[30rem] border-[3px] border-accent rounded-lg absolute group-hover:sm:left-4 group-hover:sm:bottom-4 group-hover:left-2 group-hover:bottom-2 sm:left-6 sm:bottom-6 left-4 bottom-4 transition-all"></div>
            <img
              src={profile}
              alt="profile"
              className="w-[18rem] h-[18rem] sm:w-[30rem] sm:h-[30rem] object-cover rounded-lg  hover:filter-none absolute"
              style={{
                filter: "sepia(100%) hue-rotate(140deg) saturate(150%) ",
              }}
            />
          </div>
        </div>
        <div className="flex-1 text-white">
          <h1 className="text-5xl sm:text-7xl font-bold">
            <span className={styles.primaryTextGradient}>About</span> Me
          </h1>
          <p className="text-xl mt-4">
            Hello! My name is Rifqi i am a frontend developer with experience in
            building websites for small and medium sized businesses especially
            in Web and Mobile Applications. For the past two years, i have
            worked with Big Data Company and organizations to create great
            products. I do many things, one of which is visualizing various data
            into graphs, charts, maps and so on to form a dashboard that can be
            easily read by users. I am also working on UI/UX Design and
            back-end. So if you need a whole system like a marketplace - I can
            help!
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="grid grid-cols-12">
            {["Vue JS", "React JS", "Vuetify", "Tailwind CSS"].map(
              (item, index) => (
                <div className="flex flex-row col-span-6 mt-4" key={index}>
                  <img src={images.indicator} alt="indicator" />
                  <span className="ml-4">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

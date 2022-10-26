// import { BsArrowRight } from "react-icons/bs";
import { images } from "../constants";
import styles from "../style";

const Button = ({ props = { text: "Button", bottom: "before:-bottom-1" } }) => {
  return (
    <p
      className={`group ${styles.animatedUnderline} ${props.bottom} mt-12 text-accent`}
    >
      <div className="flex">
        <span className="text-2xl">{props.text}</span>
        <img
          src={images.icArrowRight}
          alt="Icon arrow right"
          className="w-10 ml-3 transition-all duration-500 group-hover:ml-5"
        />
        {/* <BsArrowRight className="text-3xl ml-3 transition-all duration-500 group-hover:ml-5" /> */}
      </div>
    </p>
  );
};

export default Button;

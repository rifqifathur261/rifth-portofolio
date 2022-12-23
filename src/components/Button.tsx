import { images } from "../constants";
import styles from "../style";

const Button = ({
  props = { text: "Button", bottom: "before:-bottom-1", url: "rifth.my.id" },
}) => {
  return (
    <div
      className={`group ${styles.animatedUnderline} ${props.bottom} mt-12 text-accent`}
    >
      <div className="flex">
        <a className="text-2xl" href={props.url} target="_blank">
          {props.text}
        </a>
        <img
          src={images.icArrowRight}
          alt="Icon arrow right"
          className="w-10 ml-3 transition-all duration-500 group-hover:ml-6"
        />
      </div>
    </div>
  );
};

export default Button;

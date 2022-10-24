const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  flexCenter: "flex justify-center items-center",

  heading2: "font-walsheim ",

  paddingX: "sm:px-8 px-6",
  paddingY: "sm:py-8 py-6",
  padding: "sm:px-8 px-6 sm:py-6 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-28 my-6",

  imageCover: "w-screen h-screen object-cover",

  primaryTextGradient:
    "text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent",

  animatedUnderline:
    "inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:left-0 before:w-0 before:h-[0.063rem] before:rounded-full before:transition-all before:duration-500 before:bg-accent hover:before:w-full hover:before:opacity-100",

  title: "text-white text-6xl font-bold",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.marginY}`,
};

export default styles;

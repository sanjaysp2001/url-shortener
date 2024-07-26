import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className=" text-3xl sm:h-[80px] md:h-[120px] font-extrabold tracking-tight leading-none text-secondary-color md:text-5xl lg:text-6xl">
        <TypeAnimation
          sequence={[
            "Create URLs that are easy to use",
            1500,
            "Create URLs that are easy to link",
            1500,
            "Create URLs that are easy to share",
            1500,
          ]}
          wrapper="span"
          speed={35}
          repeat={Infinity}
        />
      </div>

      <p className="text-md mt-10 sm:mt-5 sm:text-md md:text-xl font-normal text-secondary-color  sm:px-16 xl:px-48 dark:text-gray-400">
        This URL Shortener works wonders by reducing your URL into managable
        size. Try it out now and be done with the hassle of long and boring
        URLS!
      </p>
    </section>
  );
};

export default Hero;

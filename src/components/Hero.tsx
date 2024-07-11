import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-secondary-color md:text-5xl lg:text-6xl">
        <TypeAnimation
          sequence={[
            "Create URLs that are easy to use!",
            1000,
            "Create URLs that are easy to remember!",
            1000,
            "Create URLs that are easy to share!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="text-lg font-normal text-secondary-color lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        This URL Shortener works wonders by reducing your URL into managable
        size. Try it out now and be done with the hassle of long and boring
        URLS!
      </p>
    </section>
  );
};

export default Hero;

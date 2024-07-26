const ImageComponent = () => {
  return (
    <div className="col-span-3 sm:col-span-3 md:col-span-1 flex justify-center">
      <img
        className="w-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] p-5 hover:scale-110 transition-transform"
        src="/assets/url.png"
        alt="url"
      ></img>
    </div>
  );
};

export default ImageComponent;

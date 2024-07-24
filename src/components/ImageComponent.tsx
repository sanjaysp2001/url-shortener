const ImageComponent = () => {
  return (
    <div className="col-span-3 md:col-span-1 flex justify-center">
      <img className="w-[350px] md:w-[350px] my-4 p-5 md:h-[350px] md:ml-[15%]  hover:scale-110 transition-transform" src="/assets/url.png" alt="url"></img>
    </div>
  );
};

export default ImageComponent;

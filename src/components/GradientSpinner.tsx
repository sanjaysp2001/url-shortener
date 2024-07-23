const GradientSpinner = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
      <div className="flex justify-center items-center h-screen">
        <div className="relative inline-flex">
          <div className="w-24 h-24 bg-bg-color rounded-full"></div>
          <div className="w-24 h-24 bg-primary-color rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-24 h-24 bg-secondary-color rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default GradientSpinner;

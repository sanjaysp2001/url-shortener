/// <reference types="vite-plugin-svgr/client" />
import URLImage from "../assets/url.svg?react";
const ImageComponent = () => {
  return (
    <div className="w-1/3">
      <URLImage />
    </div>
  );
};

export default ImageComponent;

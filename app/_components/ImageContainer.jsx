import React from "react";

const ImageContainer = ({ imageSource, description }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageSource}
        alt={description || "image"}
        className="h-auto w-[clamp(10rem,50vw,60rem)]"
      />
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ImageContainer;

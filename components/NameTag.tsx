import React from "react";
import Button from "./shared/Button";

const NameTag = () => {
  return (
    <div className="flex flex-col justify-center lg:max-w-fit max-lg:items-center max-lg:text-center max-lg:space-y-8  lg:gap-8 w-full h-full ">
      <div>
        <h1 className="text-4xl font-mono">Onur Ata Asar</h1>
        <p className="text-sm font-mono">Frontend Developer</p>
      </div>
      <a className="max-w-max" href="mailto:onurataasar@gmail.com">
        <Button onClick={() => console.log("clicked")}>
          <span className="text-sm font-mono font-light">Get in touch</span>
        </Button>
      </a>
    </div>
  );
};

export default NameTag;

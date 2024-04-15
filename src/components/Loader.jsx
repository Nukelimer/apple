
import React from "react";
import { CircleLoader } from "react-spinners";

function Loader() {
  square.register();
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
      <CircleLoader color="#eaf2f0" />
    </div>
  );
}

export default Loader;

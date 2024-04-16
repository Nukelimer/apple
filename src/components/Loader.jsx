
import React from "react";


function Loader() {
  square.register();
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
     <p>Loading Please wait...</p>
    </div>
  );
}

export default Loader;

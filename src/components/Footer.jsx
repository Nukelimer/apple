import React from "react";
import { footerLinks } from "../constants";

function Footer() {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="">
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-indigo-600">
              Find an Apple Store{""}
            </span>{" "}
            or{" "}
            <span className="underline text-indigo-600">
              other retailer{""}
            </span>{" "}
            near you.
          </p>

          <p className="font-semibold text-gray text-xs">
            Or call 2348115200000{" "}
          </p>
        </div>

        <div className="bg-neutral-600 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            {" "}
            Copyright @ Apple Inc. All rights reserved.
          </p>

          {footerLinks.map((link, i) => {
            return (
              <p className="font-semibold text-gray text-xs" key={link}>
                    {link}  
                    {i                 !== footerLinks.length - 1 && <span className="mx-2"> | </span>}
              </p>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

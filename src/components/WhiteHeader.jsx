import React from "react";

const WhiteHeader = () => {
  return (
    <div className="bg-[#ed143d]">
      <div className="2xl:flex 2xl:justify-between mt-4  ">
        <h1 className="2xl:ml-36 2xl:mt-3 sm:ml-12 sm:mt-2 xsm:ml-40 ">
          <i>
            <span className="2xl:text-4xl xsm:text-lg text-white">Port</span>
            <span className="2xl:text-4xl xsm:text-lg text-white">Folio</span>
          </i>
        </h1>
        <div className="2xl:ml-2 2xl:mt-5 sm:ml-96 sm:mt-2 xsm:ml-10 xsm:mt-8  xsm:flex">
          <ul className="flex mr-56 justify-between ">
            <a href="#body">
              <li className="text-white font-bold hover:text-blue-500 xsm:text-xs 2xl:text-lg">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="ml-8 text-white font-bold hover:text-blue-500 xsm:text-xs 2xl:text-lg">
                About
              </li>
            </a>

            <a href="#skills">
              <li className="ml-8 text-white font-bold hover:text-blue-500 xsm:text-xs 2xl:text-lg">
                Skills
              </li>
            </a>
            <a href="#projects">
              <li className="ml-8 text-white font-bold hover:text-blue-500 xsm:text-xs 2xl:text-lg">
                Projects
              </li>
            </a>
            <a href="#contact">
              <li className="ml-8 text-white font-bold hover:text-blue-500 xsm:text-xs 2xl:text-lg">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhiteHeader;

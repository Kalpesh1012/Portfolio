import React from "react";
import Header from "./Header";

const Body = () => {
  return (
    <div className="flex ">
      <div className="2xl:mt-60 2xl:ml-36 xsm:mt-52 xsm:ml-24">
        <h1 className="2xl:text-2xl xsm:text-lg text-white">Hello 👋 I'm</h1>
        <h1 className="2xl:mt-5 xsm:mt-2 2xl:text-6xl xsm:text-2xl text-pink-500">
          Kalpesh Mahale
        </h1>
        <h1 className="2xl:mt-5 xsm:mt-2  2xl:text-5xl xsm:text-2xl text-white">
          From India
        </h1>
        <a href="https://www.linkedin.com/in/kalpesh1012/" target="_blank">
          <button className="h-12  w-48  text-white mt-7 bg-[#ed143d] rounded-lg 2xl:text-xl xsm:text-lg">
            I'm looking to hire
          </button>
        </a>
      </div>
      <div className="mt-24 ml-96 2xl:mb-[420px] xsm:mb-[510px]"></div>
    </div>
  );
};

export default Body;

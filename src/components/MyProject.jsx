import React from "react";
import WhiteHeader from "./WhiteHeader";

const MyProject = () => {
  return (
    <div className="bg-white  " id="projects">
      <WhiteHeader />
      <div>
        <h1 className="2xl:ml-[670px] 2xl:pt-4 2xl:text-4xl xsm:ml-36 xsm:mt-2 font-bold ">
          My Projects
        </h1>
        <h1 className="2xl:ml-[665px] 2xl:pt-2 2xl:text-xl xsm:ml-28 text-pink-700">
          ___Check My Work___
        </h1>
      </div>
      <div className="2xl:flex 2xl:ml-14 2xl:pb-40 xsm:pb-12">
        <div className="2xl:h-[340px] 2xl:w-96 border-2 2xl:ml-12 pb-48 2xl:mt-32 mb-8 bg-slate-900 rounded-xl hover:outline-dashed xsm:h-24 xsm:w-80 xsm:ml-7 xsm:mt-4">
          <a href="https://video-streamings.netlify.app/" target="_blank">
            <img
              className="2xl:mt-5 2xl:h-60 2xl:w-80 2xl:ml-8 border-2 border-red-600 rounded-lg hover:border-4 hover:border-white cursor-pointer xsm:h-36 xsm:w-72 xsm:ml-3 xsm:mt-2"
              src="public\assets\videostreaming.png"
              alt="Youtube-app"
            />
            <h1 className="text-white zxl:ml-12 2xl:mt-3 2xl:text-lg cursor-pointer xsm:mt-1 xsm:ml-6">
              Video Streaming App using React.js
            </h1>
          </a>
        </div>
        <div className="2xl:h-[340px] 2xl:w-96 border-2 2xl:ml-12 pb-48 2xl:mt-32 mb-8 bg-slate-900 rounded-xl hover:outline-dashed xsm:h-24 xsm:w-80 xsm:ml-7 xsm:mt-4">
          <a href="https://food-delivery-apps.netlify.app/" target="_blank">
            <img
              className="2xl:mt-5 2xl:h-60 2xl:w-80 2xl:ml-8 border-2 border-red-600 rounded-lg hover:border-4 hover:border-white cursor-pointer xsm:h-36 xsm:w-72 xsm:ml-3 xsm:mt-2"
              src="public\assets\foodapp.png"
              alt="Food-app"
            />
            <h1 className="text-white zxl:ml-12 2xl:mt-3 2xl:text-lg cursor-pointer xsm:mt-1 xsm:ml-16">
              Food App using React.js
            </h1>
          </a>
        </div>
        <div className="2xl:h-[340px] 2xl:w-96 border-2 2xl:ml-12 pb-48 2xl:mt-32 2xl:mb-8 bg-slate-900 rounded-xl hover:outline-dashed xsm:h-24 xsm:w-80 xsm:ml-7 xsm:mt-4 ">
          <a
            href="https://kalpeshmahale10-bank-app.netlify.app/"
            target="_blank"
          >
            <img
              className="2xl:mt-5 2xl:h-60 2xl:w-80 2xl:ml-8 border-2 border-red-600 rounded-lg hover:border-4 hover:border-white cursor-pointer xsm:h-36 xsm:w-72 xsm:ml-3 xsm:mt-2"
              src="public\assets\bankapp.png"
              alt="Bank-app"
            />
            <h1 className="text-white zxl:ml-12 2xl:mt-3 2xl:text-lg cursor-pointer xsm:mt-1 xsm:ml-16">
              Bank App using JavaScript
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProject;

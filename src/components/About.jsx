import React from "react";
import WhiteHeader from "./WhiteHeader";

const About = () => {
  return (
    <div>
      <div className="bg-white mt-36 " id="about">
        <WhiteHeader />
        <div>
          <h1 className="2xl:ml-[700px] 2xl:pt-4 2xl:text-4xl xsm:ml-36 xsm:mt-2">
            About Me
          </h1>
          <h1 className="2xl:ml-[705px] 2xl:pt-2 2xl:text-xl text-pink-700 xsm:ml-[124px]">
            ___Who Am i___
          </h1>
        </div>
        <div className="2xl:flex">
          <div className="ml-36">
            <img
              className="2xl:mt-24 2xl:h-80 2xl:w-72 2xl:rounded-xl xsm:mt-24 xsm:h-24 xsm:w-24 xsm:rounded-full xsm:border-2"
              src="public\assets\owner.jpg"
              alt="owner"
            />
          </div>
          <div className="2xl:mt-44 2xl:ml-16 2xl:mb-64 xsm:mt-6 xsm:ml-6 xsm:pb-48">
            <h1 className="2xl:text-xl xsm:text-lg font-bold">
              I'm a Kalpesh and I'm a{" "}
              <span className="text-pink-700">React.js Developer</span>
            </h1>
            <p className="text-lg 2xl:h-14 2xl:w-[670px] mt-1">
              Self-motivated and hardworking, seeking opportunities to work in a
              challenging environment where I can utilize my skills for the
              growth of the organization. Solution-focused, self-taught Web
              Developer skilled in React.js, JavaScript, HTML5, CSS3 with an
              eagerness to learn new technologies..
            </p>
            <a
              href="https://drive.google.com/file/d/1NGKYqM1cU4OAVSy414sqvpy9g3xSD7kH/view"
              target="_blank"
            >
              <button className="2xl:mt-20 xsm:mt-8 h-12 w-48 border-2 rounded-lg bg-[#ed143d] ">
                <span className="text-2xl text-white">Download CV</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

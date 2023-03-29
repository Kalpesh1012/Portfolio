import React from "react";
import Header from "./Header";

const Skills = () => {
  return (
    <div id="skills">
      <Header />
      <div>
        <h1 className="2xl:ml-[670px] 2xl:pt-4 2xl:text-4xl xsm:ml-36 xsm:mt-3 text-white">
          My Skills
        </h1>
        <h1 className="2xl:ml-[655px] 2xl:pt-2 2xl:text-xl xsm:ml-28  text-pink-700">
          ___What i Know___
        </h1>
      </div>
      <div className="2xl:mt-36 2xl:ml-44 2xl:flex xsm:mt-16 xsm:ml-2">
        <div className="">
          <h1 className="text-white text-xl font-bold">
            My creative skills & experiences
          </h1>
          <p className="text-white 2xl:h-14 2xl:w-[620px] mt-3 2xl:text-lg xsm:w-96">
            I am a React Js Developer with a passion for learning and can work
            with estimation of future tasks and client feedback. I am
            highly-motivated, result oriented, self-driven, hard-working, fast
            learner and constantly seeking to improve my skills and am fully
            aware of the latest Front-end Development Tools. I have a firm
            knowledge of JavaScript and React Js, Parcel js, Redux, HTML5, CSS3,
            Tailwind CSS and possess a good knowledge of computer Programming
            Knowledge like Java, Python.
          </p>
        </div>
        <div className="flex flex-wrap 2xl:ml-24 2xl:mt-16 h-56 w-96 border-[1px] border-black xsm:mt-16 xsm:ml-4  mb-48">
          <a href="https://www.w3schools.com/TAGS/default.asp" target="_blank">
            <img
              src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
              className="h-12 w-12 mt-3"
              alt="HTML"
            ></img>
          </a>
          <a href="https://www.w3schools.com/css/default.asp" target="_blank">
            <img
              src="https://images7.webydo.com/90/9098746/3958/46d2d005-1b02-4961-aa1d-0aba7f7209bd.jpg"
              className="h-16 w-20 ml-6"
              alt="CSS"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              className="h-[52px] w-24 ml-3 mt-3"
              src="https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA34/l8bWxNY_DwMrowIr4rjV7KHpUHTIDpsRQCLcBGAsYHQ/w1200-h630-p-k-no-nu/js.png"
              alt="JavaScript"
            ></img>
          </a>
          <a
            href="public\assets\jsimages-removebg-preview (2).png"
            target="_blank"
          >
            <img
              className="h-12 w-12 ml-6 mt-3"
              alt="React"
              src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
            />
          </a>
          <a
            href="https://redux.js.org/introduction/getting-started"
            target="_blank"
          >
            <img
              className="h-12 w-12 ml-1"
              alt="Redux"
              src="https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text-thumbnail.png"
            />
          </a>
          <a href="https://v2.tailwindcss.com/docs" target="_blank">
            <img
              alt="TailwindCss"
              className="h-12 w-12 ml-11"
              src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;

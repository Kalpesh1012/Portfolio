import React, { useState } from "react";
import Header from "./Header";

const Contact = () => {
  const [text, SetText] = useState("");
  const [textemail, SetTextEmail] = useState("");
  const [textsub, SetTextSub] = useState("");
  const [textpro, SetTextPro] = useState("");
  return (
    <div id="contact">
      <Header />
      <div>
        <h1 className="2xl:ml-[670px] 2xl:pt-4 2xl:text-4xl xsm:ml-36 xsm:mt-2 font-bold text-white ">
          Contact Me
        </h1>
        <h1 className="2xl:ml-[685px] 2xl:pt-2 2xl:text-xl xsm:ml-32 text-pink-700">
          ___get in touch___
        </h1>
      </div>
      <div className=" 2xl:mt-10 2xl:flex xsm:mt-4">
        <div>
          <div className=" 2xl:ml-44 xsm:ml-2 ">
            <h1 className="text-white text-xl font-semibold ">
              Reach Out to me!
            </h1>
            <h1 className="text-white mt-3 2xl:text-lg">
              Discuss a Project or just want to say Hi? My inbox is open for
              all.
            </h1>
          </div>
          <div className="2xl:ml-44 mt-5 xsm:ml-2">
            <div className="flex">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkAbkHI00neFqI-Yma18hmdKID7Lehoe09y_Upz-KHA&s"
                  className="h-8 w-8 mt-2"
                  alt="Contact"
                />
              </div>
              <div className="ml-8">
                <h1 className="text-white text-lg font-bold">Name</h1>
                <h1 className="text-white">Kalpesh Mahale</h1>
              </div>
            </div>
            <div className="mt-4 flex">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFO0IrL6BVGzEpEC6ESKo7Py6X2Cn4880GWqM9Nk&s"
                  className="h-8 w-8 mt-2"
                  alt="Home"
                />
              </div>
              <div className="ml-8">
                <h1 className="text-white text-lg font-bold">Address</h1>
                <h1 className="text-white">Surat,India</h1>
              </div>
            </div>
            <div className="mt-4 flex">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFjHL7eoAgha74ZCj7y2TVjizk_W7y6Sp2g&usqp=CAU"
                  className="h-8 w-8 mt-2"
                  alt="Email"
                />
              </div>
              <div className="ml-8">
                <h1 className="text-white text-lg font-bold">Email</h1>
                <h1 className="text-white">mahalekalpesh10@gmail.com</h1>
              </div>
            </div>
          </div>
          <div className="2xl:ml-44 mt-4 xsm:ml-2">
            <h1 className="text-white font-semibold text-lg">Stay Connected</h1>
            <div className=" flex">
              <a
                href="https://www.linkedin.com/in/kalpesh1012/"
                target="_blank"
              >
                <img
                  className="h-9 w-9 mt-3"
                  alt="Linkedin"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4AyLdicKBXEI3jTqOQZwzLYAXtNWXmpdYzWzliI&s"
                />
              </a>
              <a href="https://github.com/Kalpesh1012" target="_blank">
                <img
                  className="h-9 w-9 ml-5 mt-3"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcSt-iAyDuCTyPEr5RlD6nBcJNzvnVcjmEby7wHk&s"
                  alt="Github"
                />
              </a>
              <a
                href="https://www.instagram.com/mahale.kalpesh10/"
                target="_blank"
              >
                <img
                  className="h-9 w-9 ml-5 mt-3"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTann9Wjf2-rjlzGZopmhLBBV9QQJaEw83A&usqp=CAU"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="2xl:ml-32 xsm:ml-2 xsm:mt-2">
          <h1 className="text-white font-bold 2xl:ml-0 xsm:ml-36">
            Message Me
          </h1>
          <form
            id="form"
            onSubmit={(e) => {
              e.preventDefault();
              let data = new FormData(form);
              fetch(
                "https://script.google.com/macros/s/AKfycbwyk7tBKxoGdYnsOcia184zUpcj_vj38tfrCSmYE5eMa8qhx01YRdRaE1LStUdbYBFD/exec",
                { method: "POST", body: data }
              )
                .then((res) => res.text())
                .then((data) => console.log(data));
              SetText("");
              SetTextEmail("");
              SetTextPro("");
              SetTextSub("");
            }}
          >
            <div className="mt-3">
              <input
                placeholder="Name"
                name="name"
                className="2xl:h-9 2xl:w-64 rounded-md pl-4 xsm:w-44"
                type="text"
                value={text}
                onChange={(e) => {
                  SetText(e.target.value);
                }}
              ></input>
              <input
                placeholder="Email"
                name="email"
                className="2xl:ml-5 2xl:h-9 2xl:w-64 rounded-md pl-4 xsm:w-44 xsm:ml-6"
                type="email"
                value={textemail}
                onChange={(e) => {
                  SetTextEmail(e.target.value);
                }}
              ></input>
            </div>
            <input
              placeholder="Subject"
              name="subject"
              className="mt-4 2xl:h-10 w-full rounded-md pl-4 xsm:h-8"
              type="text"
              value={textsub}
              onChange={(e) => {
                SetTextSub(e.target.value);
              }}
            ></input>
            <input
              placeholder="Describe Project"
              name="project"
              className="mt-4 2xl:h-36 w-full rounded-md 2xl:pb-28 pl-2 xsm:h-24 text-black xsm:pb-20"
              type="text"
              value={textpro}
              onChange={(e) => {
                SetTextPro(e.target.value);
              }}
            ></input>
            <button className="2xl:h-12 xsm:h-9 w-48 mt-4 rounded-lg text-white text-xl bg-[#ed143d] 2xl:mb-48 xsm:mb-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import TItle from "../TItle/TItle";
import Next from "../../assets/next-icon.png";
import Back from "../../assets/back-icon.png";
import User1 from "../../assets/user-1.png";
import User2 from "../../assets/user-2.png";
import User3 from "../../assets/user-3.png";
import User4 from "../../assets/user-4.png";

const Testimonials = () => {

  const slide = useRef();
  let tx = 0;

  const next = () => {
    if(tx > -50){
      tx -= 25;
      slide.current.style.transform = `translateX(${tx}%)`;
    }
  }
  return (
    <>
      <TItle subtitle="Testimonials" title="What Our Students Says ?" />
      <section className="testimonials relative w-[80vw] mx-auto overflow-hidden">
        <button className="next absolute bg-blue-800 p-2 top-1/2 left-auto right-0 -translate-[50%] rounded-full">
          <img src={Next} className="w-6" alt="" />
        </button>

        <button 
        onClick={()=> next}
        className="next absolute bg-blue-800 p-2 top-1/2 left-5 -translate-[50%] rounded-full">
          <img src={Back} className="w-6" alt="" />
        </button>

        <div className="-translateX-[50%] slider flex gap-5 w-[200vw]" ref={slide}>
          <div 
          className="slide flex flex-col gap-5 shadow-xl p-15 w-[40vw]">
            <div className="user flex gap-5 items-center">  
              <img
                src={User1}
                className="w-20 rounded-full border-[4px] border-blue-900"
                alt=""
              />
              <div className="name">
                <h1 className="text-xl font-bold text-[#212EA0]">
                  William Jackson
                </h1>
                <p className="text-gray-600 text-sm">California, USA</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              I am very happy with the quality of the course and the support I
              received from the team. I would highly recommend this course to
              anyone who wants to learn more about web development.
            </p>
          </div>

          <div className="slide flex flex-col gap-5 shadow-xl p-15 w-[40vw]">
            <div className="user flex gap-5 items-center">
              <img
                src={User2}
                className="w-20 rounded-full border-[4px] border-blue-900"
                alt=""
              />
              <div className="name">
                <h1 className="text-xl font-bold text-[#212EA0]">
                  William Jackson
                </h1>
                <p className="text-gray-600 text-sm">California, USA</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              I am very happy with the quality of the course and the support I
              received from the team. I would highly recommend this course to
              anyone who wants to learn more about web development.
            </p>
          </div>

          <div className="slide flex flex-col gap-5 shadow-xl p-15 w-[40vw]">
            <div className="user flex gap-5 items-center">
              <img
                src={User3}
                className="w-20 rounded-full border-[4px] border-blue-900"
                alt=""
              />
              <div className="name">
                <h1 className="text-xl font-bold text-[#212EA0]">
                  William Jackson
                </h1>
                <p className="text-gray-600 text-sm">California, USA</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              I am very happy with the quality of the course and the support I
              received from the team. I would highly recommend this course to
              anyone who wants to learn more about web development.
            </p>
          </div>

          <div className="slide flex flex-col gap-5 shadow-xl p-15 w-[40vw">
            <div className="user flex gap-5 items-center">
              <img
                src={User4}
                className="w-20 rounded-full border-[4px] border-blue-900"
                alt=""
              />
              <div className="name">
                <h1 className="text-xl font-bold text-[#212EA0]">
                  William Jackson
                </h1>
                <p className="text-gray-600 text-sm">California, USA</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              I am very happy with the quality of the course and the support I
              received from the team. I would highly recommend this course to
              anyone who wants to learn more about web development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

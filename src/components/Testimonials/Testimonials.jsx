import React, { useRef, useState } from "react";
import User1 from "../../assets/user-1.png";
import User2 from "../../assets/user-2.png";
import User3 from "../../assets/user-3.png";
import User4 from "../../assets/user-4.png";
import Next from "../../assets/next-icon.png";
import Back from "../../assets/back-icon.png";
import Title from "../TItle/TItle";

const Testimonials = () => {
  const slide = useRef();
  const [tx, setTx] = useState(0);

  const next = () => {
    if (tx > -75) {
      const newTx = tx - 25;
      setTx(newTx);
      slide.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  const prev = () => {
    if (tx < 0) {
      const newTx = tx + 25;
      setTx(newTx);
      slide.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  return (
    <>
      <Title subtitle="Testimonials" title="What Our Students Say?" />

      <section className="testimonials relative w-[80vw] mx-auto overflow-hidden">
        <button
          onClick={next}
          className="next absolute bg-blue-800 p-2 top-1/2 left-auto right-0 -translate-y-1/2 rounded-full"
        >
          <img src={Next} className="w-6" alt="Next" />
        </button>

        <button
          onClick={prev}
          className="prev absolute bg-blue-800 p-2 top-1/2 left-5 -translate-y-1/2 rounded-full"
        >
          <img src={Back} className="w-6" alt="Back" />
        </button>

        <div
          className="slider flex gap-5 w-[400%] transition-transform duration-300"
          ref={slide}
        >
          <div className="slide flex flex-col gap-5 shadow-xl p-15 w-[40vw]">
            <div className="user flex gap-5 items-center">
              <img
                src={User1}
                className="w-20 rounded-full border-[4px] border-blue-900"
                alt="User 1"
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
                alt="User 2"
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
                alt="User 3"
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
                src={User4}
                className="w-20 rounded-full border-[4px] border-blue-900"
                alt="User 4"
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

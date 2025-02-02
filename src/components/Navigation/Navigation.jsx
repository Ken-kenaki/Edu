import React from "react";
import Logo from "../../assets/logo.png";

const Navigation = ({ sticky }) => {
  return (
    <nav
      className={`${
        sticky ? "lg:bg-[#212EA0] transition-all delay-100 " : ""
      }fixed lg:w-full lg:h-22 lg:flex-row z-10 flex lg:items-center lg:justify-evenly py-3 w-[40vw] flex-col right-0  h-screen gap-10 items-center pt-10`}
    >
      <div className="logo">
        <img className="w-[180px]" src={Logo} alt="" />
      </div>
      <ul className="flex lg:flex-row flex-col lg:items-center lg:justify-evenly text-white lg:gap-9 text-nowrap gap-10 items-center">
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li>
          <button className=" px-3 py-2 bg-white text-black rounded-full hover:opacity-80">
            Contact us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React from "react";
import Program_1 from "../../assets/program-1.png";
import Program_2 from "../../assets/program-2.png";
import Program_3 from "../../assets/program-3.png";
import Program_3_icon from "../../assets/program-icon-3.png";
import Program_2_icon from "../../assets/program-icon-2.png";
import Program_1_icon from "../../assets/program-icon-1.png";

const Program = () => {
  return (
    <>
    <div className="flex justify-center gap-8 w-[80vw] mx-auto mt-10">
      <div className="program-card relative group">
        <img src={Program_1} alt="" className="rounded-xl" />
        <div className="rounded-xl group-hover:opacity-100 group-hover:bg-linear-to-r from-[rgba(8,0,58,0.5)] to-[rgba(8,0,58,0.5)] group-hover:pt-0 pt-[70%] transition-all duration-500 opacity-0 text-white caption absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3">
          <img src={Program_1_icon} alt="" />
          <p>Bachelors Degree</p>
        </div>
      </div>

      <div className="program-card relative group rounded-xl">
        <img src={Program_2} alt="" className="rounded-xl" />
        <div className="rounded-xl group-hover:opacity-100 group-hover:bg-linear-to-r from-[rgba(8,0,58,0.5)] to-[rgba(8,0,58,0.5)] group-hover:pt-0 pt-[70%] transition-all duration-500 opacity-0 text-white caption absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3">
          <img src={Program_2_icon} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>

      <div className="program-card relative group rounded-xl">
        <img src={Program_3} alt="" className="rounded-xl" />
        <div className="rounded-xl group-hover:opacity-100 group-hover:bg-linear-to-r from-[rgba(8,0,58,0.5)] to-[rgba(8,0,58,0.5)] group-hover:pt-0 pt-[70%] transition-all duration-500 opacity-0 text-white caption absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3">
          <img src={Program_3_icon} alt="" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
    </>
  )
};

export default Program;

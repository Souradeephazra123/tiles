import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Sidebar from "./sidebar";
const Content3 = () => {
  return (
    <div className="w-full h-full bg-orange-50 absolute top-0 right-0 text-sm">
      <Sidebar />
      <div className="container flex flex-row items-center gap-10 justify-center">
        <div className="w-1/5 h-40 mt-52 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col">
          <div className="w-6 h-20 bg-orange-400 "></div>
          <div className="flex items-center gap-2">
            <FaLongArrowAltLeft />
            3" -4" <FaLongArrowAltRight />
          </div>
          <p className="absolute -bottom-5 left-0">3"-4" Widths</p>
          <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" />
        </div>

        <div className="w-1/5 h-40 mt-52 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col">
          <div className="w-8 h-20 bg-orange-400"></div>
          <div className="flex items-center gap-2">
            <FaLongArrowAltLeft />
            5"- 6" <FaLongArrowAltRight />
          </div>
          <p className="absolute -bottom-5 left-0">5"-6" Widths</p>
          <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" />
        </div>
        <div className="w-1/5 h-40 mt-52 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col">
          <div className="w-10 h-20 bg-orange-400"></div>
          <div className="flex items-center gap-2">
            <FaLongArrowAltLeft />
            7"- 9" <FaLongArrowAltRight />
          </div>
          <p className="absolute -bottom-5 left-0">7"-9" Widths</p>
          <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" />
        </div>
        <div className="w-1/5 h-40 mt-52 border-t-2 border-b-2 border-pink-950 relative flex items-center flex-col">
          <div className="flex flex-row items-center gap-1">
            <div className="w-8 h-20 bg-orange-400"></div>
            <div className="w-6 h-20 bg-orange-400"></div>
            <div className="w-10 h-20 bg-orange-400"></div>
          </div>
          <div className="flex items-center gap-2">
            <FaLongArrowAltLeft />
            Multiple Widths <FaLongArrowAltRight />
          </div>
          <p className="absolute -bottom-5 left-0">Multiple Widths</p>
          <CiCirclePlus className="w-7 h-7 absolute -top-4 -right-6" />
        </div>
      </div>

      <button className="mt-12 w-40 absolute left-16 rounded-2xl p-1 border-solid border-2 border-slate-400">
        Previous Question
      </button>

<<<<<<< HEAD
      <div className="mt-12 flex flex-row absolute right-16 gap-4  text-gray-400">
=======
      <div className="mt-12   flex flex-row absolute right-16 gap-4  text-gray-400">
>>>>>>> 8286a175ec03d62819eee37cab290a6801909408
        <p>
          {" "}
          Products available (728){" "}
          <span className=" underline ">Skip to results</span>
        </p>
        <button className=" w-40 rounded-2xl p-1 border-solid border-2 bg-slate-500 text-white border-slate-500">
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Content3;

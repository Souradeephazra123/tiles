import React from "react";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import { CiCirclePlus } from "react-icons/ci";
const Content1 = () => {
  return (
    <div className="w-74 h-full bg-orange-50 absolute top-0 right-0 text-sm ">
      {/* card */}
      <div className="card-container flex flex-row justify-center pt-36 gap-20">
        <div className="card-1 max-w-xs relative">
          <img className=" w-44 h-52" src={Image1} alt="None" />
          <h4 className="font-bold">Wood Look</h4>
          <p className=" text-gray-400">
            Whether you're looking for real hardwood or floors that look like
            real hardwood, you'll find a variety of colors and widths of planks
            to help you find the perfect floor.
          </p>
          <CiCirclePlus className="top-0 right-0 absolute w-7 h-7 opacity-50" />
        </div>
        <div className="card-2 max-w-xs relative">
          <img className=" w-44 h-52" src={Image2} alt="" />
          <h3 className="font-bold">Tile Look</h3>
          <p className="text-gray-400">
            From concrete to Carrarra marble to the hottest tile looks,
            available in oversize rectangles to square tile looks to designer
            curated sheet vinyl.
          </p>
          <CiCirclePlus className="top-0 right-0 absolute w-7 h-7 opacity-50" />
        </div>
      </div>
      <button className="mt-8 w-40 absolute left-16 rounded-2xl p-1 border-solid border-2 border-slate-400">
        Previous Question
      </button>

      <div className="mt-8 flex flex-row absolute right-16 gap-4  text-gray-400">
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

export default Content1;

import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

const Sidebar = ({ onCircleClick }) => {
  const [selected, setSelected] = useState("content1");
  const getCIrcleClassname = (content) => {
    return `circle w-5 h-5 rounded-full mb-20 ${
      selected === content ? "bg-blue-500" : "bg-black"
    }`;
  };
  return (
    <div className="sidebar w-1/4 h-screen bg-slate-300 rounded flex flex-col pt-4 px-3 ">
      {/* <div className="flex flex-col flex-grow "> */}
      <div className="mb-10">QUESTION 1 0F 6</div>
      {/* <p className="mb-10"> QUESTION 1 0F 6</p> */}
      <div className="circle-container flex flex-col ">
        <div className="part-circle flex flex-row gap-x-3">
          <div>
            <div className="circle w-5 h-5 bg-black rounded-full mb-20"></div>
          </div>
          <div className=" text-lg font-bold ">
            Which Room's are you shopping for new Flooring?
          </div>
        </div>
        <div className="part-circle flex flex-row gap-x-3">
          <div>
            <div className="circle w-5 h-5 bg-black rounded-full mb-20"></div>
          </div>
          <div className=" text-lg font-bold">
            Which Room's are you shopping for new Flooring?
          </div>
        </div>
        <div className="part-circle flex flex-row gap-x-3">
          <button
            onClick={() => {
              onCircleClick("content1");
              setSelected("content1");
            }}
          >
            <div className={getCIrcleClassname("content1")}></div>
          </button>
          <div className=" text-lg font-bold">
            Which Room's are you shopping for new Flooring?
          </div>
        </div>
        <div className="part-circle flex flex-row gap-x-3">
          <button
            onClick={() => {
              onCircleClick("content2");
              setSelected("content2");
            }}
          >
            <div className={getCIrcleClassname("content2")}></div>
          </button>
          <div className=" text-lg font-bold">
            Which Room's are you shopping for new Flooring?
          </div>
        </div>
        <div className="part-circle flex flex-row gap-x-3">
          <button
            onClick={() => {
              onCircleClick("content3");
              setSelected("content3");
            }}
          >
            <div className={getCIrcleClassname("content3")}></div>
          </button>
          <div className=" text-lg font-bold">
            Which Room's are you shopping for new Flooring?
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Sidebar;

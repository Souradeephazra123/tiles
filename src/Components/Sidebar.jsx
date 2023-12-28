import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState("");
  console.log("Current selected state:", selected);
  const navigate = useNavigate();

  const getCircleClassName = (content) => {
    const isSelected = selected === content;
    return `circle relative z-20 w-5 h-5 rounded-full mb-20 ${
      isSelected ? "bg-red-700 ring-0" : "bg-transparent ring-2 ring-brown-700"
    }`;
  };

  const circleData = [
    {
      id: "/content1",
      tag: "content1",
      text: "Which Room's are you shopping for new Flooring?",
    },
    {
      id: "/content2",
      tag: "content2",
      text: "Another question text for content2",
    },
    {
      id: "/content3",
      tag: "content3",
      text: "Another question text for content3",
    },
    {
      id: "/content4",
      tag: "content4",
      text: "Another question text for content4",
    },
    {
      id: "/content5",
      tag: "content5",
      text: "Another question text for content5",
    },
    {
      id: "/content6",
      tag: "content6",
      text: "Another question text for content6",
    },
    // Add more circle data as needed
  ];

  return (
    <div className="sidebar w-screen top-0 left-0 z-0 bg-slate-300 rounded flex flex-row gap-6 pt-4 px-3">
      {/* <div className="mb-10">QUESTION 1 OF 6</div> */}
      <h1 className="w-1/2 text-2xl px-32 font-bold  text-rose-900">
        {circleData.map((circle) => {
          return circle.tag === selected ? circle.text : null;
        })}
      </h1>

      <div className="top-10 w-1/2 circle-container flex flex-row gap-10 relative items-centre justify-center">
        {circleData.map((circle, index) => (
          <div key={circle.id} className="part-circle flex flex-row ">
            <button
              onClick={() => {
                setSelected(circle.tag);
                navigate(circle.id);
              }}
            >
              <div className={getCircleClassName(circle.tag)}></div>
            </button>
            {index < circleData.length && (
              <div className="line absolute top-2 left-39 right-40 z-0  h-0.5 w-1/2 bg-orange-50 "></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

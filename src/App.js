import "./App.css";
import Content1 from "./Components/Content1";
import Content2 from "./Components/Content2";
import Content3 from "./Components/Content3";
import Sidebar from "./Components/sidebar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App"> 
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/content1" default element={<Content1 />} />
        <Route path="/content2" element={<Content2 />} />
        <Route path="/content3" element={<Content3 />} />
      </Routes>
    </div>
  );
}

export default App;

// import { useState, Routes, Route } from "react";
// import "./App.css";
// import Content1 from "./Components/Content1";
// import Content2 from "./Components/Content2";
// import Content3 from "./Components/Content3";
// import Sidebar from "./Components/sidebar";

// function App() {
//   // const [selectedContent, setSelectedContent] = useState("content1");

//   // const handleCircleClick = (content) => {
//   //   setSelectedContent(content);
//   //   console.log(`Circle ${content} clicked`);
//   // };
//   // App grid gap-10

//   return (
//     <div className="App">
//       <Sidebar  />
//       {/*
//       {selectedContent === "content1" && <Content1 />}
//       {selectedContent === "content2" && <Content2 />}
//       {selectedContent === "content3" && <Content3 />}
//        */}
//       <Routes>
//         <Route path="/" element={<Content1 />} />
//         <Route path="/content2" element={<Content2 />} />
//         <Route path="/content3" element={<Content3 />} />
//       </Routes>

//       {/*
//       <Content1 path="/" />
//       <Content2 path="/content2" />
//       <Content3 path="/content3" /> */}
//     </div>
//   );
// }

// export default App;

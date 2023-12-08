// import "./App.css";
// import Content1 from "./Components/Content1";
// import Content2 from "./Components/Content2";
// import Content3 from "./Components/Content3";
// import Sidebar from "./Components/Sidebar";
// import { Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <div className="App grid gap-10">
//       <Sidebar />

//       <Routes>
//         <Route path="/" default element={<Content1 />} />
//         <Route path="/" element={<Content2 />} />
//         <Route path="/" element={<Content3 />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import Content1 from "./Components/Content1";
import Content2 from "./Components/Content2";
import Content3 from "./Components/Content3";
import Sidebar from "./Components/Sidebar";

function App() {
  const [selectedContent, setSelectedContent] = useState("content1");

  const handleCircleClick = (content) => {
    setSelectedContent(content);
  };
 

  return (
    <div className="App grid gap-10">
      <Sidebar onCircleClick={handleCircleClick} />

      {selectedContent === "content1" && <Content1 />}
      {selectedContent === "content2" && <Content2 />}
      {selectedContent === "content3" && <Content3 />}
    </div>
  );
}

export default App;

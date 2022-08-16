import React from "react";
import Main from "./main";


const App = () => {
  const slides = [
    { url: "imagen1", title: "beach" },
    { url: "http://localhost:3000/image-2.png", title: "boat" },
    { url: "http://localhost:3000/image-3.png", title: "forest" },
    { url: "http://localhost:3000/image-4.png", title: "city" },
    { url: "http://localhost:3000/image-5.png", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <div style={containerStyles}>
        <Main slides={slides} />
      </div>
    </div>
  );
};

export default App;

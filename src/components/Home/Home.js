import React from "react";
import "./styles/style.css";
import doc from "./images/doc.png";

const Home = () => {
  return (
    <div className="home">
      <div className="folderContainer">
        <div className="journal">
          <img alt="" src={doc}></img>
          <div>Journal</div>
        </div>
        <div className="images">
          <img alt="" src={doc}></img>
          <div>Images</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

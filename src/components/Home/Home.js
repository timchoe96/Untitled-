import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";
import doc from "./images/doc.png";

const Home = () => {
  return (
    <div className="home">
      <div className="folderContainer">
        <div className="journalFolder">
          <Link to="/Journal">
            <img alt="" src={doc}></img>
          </Link>
          <div>Journal</div>
        </div>
        <div className="imagesFolder">
          <Link to="/Images">
            <img alt="" src={doc}></img>
          </Link>
          <div>Images</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

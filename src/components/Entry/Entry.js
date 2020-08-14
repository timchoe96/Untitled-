import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import "./styles/styles.css";
import { Link } from "react-router-dom";
import arrow from "./images/arrow.png";

const Entry = ({ match }) => {
  let blog = useSelector((state) => state.fetchBlog.blog);

  const id = match.params.id;
  let entry = blog.filter((post) => post.id.includes(id));
  return (
    <div className="entryBox">
      <div className="back">
        <Link to="/Blog">
          <img src={arrow} alt=""></img>
        </Link>
      </div>
      <div className="entryScroll">
        <div className="entry">
          {blog.length !== 0 && parse(entry[0].content)}
          <div style={{ height: "50px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Entry;

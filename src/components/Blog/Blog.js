import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import search from "./images/search.svg";
import close from "./images/close.png";
import arrows from "./images/arrows.png";
import { searchToggle } from "../../actions/index.js";
import { searching } from "../../actions/index.js";
import "./styles/style.css";

const Blog = () => {
  let blog = useSelector((state) => state.fetchBlog.blog);
  let input = useSelector((state) => state.searching);
  let opacity = useSelector((state) => state.search.opacity);
  let width = useSelector((state) => state.search.width);
  const dispatch = useDispatch();

  const [reverse, setReverse] = useState(false);

  let filteredEntries = () => {
    return blog.filter((entry) =>
      entry.title.toLowerCase().includes(input.toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(searching(""));
  }, [dispatch]);

  return (
    <div style={{ height: "100%" }}>
      <div className="searchContainer">
        <div className="search">
          <img className="searchIcon" src={search} alt=""></img>
          <img
            title="Reverse entry order"
            onClick={() => setReverse((prevValue) => !prevValue)}
            src={arrows}
            className="arrows"
            alt=""
          ></img>
          {/* searchbar on top  */}

          <div className="searchBar" style={{ opacity: opacity, width: width }}>
            <img
              onClick={() =>
                dispatch(searchToggle({ opacity: "1", width: "100%" }))
              }
              title="Search for entry"
              src={search}
              alt=""
            ></img>
            <input
              value={input}
              onChange={(event) => dispatch(searching(event.target.value))}
              placeholder="Search for entry"
              type="text"
            ></input>
            <img
              title="Close search bar"
              onClick={() =>
                dispatch(searchToggle({ opacity: "0", width: "0" }))
              }
              className="close"
              src={close}
              alt=""
            ></img>
          </div>
        </div>
      </div>
      {blog.length === 0 ? (
        <Loading />
      ) : filteredEntries().length === 0 ? (
        <div id="noEntry">
          Sorry the entry you are looking for does not exist.
        </div>
      ) : (
        <div className="blog">
          {(reverse ? filteredEntries().reverse() : filteredEntries()).map(
            (entry, i) => (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                key={i}
                to={`/Blog/${entry.id}`}
              >
                <div className="entryContainer">
                  <img alt="" src={entry.images[0].url}></img>
                  <div className="hover">
                    <div className="title">{`${entry.title.toUpperCase()}`}</div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;

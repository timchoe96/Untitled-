import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import search from "./images/search.svg";
import close from "./images/close.png";
import { searchToggle } from "../../actions/index.js";
import { searching } from "../../actions/index.js";
import "./styles/style.css";

const Journal = () => {
  let journal = useSelector((state) => state.fetchJournal.journal);
  let input = useSelector((state) => state.searching);
  let opacity = useSelector((state) => state.search.opacity);
  let width = useSelector((state) => state.search.width);
  const dispatch = useDispatch();
  // console.log(journal);
  console.log(input);

  return journal.length === 0 ? (
    <Loading />
  ) : (
    <div className="grid">
      <div className="search">
        <img
          onClick={() =>
            dispatch(searchToggle({ opacity: "1", width: "100%" }))
          }
          src={search}
          alt=""
        ></img>
        <div className="searchBar" style={{ opacity: opacity, width: width }}>
          <img src={search} alt=""></img>
          <input
            onChange={(event) => dispatch(searching(event.target.value))}
            placeholder="Search for entry"
            type="text"
          ></input>
          <img
            onClick={() => dispatch(searchToggle({ opacity: "0", width: "0" }))}
            className="close"
            src={close}
            alt=""
          ></img>
        </div>
      </div>
      <div className="journal">
        {journal.map((entry, i) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={i}
            to={`/Journal/${i}`}
          >
            <div className="entryContainer">
              <img alt="" src={entry.images[0].url}></img>
              <div className="hover">
                <div className="title">{`Title: ${entry.title}`}</div>
                <div className="info">
                  <div>{`Entry: 000${journal.length - i}`}</div>
                  <div>{`Posted: ${entry.published.slice(0, 10)}`}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Journal;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./styles/style.css";

const Journal = () => {
  let journal = useSelector((state) => state.fetchJournal.journal);
  console.log(journal);

  return journal.length === 0 ? (
    <Loading />
  ) : (
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
  );
};

export default Journal;

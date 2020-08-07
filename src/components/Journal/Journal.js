import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles/style.css";

const Journal = () => {
  let journal = useSelector((state) => state.fetchJournal);

  console.log(journal);

  // const test = [
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  //   { title: 'hello '},
  // ];

  return (
    <div className="journal">
      {journal !== "" &&
        journal.map((entry, i) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={i}
            to={`/Journal/${i}`}
          >
            <div>{entry.title}</div>
          </Link>
        ))}
      {/* {test.map((entry, i) => (
        <div key={i}>{entry.title}</div>
      ))} */}
    </div>
  );
};

export default Journal;

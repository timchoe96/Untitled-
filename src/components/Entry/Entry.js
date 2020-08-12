import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import "./styles/styles.css";

const Entry = ({ match }) => {
  let journal = useSelector((state) => state.fetchJournal.journal);

  const id = match.params.id;
  let entry = journal.filter((post) => post.id.includes(id));
  return (
    <div className="entry">
      {journal.length !== 0 && parse(entry[0].content)}
    </div>
  );
};

export default Entry;

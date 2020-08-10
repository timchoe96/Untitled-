import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import "./styles/styles.css";

const Entry = ({ match }) => {
  let journal = useSelector((state) => state.fetchJournal.journal);

  const id = match.params.id;
  return (
    <div className="entry">
      {journal.length !== 0 && parse(journal[id].content)}
    </div>
  );
};

export default Entry;

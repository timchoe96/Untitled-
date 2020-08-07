import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import "./styles/styles.css";

const Entry = ({ match }) => {
  let journal = useSelector((state) => state.fetchJournal);

  const [entry, setEntry] = useState([]);

  useEffect(() => {
    setEntry(journal);
  }, [journal]);

  console.log(entry);

  const id = match.params.id;
  return (
    <div className="entry">
      {entry.length !== 0 && parse(entry[id].content)}
    </div>
  );
};

export default Entry;

import React from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import "./styles/styles.css";

const Entry = ({ match }) => {
  let documents = useSelector((state) => state.fetchDocuments.documents);

  const id = match.params.id;
  let entry = documents.filter((post) => post.id.includes(id));
  return (
    <div className="entry">
      {documents.length !== 0 && parse(entry[0].content)}
    </div>
  );
};

export default Entry;

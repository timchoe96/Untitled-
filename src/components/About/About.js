import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/style.css";
var contentful = require("contentful");

const About = () => {
  var client = contentful.createClient({
    space: "dlipnuauv0sj",
    accessToken: "wE7IZ7NvcSRJkr8slwMR5ZM6zEByjDgC7y1nEn36gx4",
  });

  let about = useSelector((state) => state.fetchAbout);
  const dispatch = useDispatch();

  if (about === '') {
    client.getEntries({ content_type: "about" }).then((resp) =>
      dispatch({
        type: "REQUEST_ABOUT_SUCCESS",
        payload: resp.items[0].fields.about,
      })
    );
  }

  return (
    <div className="about">
      <div>{about}</div>
    </div>
  );
};

export default About;

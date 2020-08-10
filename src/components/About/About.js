import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/style.css";
import Loading from "../Loading/Loading";
import { getAbout } from "../../actions/index.js";

const About = () => {
  let about = useSelector((state) => state.fetchAbout.about);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  return about === "" ? (
    <Loading />
  ) : (
    <div className="about">
      <div>{about}</div>
    </div>
  );
};

export default About;

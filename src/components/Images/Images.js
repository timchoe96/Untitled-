import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../actions/index.js";
import Loading from "../Loading/Loading";
import "./styles/style.css";

const Images = () => {
  const dispatch = useDispatch();
  let feed = useSelector((state) => state.fetchImages.images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return feed.length === 0 ? (
    <Loading />
  ) : (
    <div className="imageContainer">
      <div className="images">
        {feed.map((image, i) => (
          <img key={i} src={image.link_url} alt=""></img>
        ))}
      </div>
    </div>
  );
};

export default Images;

import time from "./time.js";
import position from "./position.js";
import fetchAbout from "./fetchAbout.js";
import fetchBlog from "./fetchBlog.js";
import fetchImages from "./fetchImages.js";
import { combineReducers } from "redux";
import search from "./search.js";
import searching from "./searching.js";

const rootReducer = combineReducers({
  time,
  position,
  fetchAbout,
  fetchBlog,
  fetchImages,
  search,
  searching,
});

export default rootReducer;

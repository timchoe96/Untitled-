import time from "./time.js";
import position from "./position.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ time, position });

export default rootReducer;

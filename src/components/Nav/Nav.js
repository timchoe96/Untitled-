import React, { useEffect } from "react";
import "./styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import { timeChange } from "../../actions/index.js";
import battery from "./images/battery.png";
import wifi from "./images/wifi.png";
import menu from "./images/menu.png";
import close from "./images/close.png";
import { navToggle } from "../../actions/index.js";

const Nav = () => {
  const dispatch = useDispatch();
  const position = useSelector((state) => state.position);
  const time = useSelector((state) => state.time);
  let macTime;

  function getTime() {
    let today = new Date();
    let day = today.getDay();
    let minutes =
      today.getMinutes().toString().length === 1
        ? "0" + today.getMinutes()
        : today.getMinutes();
    let hours =
      today.getHours().toString().length === 1
        ? today.getHours()
        : today.getHours() - 12;
    function realHours() {
      if (hours === 0) {
        return "12";
      } else {
        return hours;
      }
    }
    let ampm = today.getHours() >= 12 ? "PM" : "AM";
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (macTime = `${days[day]} ${realHours()}:${minutes} ${ampm}`);
  }

  useEffect(() => {
    setInterval(() => {
      getTime();
      dispatch(timeChange(macTime));
    }, 500);
  });

  return (
    <div>
      <nav>
        <div className="leftNav">
          {/* <img src={apple} alt=""></img> */}
          <div>U</div>
          <ul>
            <li>About</li>
            <li>Journal</li>
            <li>Images</li>
            <li>Store</li>
            <li>Home</li>
          </ul>
        </div>
        {/* at ipad width menu toggle icon */}
        <img
          onClick={() => dispatch(navToggle("0"))}
          className="menuToggle"
          src={menu}
          alt=""
        ></img>
        {/* right navigation */}
        <div className="rightNav">
          <img src={wifi} alt=""></img>
          <div className="battery">
            <div>50%</div>
            <img alt="" src={battery}></img>
          </div>
          <div> {time}</div>
        </div>
      </nav>
      <div className="dropdownNav" style={{ top: position }}>
        <ul>
          <li>About</li>
          <li>Journal</li>
          <li>Images</li>
          <li>Store</li>
          <li>Home</li>
        </ul>
        <img
          alt=""
          src={close}
          onClick={() => dispatch(navToggle("-1400px"))}
        ></img>
      </div>
    </div>
  );
};

export default Nav;

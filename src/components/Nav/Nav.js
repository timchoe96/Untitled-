import React, { useEffect } from "react";
import "./styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import { timeChange } from "../../actions/index.js";
import battery from "./images/battery.png";
import wifi from "./images/wifi.png";
import menu from "./images/menu.png";
import favicon from "./images/favicon.png";
import { navToggle } from "../../actions/index.js";
import { Link } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();

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
      } else if (hours === -1) {
        return "11";
      } else if (hours === -2) {
        return "10";
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

  const clickOpen = () => {
    dispatch(navToggle("0"));
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  };

  return (
    <div>
      <nav>
        <div className="leftNav">
          <img src={favicon} alt=""></img>
          <ul>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <li>Home</li>
            </Link>
            <Link
              to="/About"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>About</li>
            </Link>
            <Link to="/Blog" style={{ textDecoration: "none", color: "black" }}>
              <li>Docs</li>
            </Link>
            <Link
              to="/Images"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Images</li>
            </Link>
            <Link
              to="/Store"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Store</li>
            </Link>
          </ul>
        </div>
        {/* at ipad width menu toggle icon */}
        <img
          onClick={() => clickOpen()}
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
    </div>
  );
};

export default Nav;

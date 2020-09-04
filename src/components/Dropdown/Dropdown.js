import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { navToggle } from "../../actions/index.js";
import close from "./images/close.png";
import "./styles/style.css";

function Dropdown() {
  const position = useSelector((state) => state.position);
  const dispatch = useDispatch();

  const clickClose = () => {
    dispatch(navToggle("-2000px"));
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  };

  return (
    <div className="dropdownNav" style={{ top: position }}>
      <ul>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li onClick={() => clickClose()}>HOME</li>
        </Link>
        <Link to="/About" style={{ textDecoration: "none", color: "black" }}>
          <li onClick={() => clickClose()}>ABOUT</li>
        </Link>
        <Link to="/Blog" style={{ textDecoration: "none", color: "black" }}>
          <li onClick={() => clickClose()}>DOCS</li>
        </Link>
        <Link to="/Images" style={{ textDecoration: "none", color: "black" }}>
          <li onClick={() => clickClose()}>IMAGES</li>
        </Link>
        <Link to="/Store" style={{ textDecoration: "none", color: "black" }}>
          <li onClick={() => clickClose()}>STORE</li>
        </Link>
      </ul>
      <img alt="" src={close} onClick={() => clickClose()}></img>
    </div>
  );
}

export default Dropdown;

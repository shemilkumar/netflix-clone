import React, { useState } from "react";
import "./NavBar.css";
import { TbSearch } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [scroll, setScroll] = useState(false);

  const changeColor = () =>
    window.scrollY >= 32 ? setScroll(true) : setScroll(false);

  window.addEventListener("scroll", changeColor);

  return (
    <div className={scroll ? "navbar navbar-bg" : "navbar"}>
      <GiHamburgerMenu className="left-icon" />
      <TbSearch className="icon" />
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatar"
      />
    </div>
  );
}

export default NavBar;

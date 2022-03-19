import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Socialmedia from "../socialMedia/SocialMedia";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const menuHandler = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <div className="header">
      <div className="left">
        <Socialmedia />
      </div>
      <nav className={`${isShowMenu && "active"}`}>
        <span onClick={() => setIsShowMenu(false)}>Home</span>
        <span onClick={() => setIsShowMenu(false)}>About</span>
        <span onClick={() => setIsShowMenu(false)}>Contact</span>
        <span onClick={() => setIsShowMenu(false)}>Write</span>
        <span onClick={() => setIsShowMenu(false)}>Logout</span>
      </nav>
      <div className="right">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-8CYleGWDG2Vt9fKFSCnK7LPbp77RbUldw&usqp=CAU"
          alt=""
        />
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="menu" icon={faBars} onClick={menuHandler} />
      </div>
    </div>
  );
};

export default Header;

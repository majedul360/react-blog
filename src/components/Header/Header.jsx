import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Socialmedia from "../socialMedia/SocialMedia";
import { Link } from "react-router-dom";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const menuHandler = () => {
    setIsShowMenu(!isShowMenu);
  };
  const user = true;
  return (
    <div className="header">
      <div className="left">
        <Socialmedia />
      </div>
      <nav className={`${isShowMenu && "active"}`}>
        <span onClick={() => setIsShowMenu(false)}>
          <Link className="link" to="/">
            Home
          </Link>
        </span>
        <span onClick={() => setIsShowMenu(false)}>About</span>
        <span onClick={() => setIsShowMenu(false)}>Contact</span>
        <span onClick={() => setIsShowMenu(false)}>
          <Link className="link" to="/write">
            Write
          </Link>
        </span>
        {user && <span onClick={() => setIsShowMenu(false)}>Logout</span>}
      </nav>
      <div className="right">
        {user ? (
          <Link to="/settings">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-8CYleGWDG2Vt9fKFSCnK7LPbp77RbUldw&usqp=CAU"
              alt=""
            />
          </Link>
        ) : (
          <div className="login-registar">
            <span>
              <Link className="link" to="/login">
                login
              </Link>
            </span>
            <span>
              <Link className="link" to="/registar">
                registar
              </Link>
            </span>
          </div>
        )}

        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        <FontAwesomeIcon className="menu" icon={faBars} onClick={menuHandler} />
      </div>
    </div>
  );
};

export default Header;

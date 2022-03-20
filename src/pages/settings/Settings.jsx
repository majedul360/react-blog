import "./Settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Settings = () => {
  return (
    <div className="settings">
      <div className="user">
        <div className="account">
          <span>update your account</span>
          <span>delete account</span>
        </div>
        <form>
          <h3>profile picture</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-8CYleGWDG2Vt9fKFSCnK7LPbp77RbUldw&usqp=CAU"
            alt=""
          />
          <label htmlFor="inputFile">
            <FontAwesomeIcon className="icon" icon={faUser} />
          </label>
          <input type="file" id="inputFile" />
          <br /> <br />
          <label htmlFor="">username</label> <br />
          <input type="text" placeholder="enter your name" /> <br />
          <label htmlFor="">email</label> <br />
          <input type="email" placeholder="enter your email" />
          <br />
          <label htmlFor="">password</label>
          <br />
          <input type="password" placeholder="enter your password" />
          <br />
          <button type="submit">update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;

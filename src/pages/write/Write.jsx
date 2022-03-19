import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Write.scss";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />

      <form>
        <label htmlFor="inputFile">
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </label>
        <input type="file" className="file" id="inputFile" />
        <input type="text" placeholder="title" autoFocus={true} />
        <button type="submit">submt</button>
        <br />
        <textarea placeholder="enter your text" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default Write;

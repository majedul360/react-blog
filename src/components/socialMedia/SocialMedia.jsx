import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialMedia.scss";

const Socialmedia = () => {
  return (
    <div className="social-media">
      <FontAwesomeIcon className="icon" icon={faFacebook} />
      <FontAwesomeIcon className="icon" icon={faTwitter} />
      <FontAwesomeIcon className="icon" icon={faLinkedin} />
      <FontAwesomeIcon className="icon" icon={faInstagram} />
    </div>
  );
};

export default Socialmedia;

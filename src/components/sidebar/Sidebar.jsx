import Subtitle from "../subTitle/SubTitle";
import "./Sidebar.scss";
import SocialMedia from "../socialMedia/SocialMedia";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Subtitle title="about me" />
      <img
        src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
        alt=""
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam veniam
        sequi, ipsam nobis iste sunt.
      </p>
      <Subtitle title="category" />
      <div className="category">
        <div className="category-container">
          <span>life</span>
          <span>music</span>
        </div>
        <div className="category-container">
          <span>style</span>
          <span>sport</span>
        </div>
        <div className="category-container">
          <span>tech</span>
          <span>cinema</span>
        </div>
      </div>

      <Subtitle title="follow us" />
      <SocialMedia />
    </div>
  );
};

export default Sidebar;

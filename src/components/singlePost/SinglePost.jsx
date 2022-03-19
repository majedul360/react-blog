import "./SinglePost.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const Singlepost = () => {
  return (
    <div className="single-post">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="icons">
        <FontAwesomeIcon className="icon" icon={faEdit} />
        <FontAwesomeIcon className="icon" icon={faTrash} />
      </div>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <div className="author">
        <span>author: majedul</span>
        <span>1 hour ago</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi
        odio error eaque laudantium quasi molestiae porro maiores! Distinctio
        tenetur iusto asperiores sit exercitationem, cupiditate dolor cum
        corrupti voluptatum omnis quia non? Quasi saepe numquam fugit recusandae
        voluptas quidem magni maiores iure accusantium deleniti amet,
        consequatur omnis voluptate nulla ipsum exercitationem, dolorem
        veritatis dicta. Fuga odio quos, aut laborum illum iure ea quod mollitia
        optio excepturi, voluptates placeat ut provident laudantium eaque quia
        odit vel quidem aspernatur alias rerum nihil inventore? Veritatis quas
        sapiente cum quia corrupti, provident vero! Ducimus.
      </p>
    </div>
  );
};

export default Singlepost;

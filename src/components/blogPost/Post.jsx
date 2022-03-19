import "./Post.scss";

const Post = ({ src }) => {
  return (
    <div className="post">
      <img src={src} alt="" />
      <div className="post-container">
        <div className="music-life">
          <span>music</span>
          <span>life</span>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>

        <span>1 hour ago</span>
      </div>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt,
        quod nulla officiis dicta culpa nobis tempore aspernatur repellendus in
        enim neque odio inventore magni tempora autem vitae vel quas eius et
        quae omnis iusto. Ab deserunt tempore fugiat, dolore commodi natus eaque
        exercitationem hic, ipsa explicabo, non nemo. Eligendi.
      </p>
    </div>
  );
};

export default Post;

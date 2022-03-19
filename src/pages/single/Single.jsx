import Singlepost from "../../components/singlePost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
};

export default Single;

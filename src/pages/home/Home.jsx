import Banner from "../../components/banner/Banner";
import BlogPosts from "../../components/blogPosts/BlogPosts";
import Sidebar from "../../components/sidebar/Sidebar";

import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Banner className="banner" />
      <div className="container">
        <BlogPosts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;

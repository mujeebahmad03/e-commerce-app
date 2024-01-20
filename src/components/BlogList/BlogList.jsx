import { blogData } from "../../data/menuItems";
import "./BlogList.css";
import BlogListCard from "./BlogListCard";
const BlogList = () => {
  return (
    <div className="blog-list">
      <div className="container">
        <div className="wrapper has-scrollbar">
          {blogData.map((blog, index) => (
            <BlogListCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;

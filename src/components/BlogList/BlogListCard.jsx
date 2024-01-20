import PropTypes from "prop-types";

const BlogListCard = ({ imgSrc, blog, category, metaData }) => {
  return (
    <div className="blog-list-card">
      <a href="#">
        <img
          src={imgSrc}
          alt={blog.title}
          width="300"
          className="blog-list-banner"
        />
      </a>

      <div className="blog-list-content">
        <a href={category.link} className="blog-list-category">
          {category.title}
        </a>

        <h3 className="blog-list-title">
          <a href={blog.link}>{blog.title}.</a>
        </h3>

        <p className="blog-list-meta">
          By <cite>{metaData.author}</cite> /{" "}
          <time dateTime={metaData.date}>Apr 06, 2022</time>
        </p>
      </div>
    </div>
  );
};

BlogListCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  blog: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  metaData: PropTypes.object.isRequired,
};

export default BlogListCard;

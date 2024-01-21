import PropTypes from "prop-types";

const FooterCategoryBox = ({ title, subItems }) => {
  return (
    <div className="footer-category-box">
      <h3 className="category-box-title">{title} :</h3>
      {subItems.map((item, index) => (
        <a key={index} href={item.link} className="footer-category-link">
          {item.title}
        </a>
      ))}
    </div>
  );
};

FooterCategoryBox.propTypes = {
  title: PropTypes.string.isRequired,
  subItems: PropTypes.array.isRequired,
};

export default FooterCategoryBox;

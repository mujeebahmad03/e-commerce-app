import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";

const ProductShowcaseItem = ({
  imageUrl,
  title,
  category,
  rating,
  discountedPrice,
  originalPrice,
}) => {
  return (
    <div className="showcase">
      <a href="#" className="showcase-img-box">
        <img src={imageUrl} alt={title} className="showcase-img" width="70" />
      </a>

      <div className="showcase-content">
        <a href="#">
          <h4 className="showcase-title">{title}</h4>
        </a>

        <div className="showcase-rating">
          <Rating value={rating} readOnly={true} />
        </div>

        <a href={category.link} className="showcase-category">
          {category.title}
        </a>

        <div className="price-box">
          <p className="price">${discountedPrice}</p>
          <del>${originalPrice}</del>
        </div>
      </div>
    </div>
  );
};

ProductShowcaseItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number.isRequired,
  originalPrice: PropTypes.number.isRequired,
};

export default ProductShowcaseItem;

import { Rating } from "@smastrom/react-rating";
import PropTypes from 'prop-types';

const Product = ({
  imageUrl,
  title,
  rating,
  originalPrice,
  discountedPrice,
}) => (
  <div className="showcase">
    <a href="#" className="showcase-img-box">
      <img
        src={imageUrl}
        alt={title}
        width="75"
        height="75"
        className="showcase-img"
      />
    </a>

    <div className="showcase-content">
      <a href="#">
        <h4 className="showcase-title">{title}</h4>
      </a>

      <div className="showcase-rating">
        <Rating value={rating} readOnly={true} />
      </div>

      <div className="price-box">
        <del>${originalPrice}</del>
        <p className="price">${discountedPrice}</p>
      </div>
    </div>
  </div>
);


Product.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  originalPrice: PropTypes.number,
  discountedPrice: PropTypes.number,
};

export default Product;

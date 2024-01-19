import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import ProductStatus from "../FeaturedProduct/ProductStatus";
import CountdownTimer from "../FeaturedProduct/CountdownTimer";

const Product = ({
  imageUrl,
  bannerSrc,
  title,
  category,
  description,
  status,
  rating,
  originalPrice,
  discountedPrice,
}) => (
  <div className="showcase">
    <a
      href="#"
      className={`${imageUrl ? "showcase-img-box" : "showcase-banner"}`}
    >
      <img
        src={imageUrl || bannerSrc}
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

      {description && <p className="showcase-desc">{description}</p>}

      {category && (
        <a href={category.link} className="showcase-category">
          {category.title}
        </a>
      )}
      <div className="showcase-rating">
        <Rating value={rating} readOnly={true} />
      </div>

      <div className="price-box">
        <p className="price">${discountedPrice}</p>
        <del>${originalPrice}</del>
      </div>

      {status && (
        <>
          <ProductStatus {...status} />
          <CountdownTimer />
        </>
      )}
    </div>
  </div>
);

Product.propTypes = {
  bannerSrc: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.object,
  description: PropTypes.string,
  status: PropTypes.object,
  rating: PropTypes.number,
  originalPrice: PropTypes.number,
  discountedPrice: PropTypes.number,
};

export default Product;

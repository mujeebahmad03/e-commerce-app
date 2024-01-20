import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import ProductStatus from "../FeaturedProduct/ProductStatus";
import CountdownTimer from "../FeaturedProduct/CountdownTimer";
import ProductBanner from "../ProductGrid/ProductBanner";

const Product = ({
  imageUrl,
  bannerSrc,
  imageObj,
  title,
  category,
  description,
  status,
  rating,
  label,
  originalPrice,
  discountedPrice,
}) => {
  const labelPercent = Math.floor((1 - discountedPrice / originalPrice) * 100);
  return (
    <div className="showcase">
      <ProductBanner
        imageUrl={imageUrl}
        bannerSrc={bannerSrc}
        imageObj={imageObj}
        title={title}
        label={label}
        labelPercent={labelPercent}
      />

      <div className="showcase-content">
        <h3>
          <a href="#" className="showcase-title">
            {title}
          </a>
        </h3>

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
            <button className="add-cart-btn">add to cart</button>
            <ProductStatus {...status} />
            <CountdownTimer />
          </>
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  bannerSrc: PropTypes.string,
  imageUrl: PropTypes.string,
  imageObj: PropTypes.object,
  title: PropTypes.string,
  category: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
  }),
  description: PropTypes.string,
  status: PropTypes.object,
  label: PropTypes.object,
  rating: PropTypes.number,
  originalPrice: PropTypes.number,
  discountedPrice: PropTypes.number,
};

export default Product;

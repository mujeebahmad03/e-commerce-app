import PropTypes from "prop-types";
import ActionButtons from "./ActionButtons";

const ProductBanner = ({
  imageUrl,
  bannerSrc,
  imageObj,
  title,
  label,
  labelPercent,
}) => {
  const bannerClass = `${imageUrl ? "showcase-img-box" : "showcase-banner"}`;

  return (
    <div className={bannerClass}>
      {imageObj ? (
        <>
          <img
            src={imageObj.default}
            alt={title}
            className="product-img default"
            width="300"
          />
          <img
            src={imageObj.hover}
            alt={title}
            className="product-img hover"
            width="300"
          />
          {console.log(label)}
          {label ? (
            <p className={`showcase-badge ${label.className}`}>{label.title}</p>
          ) : (
            <p className="showcase-badge">{labelPercent}%</p>
          )}
          <ActionButtons />
        </>
      ) : (
        <img
          src={imageUrl || bannerSrc}
          alt={title}
          width="75"
          height="75"
          className="showcase-img"
        />
      )}
    </div>
  );
};

ProductBanner.propTypes = {
  imageUrl: PropTypes.string,
  bannerSrc: PropTypes.string,
  imageObj: PropTypes.shape({
    hover: PropTypes.string,
    default: PropTypes.string,
  }),
  title: PropTypes.string,
  label: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string,
  }),
  labelPercent: PropTypes.number,
};

export default ProductBanner;

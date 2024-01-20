import ShowcaseContainer from "./ShowcaseContainer";
import PropTypes from "prop-types";

const ShowcaseWrapper = ({
  productCategory,
  heading,
  featured,
  showcaseData,
}) => {
  const hasScrollbar = productCategory ? "has-scrollbar" : "";
  return (
    <div className={featured ? "product-featured" : "product-showcase"}>
      {productCategory && <h2 className="title">{productCategory}</h2>}
      {heading && <h3 className="showcase-heading">{heading}</h3>}
      <div className={`wrapper ${hasScrollbar}`}>
        {featured ? (
          <>
            <ShowcaseContainer products={showcaseData.slice(0, 1)} />
            <ShowcaseContainer products={showcaseData.slice(1)} />
          </>
        ) : (
          <>
            <ShowcaseContainer products={showcaseData.slice(0, 4)} />
            <ShowcaseContainer products={showcaseData.slice(4)} />
          </>
        )}
      </div>
    </div>
  );
};

ShowcaseWrapper.propTypes = {
  productCategory: PropTypes.string,
  featured: PropTypes.bool,
  heading: PropTypes.string,
  showcaseData: PropTypes.array.isRequired,
};

export default ShowcaseWrapper;

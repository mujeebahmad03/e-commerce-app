import ShowcaseContainer from "./ShowcaseContainer";
import PropTypes from "prop-types";

const ShowcaseWrapper = ({ productCategory, showcaseData }) => {
  return (
    <div className={`product-showcase ${productCategory}`}>
      <h2 className="title">{productCategory}</h2>
      <div className="showcase-wrapper has-scrollbar">
        <ShowcaseContainer products={showcaseData.slice(0, 4)} />
        <ShowcaseContainer products={showcaseData.slice(4)} />
      </div>
    </div>
  );
};

ShowcaseWrapper.propTypes = {
  productCategory: PropTypes.string.isRequired,
  showcaseData: PropTypes.array.isRequired,
};

export default ShowcaseWrapper;

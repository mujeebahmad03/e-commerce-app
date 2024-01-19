import ProductShowcaseItem from "./ProductShowcaseItem";
import PropTypes from "prop-types";

const ShowcaseContainer = ({ products }) => {
  return (
    <div className="showcase-container">
      {products.map((product, index) => (
        <ProductShowcaseItem key={index} {...product} />
      ))}
    </div>
  );
};

ShowcaseContainer.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ShowcaseContainer;

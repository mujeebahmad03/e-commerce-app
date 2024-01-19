import PropTypes from "prop-types";

const ProductStatus = ({ sold, available }) => {
  const soldPercentage = (sold / available) * 100;

  return (
    <div className="showcase-status">
      <div className="wrapper">
        <p>
          already sold: <b>{sold}</b>
        </p>

        <p>
          available: <b>{available}</b>
        </p>
      </div>

      <div className="showcase-status-bar">
        <div
          className="showcase-status-bar-fill"
          style={{ width: `${soldPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

ProductStatus.propTypes = {
  sold: PropTypes.number,
  available: PropTypes.number,
};
export default ProductStatus;

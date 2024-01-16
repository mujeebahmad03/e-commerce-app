import { products } from "../../data/menuItems";
import Product from "./Product";

const ProductShowcase = () => (
  <div className="product-showcase">
    <h3 className="showcase-heading">best sellers</h3>

    <div className="showcase-wrapper">
      <div className="showcase-container">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  </div>
);

export default ProductShowcase;

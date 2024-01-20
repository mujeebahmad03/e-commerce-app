import "./ProductGrid.css";
import { productsData } from "../../data/menuItems";
import Product from "../SideBar/Product";
const ProductGrid = () => {
  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>
      <div className="product-grid">
        {productsData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

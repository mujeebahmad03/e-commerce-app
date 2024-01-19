import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import MinimalProduct from "../MinimalProduct/MinimalProduct";
import ProductGrid from "../ProductGrid/ProductGrid";
import SideBar from "../SideBar/SideBar";

const Products = () => {
  return (
    <div className="product-container">
      <div className="container">
        <SideBar />
        <div className="product-box">
          <MinimalProduct />
          <FeaturedProduct />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Products;

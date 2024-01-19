import { newArrivals, topRated, trending } from "../../data/menuItems";
import "./MinimalProduct.css";
import ShowcaseWrapper from "./ShowcaseWrapper";

const MinimalProduct = () => {
  return (
    <div className="product-minimal">
      {/* ... */}
      <ShowcaseWrapper
        productCategory="New Arrivals"
        showcaseData={newArrivals}
      />

      {/* ... */}
      <ShowcaseWrapper productCategory="Trending" showcaseData={trending} />

      {/* ... */}
      <ShowcaseWrapper productCategory="Top Rated" showcaseData={topRated} />
    </div>
  );
};

export default MinimalProduct;

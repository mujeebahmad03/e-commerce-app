import "./FeaturedProduct.css";
import ShowcaseWrapper from "../MinimalProduct/ShowcaseWrapper";
import { dealOfTheDay } from "../../data/menuItems";

const FeaturedProduct = () => {
  return (
    <ShowcaseWrapper
      productCategory="Deal of the day"
      featured={true}
      showcaseData={dealOfTheDay}
    />
  );
};

export default FeaturedProduct;

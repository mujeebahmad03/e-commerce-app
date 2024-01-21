import { categories } from "../../data/menuItems";
import FooterCategoryBox from "./FooterCategoryBox";

const FooterCategory = () => {
  return (
    <div className="footer-category">
      <div className="container">
        <h2 className="footer-category-title">Brand directory</h2>

        {categories.map((category, index) => (
          <FooterCategoryBox key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default FooterCategory;

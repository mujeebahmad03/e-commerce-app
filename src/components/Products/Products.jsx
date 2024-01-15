import { productItems } from "../../data/menuItems";
import "./Products.css";

const Products = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product-item-container has-scrollbar">
          {productItems.map((item, index) => {
            return (
              <div key={index} className="product-item">
                <div className="product-img-box">
                  <img src={item.imgLink} alt={item.title} width="30" />
                </div>

                <div className="product-content-box">
                  <div className="product-content-flex">
                    <h3 className="product-item-title">{item.title}</h3>

                    <p className="product-item-amount">{`(${item.total})`}</p>
                  </div>

                  <a href={item.link} className="product-btn">
                    Show all
                  </a>
                </div>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
};

export default Products;

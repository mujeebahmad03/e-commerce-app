import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="wrapper has-scrollbar">
          <div className="slider-item">
            <img
              src="images/banner-1.jpg"
              alt="women's latest fashion sale"
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Women&apos;s latest fashion sale</h2>

              <p className="banner-text">
                starting at $ <b>20</b>.00
              </p>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <img
              src="images/banner-2.jpg"
              alt="modern sunglasses"
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Trending accessories</p>

              <h2 className="banner-title">Modern sunglasses</h2>

              <p className="banner-text">
                starting at $ <b>15</b>.00
              </p>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <img
              src="images/banner-3.jpg"
              alt="new fashion summer sale"
              className="banner-img"
            />

            <div className="banner-content">
              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at $ <b>29</b>.99
              </p>

              <a href="#" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

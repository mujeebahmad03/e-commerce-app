import BlogList from "../components/BlogList/BlogList";
import Banner from "../components/Hero/Banner";
import PageHighlights from "../components/PageHighlights/PageHighlights";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Products from "../components/Products/Products";

export const Home = () => {
  return (
    <>
      <Banner />
      <ProductSlider />
      <Products />
      <PageHighlights />
      <BlogList />
    </>
  );
};

export const menuItems = [
  { title: "Home", link: "#" },
  { title: "Categories", link: "#" },
  { title: "Blog", link: "#" },
  { title: "Hot Offers", link: "#" },
];

export const categories = [
  {
    title: "Shoes",
    imgLink: "images/icons/shoes.svg",
    link: "#",
    subItems: [
      { title: "Casual", link: "#", stock: 300 },
      { title: "Sport", link: "#", stock: 300 },
      { title: "Boots", link: "#", stock: 300 },
      { title: "Formal", link: "#", stock: 300 },
      { title: "Sandals & Slippers", link: "#", stock: 300 },
      { title: "Shoe Accessories", link: "#", stock: 300 },
    ],
  },
  {
    title: "Men's Clothing",
    link: "#",
    imgLink: "images/icons/jacket.svg",
    subItems: [
      { title: "Pants & Jeans", link: "#", stock: 300 },
      { title: "Jackets & Hoodies", link: "#", stock: 300 },
      { title: "Shirts & T-Shirts", link: "#", stock: 300 },
      { title: "Shorts", link: "#", stock: 300 },
      { title: "Blazers & Suits", link: "#", stock: 300 },
    ],
  },
  {
    title: "Women's Clothing",
    link: "#",
    imgLink: "images/icons/dress.svg",
    subItems: [
      { title: "Dresses", link: "#", stock: 300 },
      { title: "Tops", link: "#", stock: 300 },
      { title: "Swimwear", link: "#", stock: 300 },
      { title: "Pants", link: "#", stock: 300 },
      { title: "Islamic Clothing", link: "#", stock: 300 },
    ],
  },
  {
    title: "Beauty & Health",
    link: "#",
    imgLink: "images/icons/cosmetics.svg",
    subItems: [
      { title: "Skincare", link: "#", stock: 300 },
      { title: "Fragrances", link: "#", stock: 300 },
      { title: "Bath & Body", link: "#", stock: 300 },
      { title: "Make-up", link: "#", stock: 300 },
      { title: "Hair Beauty", link: "#", stock: 300 },
    ],
  },
  {
    title: "Bags & Luggages",
    link: "#",
    imgLink: "images/icons/bag.svg",
    subItems: [
      { title: "Handbags", link: "#", stock: 300 },
      { title: "Waist Packs", link: "#", stock: 300 },
      { title: "Backpacks", link: "#", stock: 300 },
      { title: "Wallet", link: "#", stock: 300 },
    ],
  },
  {
    title: "Clothing Accessories",
    link: "#",
    imgLink: "images/icons/glasses.svg",
    subItems: [
      { title: "Sunglasses", link: "#", stock: 300 },
      { title: "Hats & Caps", link: "#", stock: 300 },
      { title: "Belts", link: "#", stock: 300 },
      { title: "Ties", link: "#", stock: 300 },
      { title: "Cufflinks", link: "#", stock: 300 },
      { title: "Socks", link: "#", stock: 300 },
      { title: "Scarves & Shawls", link: "#", stock: 300 },
    ],
  },
  {
    title: "Jewelry",
    link: "#",
    imgLink: "images/icons/jewelry.svg",
    subItems: [
      { title: "Watches", link: "#", stock: 300 },
      { title: "Earrings", link: "#", stock: 300 },
      { title: "Rings", link: "#", stock: 300 },
      { title: "Necklaces", link: "#", stock: 300 },
      { title: "Bracelets & Bangles", link: "#", stock: 300 },
    ],
  },
  {
    title: "Kids",
    link: "#",
    imgLink: "images/icons/shorts.svg",
    subItems: [
      { title: "Clothing", link: "#", stock: 300 },
      { title: "Shoes", link: "#", stock: 300 },
      { title: "Accessories", link: "#", stock: 300 },
      // { title: "", link: "#", },
    ],
  },
];

export const bottomMenu = [
  {
    title: "Language",
    subItems: ["English", "Español", "Frençh"],
  },
  { title: "Currency", subItems: ["USD $", "EUR £"] },
];

export const productItems = [
  { imgLink: "images/icons/dress.svg", title: "dress", total: 53, link: "#" },
  {
    imgLink: "images/icons/coat.svg",
    title: "winter wear",
    total: 58,
    link: "#",
  },
  {
    imgLink: "images/icons/glasses.svg",
    title: "glasses",
    total: 68,
    link: "#",
  },
  {
    imgLink: "images/icons/shorts.svg",
    title: "shorts & jeans",
    total: 84,
    link: "#",
  },
  { imgLink: "images/icons/tee.svg", title: "t-shirts", total: 35, link: "#" },
  { imgLink: "images/icons/jacket.svg", title: "jacket", total: 16, link: "#" },
  { imgLink: "images/icons/watch.svg", title: "watch", total: 27, link: "#" },
  { imgLink: "images/icons/hat.svg", title: "hat & cap", total: 39, link: "#" },
];

export const bestSellerProducts = [
  {
    imageUrl: "images/products/1.jpg",
    title: "baby fabric shoes",
    rating: 5,
    originalPrice: 5.0,
    discountedPrice: 4.0,
  },
  {
    imageUrl: "images/products/2.jpg",
    title: "men's hoodies t-shirt",
    rating: 4.5,
    originalPrice: 17.0,
    discountedPrice: 7.0,
  },
  {
    imageUrl: "images/products/3.jpg",
    title: "girls t-shirt",
    rating: 4,
    originalPrice: 5.0,
    discountedPrice: 3.0,
  },
  {
    imageUrl: "images/products/4.jpg",
    title: "woolen hat for men",
    rating: 5,
    originalPrice: 15.0,
    discountedPrice: 12.0,
  },
];

export const newArrivals = [
  {
    imageUrl: "images/products/clothes-1.jpg",
    title: "relaxed short full sleeve t-shirt",
    rating: 5,
    originalPrice: 45.0,
    discountedPrice: 40.0,
    category: { title: "men's clothing", link: "#" },
  },
  {
    imageUrl: "images/products/clothes-2.jpg",
    title: "girls pink embro design top",
    rating: 4.5,
    originalPrice: 70.0,
    discountedPrice: 57.0,
    category: { title: "women's top", link: "#" },
  },
  {
    imageUrl: "images/products/clothes-3.jpg",
    title: "black floral wrap midi skirt",
    rating: 4,
    originalPrice: 55.0,
    discountedPrice: 50.0,
    category: { title: "women's clothing", link: "#" },
  },
  {
    imageUrl: "images/products/shirt-1.jpg",
    title: "pure garment dyed cotton shirt",
    rating: 5,
    originalPrice: 68.0,
    discountedPrice: 52.0,
    category: { title: "Shirts & T-Shirts", link: "#" },
  },
  {
    imageUrl: "images/products/jacket-5.jpg",
    title: "men yarn fleece full-zip jacket",
    rating: 5,
    originalPrice: 65.0,
    discountedPrice: 61.0,
    category: { title: "Jacket & Hoodies", link: "#" },
  },
  {
    imageUrl: "images/products/jacket-1.jpg",
    title: "men's winter leathers jackets",
    rating: 5,
    originalPrice: 65.0,
    discountedPrice: 52.0,
    category: { title: "Jacket & Hoodies", link: "#" },
  },
  {
    imageUrl: "images/products/jacket-3.jpg",
    title: "men's winter leathers jackets",
    rating: 5,
    originalPrice: 75.0,
    discountedPrice: 62.0,
    category: { title: "Jacket & Hoodies", link: "#" },
  },
  {
    imageUrl: "images/products/shorts-1.jpg",
    title: "better basics french terry sweatshorts",
    rating: 5,
    originalPrice: 60.5,
    discountedPrice: 40.5,
    category: { title: "Shorts", link: "#" },
  },
];

export const trending = [
  {
    imageUrl: "images/products/sports-1.jpg",
    title: "running & trekking shoes - white",
    rating: 5,
    originalPrice: 45.0,
    discountedPrice: 40.0,
    category: { title: "Sports", link: "#" },
  },
  {
    imageUrl: "images/products/sports-2.jpg",
    title: "trekking & running shoes - black",
    rating: 4.5,
    originalPrice: 70.0,
    discountedPrice: 57.0,
    category: { title: "Sports", link: "#" },
  },
  {
    imageUrl: "images/products/party-wear-1.jpg",
    title: "women's party wear shoes",
    rating: 4,
    originalPrice: 55.0,
    discountedPrice: 50.0,
    category: { title: "Business", link: "#" },
  },
  {
    imageUrl: "images/products/sports-3.jpg",
    title: "sports claw women's shoes",
    rating: 5,
    originalPrice: 68.0,
    discountedPrice: 52.0,
    category: { title: "Sports", link: "#" },
  },
  {
    imageUrl: "images/products/sports-6.jpg",
    title: "air nike sneaker - white",
    rating: 5,
    originalPrice: 65.0,
    discountedPrice: 61.0,
    category: { title: "Casual", link: "#" },
  },
  {
    imageUrl: "images/products/shoe-3.jpg",
    title: "Boot With Suede Detail",
    rating: 5,
    originalPrice: 65.0,
    discountedPrice: 52.0,
    category: { title: "Boots", link: "#" },
  },
  {
    imageUrl: "images/products/shoe-1.jpg",
    title: "men's leather formal wear shoes",
    rating: 5,
    originalPrice: 75.0,
    discountedPrice: 62.0,
    category: { title: "Business", link: "#" },
  },
  {
    imageUrl: "images/products/shoe-2.jpg",
    title: "casual men's brown shoes",
    rating: 5,
    originalPrice: 60.5,
    discountedPrice: 40.5,
    category: { title: "Casual", link: "#" },
  },
];

export const topRated = [
  {
    imageUrl: "images/products/watch-3.jpg",
    title: "pocket watch",
    rating: 5,
    originalPrice: 45.0,
    discountedPrice: 40.0,
    category: { title: "Watches", link: "#" },
  },
  {
    imageUrl: "images/products/jewellery-3.jpg",
    title: "silver deer heart necklace",
    rating: 4.5,
    originalPrice: 70.0,
    discountedPrice: 57.0,
    category: { title: "Necklaces", link: "#" },
  },
  {
    imageUrl: "images/products/perfume.jpg",
    title: "titan 100 ml women's perfume",
    rating: 4,
    originalPrice: 55.0,
    discountedPrice: 50.0,
    category: { title: "Fragrance", link: "#" },
  },
  {
    imageUrl: "images/products/belt.jpg",
    title: "men's leather reversible belt",
    rating: 5,
    originalPrice: 68.0,
    discountedPrice: 52.0,
    category: { title: "Belts", link: "#" },
  },
  {
    imageUrl: "images/products/jewellery-2.jpg",
    title: "platinum zircon classic ring",
    rating: 5,
    originalPrice: 65.0,
    discountedPrice: 61.0,
    category: { title: "Rings", link: "#" },
  },
  {
    imageUrl: "images/products/watch-1.jpg",
    title: "smart watche vital plus",
    rating: 5,
    originalPrice: 65.0,
    discountedPrice: 52.0,
    category: { title: "Watches", link: "#" },
  },
  {
    imageUrl: "images/products/shampoo.jpg",
    title: "shampoo conditioner packs",
    rating: 5,
    originalPrice: 75.0,
    discountedPrice: 62.0,
    category: { title: "Bath & Body", link: "#" },
  },
  {
    imageUrl: "images/products/jewellery-1.jpg",
    title: "rose gold peacock earrings",
    rating: 5,
    originalPrice: 60.5,
    discountedPrice: 40.5,
    category: { title: "Earrings", link: "#" },
  },
];

export const dealOfTheDay = [
  {
    bannerSrc: "images/products/shampoo.jpg",
    title: "Shampoo, Conditioner & Facewash Packs",
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
    discountedPrice: 150.0,
    originalPrice: 200.0,
    status: { sold: 20, available: 40 },
  },

  {
    bannerSrc: "images/products/jewellery-1.jpg",
    title: "Rose Gold diamonds Earring",
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor",
    discountedPrice: 1990.0,
    originalPrice: 2000.0,
    status: { sold: 15, available: 40 },
  },
];

export const productsData = [
  {
    id: 1,
    imageObj: {
      default: "images/products/jacket-3.jpg",
      hover: "images/products/jacket-4.jpg",
    },
    category: { title: "jacket", link: "#" },
    title: "Mens Winter Leathers Jackets",
    rating: 4,
    discountedPrice: 48.0,
    originalPrice: 75.0,
  },
  {
    id: 2,
    imageObj: {
      default: "images/products/shirt-1.jpg",
      hover: "images/products/shirt-2.jpg",
    },
    category: { title: "shirt", link: "#" },
    title: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    discountedPrice: 45.0,
    originalPrice: 56.0,
    label: {
      title: "sale",
      className: "angle black",
    },
  },
  {
    id: 3,
    imageObj: {
      default: "images/products/jacket-5.jpg",
      hover: "images/products/jacket-6.jpg",
    },
    category: { title: "Jacket", link: "#" },
    title: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    discountedPrice: 58.0,
    originalPrice: 65.0,
  },
  {
    id: 4,
    imageObj: {
      default: "images/products/clothes-3.jpg",
      hover: "images/products/clothes-4.jpg",
    },
    category: { title: "skirt", link: "#" },
    title: "Black Floral Wrap Midi Skirt",
    rating: 5,
    discountedPrice: 25.0,
    originalPrice: 35.0,
    label: {
      title: "new",
      className: "angle pink",
    },
  },
  {
    id: 5,
    imageObj: {
      default: "images/products/shoe-2.jpg",
      hover: "images/products/shoe-2_1.jpg",
    },
    category: { title: "casual", link: "#" },
    title: "Casual Men's Brown shoes",
    rating: 5,
    discountedPrice: 99.0,
    originalPrice: 105.0,
  },
  {
    id: 6,
    imageObj: {
      default: "images/products/watch-3.jpg",
      hover: "images/products/watch-4.jpg",
    },
    category: { title: "watches", link: "#" },
    title: "Pocket Watch Leather Pouch",
    rating: 4,
    discountedPrice: 150.0,
    originalPrice: 170.0,
    label: {
      title: "sale",
      className: "angle black",
    },
  },
  {
    id: 7,
    imageObj: {
      default: "images/products/watch-1.jpg",
      hover: "images/products/watch-2.jpg",
    },
    category: { title: "watches", link: "#" },
    title: "Smart watche Vital Plus",
    rating: 3.5,
    discountedPrice: 100.0,
    originalPrice: 120.0,
  },
  {
    id: 8,
    imageObj: {
      default: "images/products/party-wear-1.jpg",
      hover: "images/products/party-wear-2.jpg",
    },
    category: { title: "party wear", link: "#" },
    title: "Womens Party Wear Shoes",
    rating: 4,
    discountedPrice: 25.0,
    originalPrice: 30.0,
    label: {
      title: "sale",
      className: "angle black",
    },
  },
  {
    id: 9,
    imageObj: {
      default: "images/products/jacket-1.jpg",
      hover: "images/products/jacket-2.jpg",
    },
    category: { title: "jacket", link: "#" },
    title: "Mens Winter Leathers Jackets",
    rating: 3.5,
    discountedPrice: 32.0,
    originalPrice: 45.0,
  },
  {
    id: 10,
    imageObj: {
      default: "images/products/sports-2.jpg",
      hover: "images/products/sports-4.jpg",
    },
    category: { title: "sports", link: "#" },
    title: "Trekking & Running Shoes - black",
    rating: 4,
    discountedPrice: 58.0,
    originalPrice: 64.0,
    label: {
      title: "sale",
      className: "angle black",
    },
  },
  {
    id: 11,
    imageObj: {
      default: "images/products/shoe-1.jpg",
      hover: "images/products/shoe-1_1.jpg",
    },
    category: { title: "formal", link: "#" },
    title: "Men's Leather Formal Wear shoes",
    rating: 3.5,
    discountedPrice: 50.0,
    originalPrice: 65.0,
  },
  {
    id: 12,
    imageObj: {
      default: "images/products/shorts-1.jpg",
      hover: "images/products/shorts-2.jpg",
    },
    category: { title: "shorts", link: "#" },
    title: "Better Basics French Terry Sweatshorts",
    rating: 4,
    discountedPrice: 78.0,
    originalPrice: 85.0,
    label: {
      title: "sale",
      className: "angle black",
    },
  },
];

export const testimonialsData = [
  {
    imageSrc: "images/testimonial-1.jpg",
    name: "Alan Doe",
    title: "CEO & Founder Invision",
    quote:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.",
  },
  {
    imageSrc: "images/testimonial-1.jpg",
    name: "Alan Doe",
    title: "CEO & Founder Invision",
    quote:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.",
  },
  {
    imageSrc: "images/testimonial-1.jpg",
    name: "Alan Doe",
    title: "CEO & Founder Invision",
    quote:
      "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.",
  },
];

export const blogData = [
  {
    category: { title: "Fashion", link: "#" },
    blog: {
      title: "Clothes Retail KPIs 2021 Guide for Clothes Executives.",
      link: "#",
    },
    metaData: { author: "Mr Admin", date: "Apr 06, 2022" },
    imgSrc: "images/blog-1.jpg",
  },
  {
    category: { title: "Clothes", link: "#" },
    blog: {
      title: "Curbside fashion Trends: How to Win the Pickup Battle.",
      link: "#",
    },
    metaData: { author: "Mr Robin", date: "Jan 18, 2022" },
    imgSrc: "images/blog-2.jpg",
  },
  {
    category: { title: "Shoes", link: "#" },
    blog: {
      title: "EBT vendors: Claim Your Share of SNAP Online Revenue.",
      link: "#",
    },
    metaData: { author: "Mr Selsa", date: "Feb 10, 2022" },
    imgSrc: "images/blog-3.jpg",
  },
  {
    category: { title: "Electronics", link: "#" },
    blog: {
      title: "Curbside fashion Trends: How to Win the Pickup Battle.",
      link: "#",
    },
    metaData: { author: "Mr Pawar", date: "Mar 15, 2022" },
    imgSrc: "images/blog-4.jpg",
  },
];

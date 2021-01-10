import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Garima/Hero-Slide-8-Graphics---Best-Selling-Appliances-Store_1500x600._CB412649595_.jpg"
          alt="Home Carosal"
        />
      </div>
      <div className="home__row">
        {/* Product 1 */}
        <Product
          id="125"
          title="HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1024AX"
          price={59990.0}
          image="https://m.media-amazon.com/images/I/71FeUtw+TPL._AC_UY327_FMwebp_QL65_.jpg"
          rating={5}
        />
        {/* Product 2 */}
        <Product
          id="4187"
          title="Acer Predator Triton Intel i5 10th Gen 15.6 FHD IPS 144 Hz Display Full Metal Thin & Light Gaming Laptop (8GB RAM/512GB SSD/Win10/GTX 1650Ti Graphics/19.9mm Thin/Abyssal Black), PT315-52"
          price={74990.0}
          image="https://m.media-amazon.com/images/I/71Pp8PLPNAL._AC_UY327_FMwebp_QL65_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        {/* Product 1 */}
        <Product
          id="3248"
          title="Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with Music Control and Unlimited Watch Faces"
          price={2299.0}
          image="https://m.media-amazon.com/images/I/41+Y1oz4TML.jpg"
          rating={4}
        />
        {/* Product 2 */}
        <Product
          id="105"
          title="boAt Rockerz 600 Bluetooth Headphone with Luxurious Sound, Plush Earcushions, Foldable Ergonomic Design and Up to 8H Playtime (Black)
          by Boat"
          price={1999.0}
          image="https://m.media-amazon.com/images/I/41wp+P2OdvL.jpg"
          rating={4}
        />
        {/* Product 3 */}
        <Product
          id="0542"
          title="Echo Dot (3rd Gen) with Amazon Smart Plug"
          price={4498.0}
          image="https://images-na.ssl-images-amazon.com/images/I/41TKVl%2B0Z8L._SY450_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        {/* Product 1 */}
        <Product
          id="1874"
          title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
          price={81000.0}
          image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY327_FMwebp_QL65_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;

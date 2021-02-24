import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">

        <Product
            id="23445930"
            title="Wilson Evolution Game Basketball"
            price={64.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91vdgs5FY4L._AC_UL480_FMwebp_QL65_.jpg"
          />
       
          <Product
            id="49538094"
            title="Amazon Basics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
            price={12.49}
            rating={4}
            image="https://m.media-amazon.com/images/I/41gT9mzRM8L._AC_SY200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminium Case with Black Sport Band"
            price={199.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_UY327_FMwebp_QL65_.jpg"
          />
        

          <Product
            id="12321341"
            title="Relentless: From Good to Great to Unstoppable (Tim Grover Winning Series). By Tim S. Grover and Shari Wenk"
            price={12.48}
            rating={5}
            image="https://m.media-amazon.com/images/I/71erggj8pSL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="Acer Aspire 5 Slim Laptop, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Windows 10 in S Mode, Silver"
            price={364.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, White"
            price={642.52}
            rating={4}
            image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

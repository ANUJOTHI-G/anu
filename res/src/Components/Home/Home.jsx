// Home.js
import React from 'react';
import "./Home.css";
// Correct import statement


const Home = () => {
  return (
    <div >
  <section className="about-us">
          <div className="about">
            <img src="img/logo.png" className="pic" alt='logo'/>
            <div className="text">
              <h6>Welcome Hey Pure!</h6>
              <div classname="run">
              <p> Where Elegance Meets Radiance
                Indulge in a world of beauty and sophistication at Luxe Beauty Lounge. Our carefully curated selection of premium beauty products and expert insights will elevate your beauty routine and inspire your self-expression.
                Discover the power of nature in our Natural Radiance Collection. Immerse yourself in botanical wonders that enhance your beauty organically. From revitalizing serums to calming masks, let nature's touch reveal your inner glow.</p>
            
             </div>  
            </div>
          </div>
        </section>

    </div>
  );
};

export default Home;

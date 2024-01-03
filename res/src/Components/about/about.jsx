import React from 'react';
import "./about.css";
const about = () => {
  return (
    <div className="about">
      <header>
        <h1 className='h1'>About</h1>
      </header>
      <section className="terms-content">
        <center>
        <h2>About</h2>
        <p>
        Welcome to Hey Pure!, where passion meets fashion and convenience aligns with quality. We are more than just an online store; we are a destination for trendsetters, style seekers, and those who appreciate the finer things in life.
        </p>

        <h2>Our Story</h2>
        <p>
        Born out of a shared love for style and a commitment to delivering exceptional experiences,Hey Pure! was founded in [Year]. What started as a small idea has grown into a dynamic platform, curating the latest trends and timeless classics to elevate your wardrobe.
        </p>

        <h2>Our Mission</h2>
        <p>
        Our mission is simple yet powerful: to inspire confidence and empower individuals to express their unique style. We believe that fashion is a form of self-expression, and every purchase is an opportunity to enhance your personal narrative.
        </p>
        </center>
</section>
    </div>
  );
};

export default about;
import React from 'react';
import './Home.css'; // Ensure this file exists
import backgroundImage from '../assets/images/background.jpg'; // Adjust the path as necessary
import aboutImage from '../assets/images/bg2.webp'; // Import the about image
import productImage1 from '../assets/images/p1.jpg'; // Replace with the actual product 1 image path
import productImage2 from '../assets/images/p2.jpg'; // Replace with the actual product 2 image path

function Home() {
  return (
    <div>
      {/* First Section: Company Name with Background Image */}
      <section 
        className="home-banner" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="banner-content text-center">
          <h1 className="company-name">Universal Plastics and Rubber</h1>
          <p className="intro-text">Welcome to Universal Plastic and Rubber, specializing in high-quality 24-mesh crumbled rubber and flap powder for sustainable industrial solutions</p>
        </div>
      </section>

      {/* Second Section: About Us with Image */}
      <section className="about-us-section">
        <div className="container d-flex align-items-center">
          <div className="about-text">
            <h2>About Us</h2>
            <h4 className="mb-3">Why Choose Us</h4>
            <p>At Universal Plastics and Rubber, we specialize in high-quality 24-mesh crumbled rubber powder and flap powder from recycled materials. Our advanced recycling processes ensure eco-friendly products that meet industry demands. With a focus on sustainability and innovation, we provide durable, reliable solutions to help reduce waste in manufacturing.</p>
            <ul className="why-choose-us">
              <li>⬤ Eco-friendly Solutions</li>
              <li>⬤ Precision and Quality</li>
              <li>⬤ Cost-effective Products</li>
              <li>⬤ Industry Expertise</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
        </div>
      </section>

      {/* Third Section: Products */}
      <section className="products-section">
        <div className="container">
          <h2 className="text-center mb-4">Our Products</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card product-card">
                <img src={productImage1} className="card-img-top" alt="Product 1" /> {/* Product 1 image */}
                <div className="card-body">
                  <h5 className="card-title">Flap Powder</h5>
                  <p className="card-text">24 Mesh</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card product-card">
                <img src={productImage2} className="card-img-top" alt="Product 2" /> {/* Product 2 image */}
                <div className="card-body">
                  <h5 className="card-title">Crumble Rubber Powder</h5>
                  <p className="card-text">24 Mesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
<footer className="footer-section">
  <div className="container text-center">
    <p>Contact Us: universalplastic12185@gmail.com</p>
    <p>Phone:+91 9895669868</p> {/* Added phone number */}
    <p>Address:Universal Plastic and Rubber, ID Plot,Chambannoor,Angamally South,Kerala</p>
  </div>
</footer>

    </div>
  );
}

export default Home;

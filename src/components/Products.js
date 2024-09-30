import React from 'react';
import './Products.css'; // Ensure this file exists for styling
import productImage1 from '../assets/images/p1.jpg'; // Replace with actual product 1 image path
import productImage2 from '../assets/images/p2.jpg'; // Replace with actual product 2 image path

function Products() {
  return (
    <div>
      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="text-center mb-4">Our Products</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card product-card">
                <img src={productImage1} className="card-img-top" alt="Product 1" />
                <div className="card-body">
                  <h5 className="card-title">Flap Powder</h5>
                  <p className="card-text">24 Mesh</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card product-card">
                <img src={productImage2} className="card-img-top" alt="Product 2" />
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
          <p>Phone: +91 9895669868</p>
          <p>Address: Universal Plastic and Rubber, ID Plot, Chambannoor, Angamally South, Kerala</p>
        </div>
      </footer>
    </div>
  );
}

export default Products;

import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import ProductCard from "./ProductCard";

const ProductDescription = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h3>Product Not Found</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mediascreen container mt-4">
      <Link to="/">
        <Button variant="light" className="mb-3">
          <FaChevronLeft /> Back to Products
        </Button>
      </Link>

      <Row className="mt-2">
        <div className="cat-text">{product.category}:</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {product.name}
            <div className="cat-rate mt-2">
              <span className="stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.floor(product.rating)
                        ? "star-filled"
                        : "star-empty"
                    }
                  >
                    ★
                  </span>
                ))}
              </span>
              ({product.rating})
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand: </div>
          <div className="barnd-text d-inline mx-1">{product.brand}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {product.colors?.map((color, index) => (
            <div
              key={index}
              className="color ms-2 border"
              style={{ backgroundColor: color, width: "30px", height: "30px" }}
              title={`Color ${index + 1}`}
            ></div>
          ))}
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">Specifications:</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {product.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            {product.currentPrice}
            {product.originalPrice && (
              <span className="original-price ms-2 text-decoration-line-through">
                {product.originalPrice}
              </span>
            )}
            {product.discount && (
              <span className="discount-badge ms-2">
                Save {product.discount}
              </span>
            )}
          </div>
          <button
            className={`product-cart-add px-3 py-3 d-inline mx-3 ${
              !product.inStock ? "disabled" : ""
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </Col>
      </Row>

      <h4 className="mt-5 mb-3">Related Products</h4>
      <ProductCard />
    </div>
  );
};

export default ProductDescription;

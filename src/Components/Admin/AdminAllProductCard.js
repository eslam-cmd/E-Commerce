import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import item from "../../images/item.png";
import favoff from "../../images/favoff.png";
import rate from "../../images/rate.png";

const AdminAllProductCard = () => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
      <Card
        className="product-card h-100 w-100"
        style={{
          border: "none",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          overflow: "hidden",
        }}
      >
        {/* Admin Actions */}
        <div className="admin-actions p-2 d-flex justify-content-between">
          <button className="btn-action btn-delete">Delete</button>
          <button className="btn-action btn-edit">Edit</button>
        </div>

        {/* Product Image */}
        <Link to="/AllProducts/:id" className="text-decoration-none">
          <Card.Img
            variant="top"
            src={item}
            className="product-image"
            alt="Product"
          />
        </Link>

        {/* Card Body */}
        <Card.Body className="d-flex flex-column">
          {/* Favorite Button */}
          <div className="d-flex justify-content-end mb-2">
            <button className="btn-favorite">
              <img src={favoff} alt="Add to favorites" width="20" height="20" />
            </button>
          </div>

          {/* Product Title */}
          <Card.Title className="product-title mb-2">
            Black Carbon Smart Watch BBS
          </Card.Title>

          {/* Rating and Price */}
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div className="product-rating d-flex align-items-center">
              <span className="rating-value me-1">4.5</span>
              <img src={rate} alt="Rating" width="14" height="14" />
            </div>
            <div className="product-price">
              <span className="price-value">880</span>
              <span className="price-currency ms-1">EGP</span>
            </div>
          </div>
        </Card.Body>

        {/* Hover Effects */}
        <style jsx>{`
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          }
          .product-image {
            height: 200px;
            object-fit: contain;
            padding: 15px;
          }
          .product-title {
            font-size: 0.95rem;
            color: #333;
            height: 40px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .btn-action {
            border: none;
            background: transparent;
            font-size: 0.8rem;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
          }
          .btn-delete {
            color: #dc3545;
          }
          .btn-edit {
            color: #0d6efd;
          }
          .btn-favorite {
            border: none;
            background: transparent;
            padding: 0;
          }
          .product-rating {
            color: #ffc107;
            font-weight: 500;
          }
          .product-price {
            color: #28a745;
            font-weight: 600;
          }
          @media (max-width: 768px) {
            .product-image {
              height: 160px;
            }
          }
        `}</style>
      </Card>
    </Col>
  );
};

export default AdminAllProductCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CategoryHeader = () => {
  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Appliances",
    "Deals",
    "Home",
    "Beauty",
    "Sports",
    "Toys",
    "More",
  ];

  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap align-items-center">
            {categories.map((category, index) => (
              <div key={index} className="cat-text-header">
                {category}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;

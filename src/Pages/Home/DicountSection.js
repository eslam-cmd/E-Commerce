import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import labtops from "../../images/laptops.png";

const DicountSection = () => {
  return (
    <Container>
      <Row className="discount-backcolor my-3 mx-2 d-flex text-center align-items-center">
        <Col sm="6">
          <div className="discount-title">Up to 30% discount on laptops </div>
        </Col>

        <Col sm="6">
          <img className="dicount-img " src={labtops}></img>
        </Col>
      </Row>
    </Container>
  );
};

export default DicountSection;

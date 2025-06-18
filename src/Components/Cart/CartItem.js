import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import deletion from "../../images/deletion.png";

const CartItem = () => {
  return (
    <Col xs="12" sm="12" className="cart-item-body my-2 d-flex px-2">
      <img width="160px" height="197px" src={mobile} alt="product" />
      <div className="w-100">
        <Row className="justify-content-between">
          <Col sm="12" className="d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 cat-text">Electronics</div>
            <div className="d-flex pt-2" style={{ cursor: "pointer" }}>
              <img src={deletion} alt="delete" width="20px" height="24px" />
              <div className="cat-text d-inline">Remove</div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-2">
          <Col sm="12" className="d-flex flex-row justify-content-start">
            <div className="d-inline pt-2 cat-title">
              iPhone 128GB with 4G technology
            </div>
            <div className="d-inline pt-2 cat-rate me-2">4.5</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1">
            <div className="cat-text d-inline">Brand:</div>
            <div className="barnd-text d-inline mx-1">Apple</div>
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mt-1 d-flex">
            <div
              className="color ms-2 border"
              style={{ backgroundColor: "rgb(229, 44, 44)" }}
            ></div>
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col sm="12" className="d-flex flex-row justify-content-between">
            <div className="d-inline pt-2 d-flex">
              <div className="cat-text mt-2 d-inline">Quantity</div>
              <input
                className="mx-2 text-center"
                type="number"
                style={{ width: "60px", height: "40px" }}
              />
              <Button className="btn btn-dark">Apply</Button>
            </div>
            <div className="d-inline pt-2 barnd-text mt-3 ms-3">
              100,000 SYP
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default CartItem;
    
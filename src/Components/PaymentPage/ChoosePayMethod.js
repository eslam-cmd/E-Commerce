import React from "react";
import { Col, Row } from "react-bootstrap";

const ChoosePayMethod = () => {
  return (
    <div>
      <div className="pt-5 admin-content-text">Choose Payment Method</div>
      <div className="my-3 px-3 user-address-card">
        <Row className="d-flex justify-content-between">
          <Col xs="12" className="my-4">
            <input
              name="paymentMethod"
              type="radio"
              value="creditCard"
              id="creditCard"
              className="mt-2"
            />
            <label htmlFor="creditCard" className="mx-2">
              Pay with Credit Card
            </label>
          </Col>
        </Row>

        <Row>
          <Col xs="12" className="my-4">
            <input
              name="paymentMethod"
              type="radio"
              value="cashOnDelivery"
              id="cashOnDelivery"
              className="mt-2"
            />
            <label htmlFor="cashOnDelivery" className="mx-2">
              Cash on Delivery
            </label>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end align-items-center">
          <div className="product-price d-inline border p-2">500,000 SYR</div>
          <button className="product-cart-add px-3 pt-2 d-inline me-2">
            Complete Purchase
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePayMethod;

import React from "react";
import { Col, Row } from "react-bootstrap";

export const UserEditAdress = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">Edit title </div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Naming the address, for example (home - work)"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Address in detail"
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="phone number"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">Save edited address</button>
        </Col>
      </Row>
    </div>
  );
};

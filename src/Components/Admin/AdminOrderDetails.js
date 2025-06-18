import React from "react";
import CartItem from "../Cart/CartItem";
import { Col, Row } from "react-bootstrap";

const AdminOrderDetails = () => {
  return (
    <div>
      <div className="admin-content-text my-2">Order Details #2245</div>
      <CartItem />
      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">Customer Details</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Cairo",
              fontSize: "16px",
            }}
          >
            Name:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Cairo",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            Eslam Hadaya
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Cairo",
              fontSize: "16px",
            }}
          >
            Phone:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Cairo",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            0958359136
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Cairo",
              fontSize: "16px",
            }}
          >
            Email:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            hdayaaslam34@gmail.com
          </div>
        </Col>
        <div className=" d-inline px-4 border text-center pt-2">
          Total 800000 SYP
        </div>
        <div className="d-flex mt-2 justify-content-center">
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1  text-center px-2 w-50"
          >
            <option value="val">Order Status</option>
            <option value="val2">Processing</option>
            <option value="val2">Completed</option>
            <option value="val2">Cancelled</option>
          </select>
          <button className="btn-a px-3 d-inline mx-2 ">Save</button>
        </div>
      </Row>
    </div>
  );
};

export default AdminOrderDetails;

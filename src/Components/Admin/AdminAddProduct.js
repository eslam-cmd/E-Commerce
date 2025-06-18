import React from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import add from "../../images/add.png";
import Multiselect from "multiselect-react-dropdown";

export const AdminAddProduct = () => {
  const options = [
    { name: "Category One", id: 1 },
    { name: "Category Two", id: 2 },
  ];

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">Add new product</div>
        <Col sm="8">
          <div className="text-form pb-2">Product image</div>
          <img
            alt=""
            src={avatar}
            style={{ width: "120px", height: "120px", cursor: "pointer" }}
          />
          <input
            type="text"
            className="input-form mt-3 px-3 d-block "
            placeholder="Product name"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product description"
          />
          <input
            type="text"
            className="input-form mt-3 px-3 d-block "
            placeholder="Price before discount"
          />
          <input
            type="text"
            className="input-form mt-3 px-3 d-block "
            placeholder="Product price"
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1   px-2 w-100"
          >
            <option value="val"> Main category</option>
            <option value="val"> Category One</option>
            <option value="val2">Category Two</option>
            <option value="val2">Category Three</option>
            <option value="val2">Category Four</option>
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="Subcategory"
            displayValue="name"
            style={{ color: "red" }}
            options={options}
          />

          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1   px-2 w-100"
          >
            <option value="val"> Brand </option>
            <option value="val2">In progress</option>
            <option value="val2">Completed</option>
            <option value="val2">Canceled</option>
          </select>
        </Col>
        <Row className="d-flex flex-column mt-3">
          <div>Available product colors</div>
          <div className="d-flex mt-2">
            <div
              className="color ms-2 border"
              style={{ backgroundColor: "#E52C2c" }}
            ></div>
            <div
              className="color ms-2 border"
              style={{ backgroundColor: "white" }}
            ></div>
            <div
              className="color ms-2 border"
              style={{ backgroundColor: "black" }}
            ></div>
            <img
              alt=""
              src={add}
              style={{ width: "30px", height: "30px", cursor: "pointer" }}
            />
          </div>
        </Row>

        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save mt-2 d-inline">Save changes</button>
        </Col>
      </Row>
    </div>
  );
};

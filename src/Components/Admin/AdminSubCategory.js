import React from "react";
import { Col, Row } from "react-bootstrap";

export const AdminSubCategory = () => {
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">Add New Subcategory</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form mt-3 px-3 d-block text-center"
            placeholder="Subcategory Name"
          />
        </Col>

        <Col sm="8">
          <select
            name="categories"
            id="categories"
            className="select input-form-area mt-1 text-center px-2 w-100"
          >
            <option value="cat1">Category One</option>
            <option value="cat2">Category Two</option>
            <option value="cat3">Category Three</option>
            <option value="cat4">Category Four</option>
          </select>
        </Col>
        <Col sm="8" className="d-flex justify-content-end">
          <button className="btn-save mt-2 d-inline">Save Changes</button>
        </Col>
      </Row>
    </div>
  );
};

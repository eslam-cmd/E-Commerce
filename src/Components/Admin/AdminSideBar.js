import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/admin/AllOrders" style={{ textDecoration: "none" }}>
          <Row>
            <Col sm="12">
              <div className="admin-side-text text-center my-1 p-2 mx-auto border-bottom">
                Manage Orders
              </div>
            </Col>
          </Row>
        </Link>

        <Link to="/admin/AllProduct" style={{ textDecoration: "none" }}>
          <Row>
            <Col sm="12">
              <div className="admin-side-text text-center my-1 p-2 mx-auto border-bottom">
                Manage Products
              </div>
            </Col>
          </Row>
        </Link>

        <Link to="/admin/AddBrand" style={{ textDecoration: "none" }}>
          <Row>
            <Col sm="12">
              <div className="admin-side-text text-center my-1 p-2 mx-auto border-bottom">
                Add Brand
              </div>
            </Col>
          </Row>
        </Link>

        <Link to="/admin/Category" style={{ textDecoration: "none" }}>
          <Row>
            <Col sm="12">
              <div className="admin-side-text text-center my-1 p-2 mx-auto border-bottom">
                Add Category
              </div>
            </Col>
          </Row>
        </Link>

        <Link to="/admin/SubCategory" style={{ textDecoration: "none" }}>
          <Row>
            <Col sm="12">
              <div className="admin-side-text text-center my-1 p-2 mx-auto border-bottom">
                Add Subcategory
              </div>
            </Col>
          </Row>
        </Link>

        <Link to="/admin/AddProduct" style={{ textDecoration: "none" }}>
          <Row>
            <Col sm="12">
              <div className="admin-side-text text-center my-1 p-2 mx-auto border-bottom">
                Add Product
              </div>
            </Col>
          </Row>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;

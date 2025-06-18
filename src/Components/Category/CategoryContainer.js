import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "../Utilities/SectionTitle";
import CategoryCard from "./CategoryCard";
import labtop from "../../images/labtop.png";

const categories = [
  { title: "Home Appliances", background: "#f4dba5", img: labtop },
  { title: "Electronics", background: "#f4dba5", img: labtop },
  { title: "Smartphones", background: "#f4dba5", img: labtop },
  { title: "Laptops", background: "#f4dba5", img: labtop },
  { title: "Fashion", background: "#f4dba5", img: labtop },
  { title: "Home & Kitchen", background: "#f4dba5", img: labtop },
  { title: "Beauty", background: "#f4dba5", img: labtop },
  { title: "Sports", background: "#f4dba5", img: labtop },
  { title: "Toys", background: "#f4dba5", img: labtop },
  { title: "Grocery", background: "#f4dba5", img: labtop },
  { title: "Health", background: "#f4dba5", img: labtop },
  { title: "Automotive", background: "#f4dba5", img: labtop },
];

const CategoryContainer = () => {
  return (
    <Container style={{ minHeight: "630px" }}>
      <SectionTitle title={"All Categories"} />
      <Row className="d-flex my-2 justify-content-between">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            background={category.background}
            img={category.img}
          />
        ))}
      </Row>
    </Container>
  );
};

export default CategoryContainer;

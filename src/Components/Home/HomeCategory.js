import React from "react";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "../Utilities/SectionTitle";
import CategoryCard from "../Category/CategoryCard";
import labtop from "../../images/labtop.png";

const HomeCategory = () => {
  const categories = [
    { title: "Home Appliances", background: "#f4dba5", img: labtop },
    { title: "Electronics", background: "#f4dba5", img: labtop },
    { title: "Smartphones", background: "#f4dba5", img: labtop },
    { title: "Fashion", background: "#f4dba5", img: labtop },
    { title: "Home & Kitchen", background: "#f4dba5", img: labtop },
    { title: "Beauty", background: "#f4dba5", img: labtop },
  ];

  return (
    <Container>
      <SectionTitle
        title={"Categories"}
        btntitle={"View All"}
        pathroute={"/allcategory"}
      />
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

export default HomeCategory;

import React from "react";
import styled from "styled-components";
import { Container, Row, Card } from "react-bootstrap";
import SectionTitle from "../Utilities/SectionTitle";

// Styled components
const BrandContainerWrapper = styled(Container)`
  padding: 2rem 0;
  margin-bottom: 3rem;
`;

const BrandRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const BrandCard = styled(Card)`
  width: 140px;
  height: 140px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${(props) => props.bgcolor || "#fff"};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const BrandLogoContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: ${(props) => (props.darkbg ? "brightness(0) invert(1)" : "none")};
`;

const BrandName = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => (props.darkbg ? "white" : "#333")};
  margin: 0;
  text-align: center;
  padding: 0.5rem 0 0 0;
`;

// Component
const BrandContainer = ({ title, btntitle }) => {
  const brands = [
    {
      id: 1,
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      bgColor: "#f5f5f7",
    },
    {
      id: 2,
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      bgColor: "#1428a0",
    },
    {
      id: 3,
      name: "Sony",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sony_logo_black.svg",
      bgColor: "#ffffff",
    },
    {
      id: 5,
      name: "Xiaomi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg",
      bgColor: "#ff6700",
    },
    {
      id: 6,
      name: "Huawei",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Huawei_Standard_logo.svg",
      bgColor: "#ff0000",
    },
    {
      id: 7,
      name: "OnePlus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/OnePlus_logo.svg",
      bgColor: "#f5010c",
    },
    {
      id: 8,
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      bgColor: "#4285f4",
    },
  ];

  return (
    <BrandContainerWrapper>
      <SectionTitle title={title} btntitle={btntitle} pathroute="/allBrands" />
      <BrandRow>
        {brands.map((brand) => {
          const darkBackgrounds = [
            "#1428a0",
            "#a50034",
            "#ff0000",
            "#f5010c",
            "#4285f4",
          ];
          const isDarkBg = darkBackgrounds.includes(
            brand.bgColor.toLowerCase()
          );

          return (
            <BrandCard key={brand.id} bgcolor={brand.bgColor}>
              <BrandLogoContainer>
                <BrandLogo
                  src={brand.logo}
                  alt={brand.name}
                  darkbg={isDarkBg}
                />
              </BrandLogoContainer>
              <BrandName darkbg={isDarkBg}>{brand.name}</BrandName>
            </BrandCard>
          );
        })}
      </BrandRow>
    </BrandContainerWrapper>
  );
};

export default BrandContainer;

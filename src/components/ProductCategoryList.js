import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCategoryCard from "./ProductCategoryCard";
import { Link } from "react-router-dom";

const ProductCategoryList = ({ data }) => {
  return (
    <>
      <h1
        className="text-start fs-4 mt-5 mb-5 ms-3"
        style={{ letterSpacing: ".2rem" }}
      >
        SHOP BY CATEGORY
      </h1>
      <Container fluid className="px-5 ">
        <Row className="g-2 mt-5">
          {data.map((d) => (
            <Col key={d.id} sm={12} md={4} lg={2} className="">
              <Link to={`/productcategory/${d.category_name}`}>
                {" "}
                <ProductCategoryCard data={d} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductCategoryList;

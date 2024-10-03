import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ data }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        style={{ overflow: "hidden", objectFit: "fill" }}
        variant="top"
        src={data.main_img}
        width="120px"
        height="300px"
      />
      <Card.Body>
        <Card.Title>{data.brand}</Card.Title>
        <Card.Text>{data.prod_card_title}</Card.Text>
        <div>{data.actual_price}</div>
        <div>{data.actual_discount}</div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

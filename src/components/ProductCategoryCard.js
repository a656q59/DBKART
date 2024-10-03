import React from "react";
import { Card } from "react-bootstrap";

const ProductCategoryCard = ({ data }) => {
  const url =
    "http://localhost:3000/" +
    data.category_image.slice(3, data.category_image.length);

  return (
    <Card style={{ height: "350px" }}>
      {data && (
        <Card.Img variant="top" src={data.category_image} height="350px" />
      )}

      <Card.ImgOverlay style={{ marginTop: "170px" }} className=" opacity-75 ">
        <Card.Body className="bg-danger text-white px-0 ">
          <h4>{data.category_name.split("_").join(" ").toUpperCase()}</h4>
          <h3>{data.offers} OFF</h3>

          <h4>Shop Now</h4>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ProductCategoryCard;

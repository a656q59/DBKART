import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import wall from "../wall.jpg";
import "./CarouselBanner.css";

function CarouselBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="border border-primary custom mt-5"
    >
      <Carousel.Item className="container-fluid">
        <Row className="justify-content-center ">
          <Col sm={3}>
            <Image src={wall} fluid />
          </Col>
          <Col sm={3}>
            <Image src={wall} fluid />
          </Col>
          <Col sm={3}>
            <Image src={wall} fluid />
          </Col>
          <Col sm={3}>
            <Image src={wall} fluid />
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item className="container-fluid">
        <Row className="justify-content-center">
          <Col sm={3}>
            <Image src={wall} fluid />
          </Col>
          <Col sm={3}>
            <Image src={wall} fluid />
          </Col>
          <Col sm={3}>
            <Image src={wall} fluid />
          </Col>
          <Col sm={3}>
            <Image src={wall} fluid />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;

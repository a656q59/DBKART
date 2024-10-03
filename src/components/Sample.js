import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ima1 from "../images/image1.png";
const Sample = () => {
  return (
    <Container className="bg-primary ">
      <Row>
        <Col
          className="border border-danger"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Container>
            <Row>
              <Col>
                <Image src={ima1} width="290px" />
              </Col>
              <Col>
                <Image src={ima1} width="290px" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={ima1} width="290px" />
              </Col>
              <Col>
                <Image src={ima1} width="290px" />
              </Col>
            </Row>

            <Row>
              <Col>
                <Image src={ima1} width="290px" />
              </Col>
              <Col>
                <Image src={ima1} width="290px" />
              </Col>
            </Row>
          </Container>
        </Col>

        <Col
          className="border border-danger text-start"
          style={{ width: "100vw", height: "100vh" }}
        >
          <h2>karachi pattern</h2>
          <h3>sarees</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Sample;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import googlePlay from "../images/google_play.png";
import AppStore from "../images/appstore.png";

const Footer = () => {
  return (
    <Container
      className="mt-5"
      fluid
      style={{ backgroundColor: "#FAFBFC", fontSize: "12px" }}
    >
      <Row>
        <Col sm={2}></Col>
        <Col>
          <Row className="text-start">
            <Col sm={2}>
              <Row className="mb-4">
                <Col>
                  <div>ONLINE SHOPPING</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>Men</div>
                  <div>Women</div>
                  <div>Kids</div>
                  <div>Home & Living</div>
                  <div>Beauty</div>
                  <div>Gift Cards</div>
                  <div>Myntra Insider</div>
                </Col>
              </Row>
            </Col>
            <Col sm={2}>
              <Row className="mb-4">
                <Col>
                  <div>CUSTOMER POLICIES</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>Contact Us</div>
                  <div>FAQ</div>
                  <div>T&C</div>
                  <div>Track Orders</div>
                  <div>Shipping</div>
                  <div>Cancellation</div>
                  <div>Returns</div>
                  <div>Privacy Officers</div>
                  <div>Grievance Officer</div>
                </Col>
              </Row>
            </Col>

            <Col sm={4}>
              <Row className="mb-3">
                <Col>
                  <div>EXPERIENCE MYNTRA APP ON MOBILE</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src={googlePlay} width="140px" height="45px" />
                </Col>
                <Col>
                  <img src={AppStore} width="140px" height="45px" />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <div>KEEP IN TOUCH</div>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col>
                  <div>Various Icons</div>
                </Col>
              </Row>
            </Col>

            <Col sm={4}>asd</Col>
          </Row>

          <Row className="text-start">
            <Col sm={2}>
              <Row className="mb-4">
                <Col>
                  <div>USEFUL LINKS</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>Blog</div>
                  <div>Careers</div>
                  <div>Site Map</div>
                  <div>Corporate Information</div>
                  <div>Whitechat</div>
                  <div>Cleartrip</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col sm={2}></Col>
      </Row>
    </Container>
  );
};

export default Footer;

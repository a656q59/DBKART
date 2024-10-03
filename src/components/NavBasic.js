import { Col, Form, Row, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBasic.css";

function NavBasic() {
  return (
    <Navbar expand="lg" className="bg-body-secondary px-5">
      <Container fluid>
        <Navbar.Brand href="\">DBKART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <Row className="w-100 ">
              <Col lg={5} className="d-flex justify-content-around">
                <Nav.Link href="#home">MEN</Nav.Link>
                <Nav.Link href="#link">WOMEN</Nav.Link>
                <Nav.Link href="#home">KIDS</Nav.Link>

                <Nav.Link href="#home">HOME & LIVING</Nav.Link>

                <Nav.Link href="#home">BEAUTY</Nav.Link>

                <Nav.Link href="#home">STUDIO</Nav.Link>
              </Col>

              <Col className="d-flex justify-content-around " lg={4}>
                <Form inline="true" className="w-100">
                  <Row className="">
                    <Col xs="" className="">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2  "
                      />
                    </Col>
                  </Row>
                </Form>
              </Col>

              <Col className="d-flex justify-content-around" lg={3}>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <h6>Welcome</h6>
                    <div>to access account and manage orders</div>
                    <Button>LOGIN/SIGNUP</Button>
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">Wishlist</Nav.Link>
                <Nav.Link href="#home">Bag</Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBasic;

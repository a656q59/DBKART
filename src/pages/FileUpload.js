// import React, { useEffect, useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import axiosInstance from "../util/axiosConfig";

// const ImageUploadForm = () => {
//   const [files, setFiles] = useState([]);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [previewUrl, setPreviewUrl] = useState(null);

//   // Handle file change

//   const handleMultipleChange = (event) => {
//     setFiles([...files, ...event.target.files]);
//     const imagePreviews = [];

//     // Optional: Preview the selected image before upload
//     //     if (files) {
//     //       files.forEach((files)=>{

//     //       const reader = new FileReader();
//     //     reader.onloadend = () => {
//     //         imagePreviews.push(file);
//     // }
//     //       }

//     // )};

//     // reader.onloadend = () => {
//     //   setPreviewUrl(reader.result);
//     // };
//     // reader.readAsDataURL(files);
//   };

//   // Handle form submission

//   const handleMultipleSubmit = async (event) => {
//     event.preventDefault();

//     const url = "http://localhost:8080/upload-images";

//     if (!files) {
//       alert("Please select a file first!");
//       return;
//     }

//     // Create FormData object to send image file
//     const formData = new FormData();
//     files.forEach((file) => {
//       formData.append("files", file); // Append each file to formData with name 'files'
//       // formData.append('upload_preset', 'docs_upload_example_us_preset');
//     });

//     try {
//       // Replace the URL below with your backend API URL
//       const response = await axiosInstance.post(url, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       // Handle success (e.g., display uploaded image URL)
//       // alert(`Image uploaded successfully`);
//       setUploadedFiles(response);
//     } catch (error) {
//       console.error("Error uploading the file", error);
//       alert("Image upload failed!");
//     }
//   };

//   return (
//     <>
//       {uploadedFiles.length !== 0 && (
//         <h2 className="text-success">Image successfully uploaded</h2>
//       )}
//       <Form onSubmit={handleMultipleSubmit} method="POST">
//         <Form.Group controlId="formFile" className="mb-3">
//           <Form.Label>Upload multiple images</Form.Label>
//           <Form.Control
//             type="file"
//             name="files"
//             accept="image/*"
//             multiple
//             onChange={handleMultipleChange}
//           />
//         </Form.Group>

//         {/* {previewUrl && (
//         <div className="mb-3">
//           <img
//             src={previewUrl}
//             alt="Preview"
//             style={{ width: "100%", maxWidth: "300px" }}
//           />
//         </div>
//       )} */}

//         <Button variant="primary" type="submit">
//           Upload Image
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default ImageUploadForm;

// import React, { useState } from "react";
// import { Container, Dropdown, ListGroup } from "react-bootstrap";

// const DynamicListExample = () => {
//   // State to hold selected category
//   const [selectedCategory, setSelectedCategory] = useState("");

//   // Sample data for categories and their respective items
//   const data = {
//     Fruits: ["Apple", "Banana", "Orange"],
//     Vegetables: ["Carrot", "Lettuce", "Potato"],
//     Dairy: ["Milk", "Cheese", "Yogurt"],
//   };

//   // Function to handle dropdown selection
//   const handleSelect = (eventKey) => {
//     setSelectedCategory(eventKey); // Update the selected category
//   };

//   return (
//     <Container>
//       <h2>Select a Category</h2>
//       <Dropdown onSelect={handleSelect}>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//           {selectedCategory || "Choose a category"}
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           {Object.keys(data).map((category) => (
//             <Dropdown.Item key={category} eventKey={category}>
//               {category}
//             </Dropdown.Item>
//           ))}
//         </Dropdown.Menu>
//       </Dropdown>

//       <h3 className="mt-4">Items:</h3>
//       <ListGroup>
//         {selectedCategory &&
//           data[selectedCategory].map((item, index) => (
//             <ListGroup.Item key={index}>{item}</ListGroup.Item>
//           ))}
//       </ListGroup>
//     </Container>
//   );
// };

// export default DynamicListExample;

import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import salwar from "../wall.jpg";
import salwaar from "../wall.jpg";
import Salwaaar from "../wall.jpg";
import salwaaaar from "../wall.jpg";
import ashi from "../wall.jpg";
import shubh from "../wall.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

const MyComponent = () => {
  const [deliveryOption, setDeliveryOption] = useState("");
  return (
    <Container className="bg-white" fluid>
      <Row>
        <Row>
          <div>
            Home/Clothing/Women Clothing/Kurtas/
            <strong>Karachi Kurtas More by Ashima</strong>
          </div>
        </Row>

        <Col className="border border-white" style={{ height: "100vh" }}>
          <Row>
            <Col className="d-flex justify-content-center">
              <Image src={salwar} alt="Salwar Suit 1" className="img-fluid" />
            </Col>

            <Col className="d-flex justify-content-center">
              <Image src={salwaar} alt="Salwar Suit 2" className="img-fluid" />
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center">
              <Image src={Salwaaar} alt="Salwar Suit 3" className="img-fluid" />
            </Col>

            <Col className="d-flex justify-content-center">
              <Image
                src={salwaaaar}
                alt="Salwar Suit 4"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center">
              <Image src={ashi} alt="Salwar Suit 5" className="img-fluid" />
            </Col>

            <Col className="d-flex justify-content-center">
              <Image src={shubh} alt="Salwar Suit 6" className="img-fluid" />
            </Col>
          </Row>
        </Col>

        <Col
          className="border border-white text-start"
          style={{ height: "100vh" }}
        >
          <h2>Karachi Pattern</h2>
          <h4 className="text-secondary">
            Ethnic Motifs Printed V-Neck Pure Cotton A-Line Kurta with Palazzos
            & Dupatta
          </h4>
          <div>
            <div className="mb-2">
              <span>
                <strong>4.7</strong> Ratings
              </span>
            </div>
            <div>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>

          <h4>MRP 2999</h4>
          <h6 className="text-success">Inclusive of all taxes</h6>

          <h6>Select Size:</h6>
          <select className="mb-3">
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
            <option value="xl">Extra Large</option>
          </select>

          <h6>Select Chart</h6>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button class="btn btn-primary btn-custom" id="addToBag">
              Add to Bag
            </button>
            <button
              class="btn btn-outline-secondary btn-custom mt-2"
              id="addToWishlist"
            >
              Add to Wishlist
            </button>
          </div>

          <div>DELIVERY OPTIONS</div>
          <div className="d-flex flex-column mt-2 mb-3">
            <div
              className="delivery-option"
              onClick={(e) => setDeliveryOption(e.currentTarget)}
            >
              Standard Delivery
            </div>
            <div
              className="delivery-option mt-2"
              onClick={(e) => setDeliveryOption(e.currentTarget)}
            >
              Express Delivery
            </div>
          </div>

          <style>
            {`
              .delivery-option {
                cursor: pointer;
                border: 2px solid transparent;
                border-radius: 5px;
                padding: 10px 15px;
                transition: all 0.3s;
              }
              .delivery-option:hover {
                border-color: #007bff;
              }
              .delivery-option.active {
                background-color: #007bff;
                color: white;
                border-color: #007bff;
              }
            `}
          </style>

          <div>100% Original Products</div>
          <div>Cash on delivery available</div>
          <div className="mb-3">Easy 10 days returns and exchanges</div>

          <strong>BEST OFFERS</strong>
          <div>
            <strong>
              1. 10% Discount on ICICI Bank Credit Card, Debit Card & EMI
              transactions.
            </strong>
          </div>
          <div>
            <strong>
              2. 10% Discount on SBI Bank Credit Card, Debit Card & EMI
              transactions.
            </strong>
          </div>
          <div>
            <strong>
              3. 10% Discount on Axis Bank Credit Card, Debit Card & EMI
              transactions.
            </strong>
          </div>
          <div className="mb-3">
            <strong>
              4. 10% Discount on Kotak Mahindra Bank Credit Card, Debit Card &
              EMI transactions.
            </strong>
          </div>

          <strong>Product Details</strong>
          <div className="mb-3">
            Navy blue, white & red printed Kurta with Palazzo and dupatta
          </div>
          <strong>Kurta Design:</strong>
          <div>Ethnic motifs printed</div>
          <div>A-line shape</div>
          <div>Regular style</div>
          <div>V-neck, three-quarter regular sleeves</div>
          <div>Calf length with flared hem</div>
          <div className="mb-3">Pure cotton machine weave fabric</div>
          <strong>Palazzos Design:</strong>
          <div>Printed Palazzos</div>
          <div>Elasticated waistband</div>
          <div className="mb-3">Slip-on closure</div>
          <strong>Dupatta:</strong>
          <div>Solid</div>
          <div className="mb-3">Taping border</div>
          <strong>Size & Fit:</strong>
          <div className="mb-3">
            The model (height 5'11) is wearing a size S
          </div>
          <strong>Material & Care:</strong>
          <div>Top Fabric: Pure Cotton</div>
          <div>Bottom Fabric: Pure Cotton</div>
          <div>Dupatta Fabric: Poly Chiffon</div>
          <div className="mb-3">Machine Wash</div>
          <strong>Specifications</strong>
          <div className="text-secondary">Sleeve Length</div>
          <div className="mb-2">Long Sleeves</div>
          <div className="text-secondary">Top Type</div>
          <div className="mb-2">Kurta</div>
          <div className="text-secondary">Dupatta</div>
          <div className="mb-2">With Dupatta</div>
          <div className="text-secondary">Top Design Styling</div>
          <div className="mb-2">Regular Style</div>
          <div className="text-secondary">Number of Items</div>
          <div className="mb-3">One</div>
          <div>
            Product Code:<strong>987654321</strong>
          </div>
          <div>
            Seller:{" "}
            <div className="text-danger">
              <strong>Lonkar Fashions Private Limited</strong>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;

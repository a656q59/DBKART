import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axiosInstance from '../util/axiosConfig';

const FormCustom = ({ cat_name, id, data, onClick }) => {
  // Initialize all form data fields in a single state object
  const [formData, setFormData] = useState({
    subcategory: '',
    brand: '',
    color: '',
    actual_discount: '',
    size: '',
    actual_price: '',
    stock: '',
    prod_card_title: '',
    prod_detail_page_subtitle: '',
    prod_desc: '',
    seller_name: '',
    gender: '',
    main_img: null,
    sub_img1: null,
    sub_img2: null,
    sub_img3: null
  });

  const [imgPreview, setImgPreview] = useState({ 1: "", 2: "", 3: "", 4: "" });

  // Handle changes for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image upload separately for each image
  const handleImageUpload = (e, index, imageKey) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [imageKey]: file
    });
    setImgPreview({
      ...imgPreview,
      [index]: URL.createObjectURL(file)
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value
    });
  };

  const handleMultipleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:8080/api/updateProduct/${cat_name}/product/${id}`;
    
    // Create FormData object for file uploads
    const uploadData = new FormData();

    Object.keys(formData).forEach(key => {
      uploadData.append(key, formData[key]);
    });

    try {
      const response = await axiosInstance.put(url, uploadData);
      if (response !== 'undefined') {
        console.log(response);
        alert('Data uploaded successfully');
        onClick('clicked',response.data);
      }
    } catch (error) {
      console.error("Error uploading the file", error.message);
      alert("Data upload failed!");
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleMultipleSubmit} method="POST" className='d-flex flex-column'>

          <Row className='mb-5'>
            <Col>
              <Form.Group controlId="formGroupSubCategory">
                <Form.Label>Sub Category</Form.Label>
                <Form.Control
                  name="subcategory"
                  type="text"
                  value={formData.subcategory}
                  onChange={handleChange}
                  placeholder={data.subcategory}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroupBrand">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  name="brand"
                  type="text"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder={data.brand}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGroupColor">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  name="color"
                  type="text"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder={data.color}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="actualDiscount">
                <Form.Label>Discount (if any)</Form.Label>
                <Form.Control
                  name="actual_discount"
                  type="number"
                  value={formData.actual_discount}
                  onChange={handleChange}
                  placeholder={data.actual_discount}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className='mb-5'>
            <Col>
              <Form.Group controlId="Price">
                <Form.Label>M.R.P</Form.Label>
                <Form.Control
                  name="actual_price"
                  type="number"
                  value={formData.actual_price}
                  onChange={handleChange}
                  placeholder={data.actual_price}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="Stock">
                <Form.Label>In Stock Quantity</Form.Label>
                <Form.Control
                  name="stock"
                  type="number"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder={data.stock}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="cardTitle">
                <Form.Label>Product title</Form.Label>
                <Form.Control
                  name="prod_card_title"
                  type="text"
                  value={formData.prod_card_title}
                  onChange={handleChange}
                  placeholder={data.prod_card_title}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="detailPageSubtitle">
                <Form.Label>Subtitle for the Detail Page</Form.Label>
                <Form.Control
                  name="prod_detail_page_subtitle"
                  type="text"
                  value={formData.prod_detail_page_subtitle}
                  onChange={handleChange}
                  placeholder={data.prod_detail_page_subtitle}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className='mb-5'>
            <Col>
              <Form.Group controlId="sellerName">
                <Form.Label>Seller Name</Form.Label>
                <Form.Control
                  name="seller_name"
                  type="text"
                  value={formData.seller_name}
                  onChange={handleChange}
                  placeholder="Enter Seller Name"
                />
              </Form.Group>
            </Col>

            {/* Image Upload Section */}
            {["main_img", "sub_img1", "sub_img2", "sub_img3"].map((imageKey, index) => (
              <Col className='d-flex' key={index}>
                <Form.Group controlId={`formFile${index}`} className="mb-3">
                  <Form.Label>{`Upload ${index === 0 ? "Main" : `Image ${index + 1}`}`}</Form.Label>
                  <Form.Control
                    type="file"
                    name={imageKey}
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, index + 1, imageKey)}
                  />
                </Form.Group>
                <img src={imgPreview[index + 1] || data[imageKey]} height="150px" className="ps-3" width="150px" alt="preview" />
              </Col>
            ))}
          </Row>

          <Row className='mb-5'>
            <Col>
              <div className="mb-3 mt-4">
                <Form.Label>Gender</Form.Label>
                <Form.Check
                  inline
                  label="Men"
                  name="gender"
                  type="radio"
                  value="Men"
                  checked={formData.gender === 'Men'}
                  onChange={handleRadioChange}
                />
                <Form.Check
                  inline
                  label="Women"
                  name="gender"
                  type="radio"
                  value="Women"
                  checked={formData.gender === 'Women'}
                  onChange={handleRadioChange}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="productDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="prod_desc"
                  value={formData.prod_desc}
                  onChange={handleChange}
                  placeholder={data.prod_desc}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button className='me-4' variant="primary" type="submit">
                Upload Data
              </Button>
              <Button className='me-4' variant="secondary" type="reset">
                Reset
              </Button>
              <Button onClick={() => onClick("clicked")} variant="secondary" type="button">
                Close
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default FormCustom;

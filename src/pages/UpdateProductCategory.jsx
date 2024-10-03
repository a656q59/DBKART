import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../util/axiosConfig";

const UpdateProductCategory = () => {
  const [data, setData] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [offers, setOffers] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch product category data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:8080/api/productcategory/getCategory"
        );
        if (response) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Handle image upload
  const handleImageUpload = (e) => {
    setCategoryImage(e.target.files[0]); // Grab the first file
  };

  // Handle form submission
  const handleFormSubmit = async (e,id) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category_name", categoryName);
    formData.append("category_image", categoryImage);
    formData.append("offers", offers);
    formData.forEach((name,value)=>{
        console.log("name",name,"value",value);
      })
      const url=`api/productcategory/update/${id}`;

    try {
      // Call API to update the category
      const response = await axiosInstance.put(url,formData );
      console.log(response.data);
      if(response.data){
        alert("successful updation")
      }
      // Update the local state after submission
      const updatedData = data.map((item) =>
        item.id === id
          ? { ...item, category_name: categoryName, category_image: URL.createObjectURL(categoryImage), offers: offers }
          : item
      );
      setData(updatedData);
      setEditId(null); // Exit edit mode
    } catch (error) {
      console.log("Error updating category:", error);
    }
  };

  // Handle entering edit mode
  const handleEditClick = (item) => {
    setEditId(item.id); // Set the item to edit
    setCategoryName(item.category_name); // Pre-fill the category name
    setOffers(item.offers); // Pre-fill the offers
    setCategoryImage(null); // Reset image selection for new upload
  };

  return (
    <>
      <ul className="list-group">
        {data &&
          data.map((d) => (
            <li key={d.id}>
              {editId === d.id ? (
                // Render the form when the edit button is clicked
                <Form method="POST">

                    <Form.Group className="mb-3" controlId="formGroupSubCategory">
                    <Form.Label>Category Name</Form.Label>
                   <Form.Control
                    type="text"
                    name="category_name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                        </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Category Image</Form.Label>
                   <Form.Control 
                    type="file"
                    name="category_image"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Stock">
                      <Form.Label>Offers</Form.Label>
                   <Form.Control
                    type="text"
                    name="offers"
                    value={offers}
                    onChange={(e) => setOffers(e.target.value)}
                  />
                    </Form.Group>

                    <Button variant="primary" className="me-5"type="submit" onClick={(e) =>{handleFormSubmit(e,d.id)}}>Save</Button>
                    <Button variant="secondary" type="reset" onClick={() =>   setEditId(null)}>Close</Button>

                </Form>
              ) : (
                // Render the static row when not editing
                <div className="d-flex flex-row justify-content-evenly mb-3">
                  <span>{d.category_name}</span>
                  <img
                    className="ms-5"
                    src={d.category_image}
                    alt="Category"
                    height="80px"
                    width="80px"
                  />
                  <span className="ms-5">{d.offers}</span>
                  <Button
                    variant="info"
                    className="px-5"
                    onClick={() => handleEditClick(d)}
                  >
                    Update
                  </Button>
                </div>
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default UpdateProductCategory;



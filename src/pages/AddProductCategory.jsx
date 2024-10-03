import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../util/axiosConfig';


const AddProductCategory = () => {
    const [categoryName,setCategoryName] = useState('');
    const[categoryImage, setCategoryImage] = useState(null);
    const[offers,setOffers] = useState('');







    const handleSubmit= async(e)=>{
        e.preventDefault();

        const formData = new FormData();

        formData.append('category_name',categoryName);
        formData.append('category_image',categoryImage);
        formData.append('offers',offers);

        
        const url = "http://localhost:8080/api/productcategory/addCategory";

        formData.forEach((name,value)=>{
            console.log("name",name,"value",value);
          })
    
        try {
          const response = await axiosInstance.post(url, formData);
    
         if(response!=='undefined')
          console.log(response.data);
          {alert(`Data uploaded successfully`);}
        } catch (error) {
         console.error("Error uploading the file", error);
         alert("Data upload failed!");
       }

    }

    const handleImageUpload=(e)=>{
        setCategoryImage(...e.target.files);
    }



  return (


<div className='d-flex justify-content-center'>


  
<Form  onSubmit={handleSubmit} method="POST" className='w-50 '>

<Form.Group className="mb-3" controlId="formGroupSubCategory">
        <Form.Label>Category Name</Form.Label>
        <Form.Control name="category_name" type="text" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} placeholder="Enter Category Name" />
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
    <Form.Control type="text" name="offers" value={offers} onChange={(e)=>setOffers(e.target.value)} placeholder="Enter Offers available" />
  </Form.Group>



  <Button variant="primary" type="submit">
          Upload Category Information
        </Button>

  </Form>



</div>
    )
}

export default AddProductCategory
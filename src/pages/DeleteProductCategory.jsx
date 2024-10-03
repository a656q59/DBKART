import React, { useEffect, useState } from 'react'
import axiosInstance from '../util/axiosConfig';
import { Button } from 'react-bootstrap';

const DeleteProductCategory = () => {
    const [data, setData] = useState(null);


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
    
const handleDelete=async (e,id)=>{
    e.preventDefault();
    const url=`api/productcategory/delete/${id}`;

    try {
        // Call API to update the category
        const response = await axiosInstance.delete(url);
        console.log(response.data);
        if(response.data){
          alert("successful updation")
        }
        // Update the local state after submission
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      } catch (error) {
        console.log("Error updating category:", error);
      }



}


  return (
    <>
<ul className="list-group">

{data &&
    data.map((d) => (
      <li key={d.id}>
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
      variant="danger"
      className="px-5"
      onClick={(e) => handleDelete(e,d.id)}
    >
      Delete
    </Button> 
  </div>
  </li>))
}
</ul>
</>
  )
}

export default DeleteProductCategory



       
import React, { useEffect, useState } from 'react'
import axiosInstance from '../util/axiosConfig';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import FormCustom from '../components/Form2';

const DeleteProduct = () => {
    const [data, setData] = useState([]);
    const[show,setShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();
    const[newData,setNewData] = useState('');
    const [id,setId] = useState(0);
    const [value,setValue] = useState('');
    const [triggerFetch, setTriggerFetch] = useState(false); // State to trigger fetching


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
             } ,
    []);

const handleDelete=async(id)=>{

    console.log("id",id)

    const url = `http://localhost:8080/api/deleteProduct/${selectedCategory}/product/${id}`;
    console.log(url);
    try {
        const response = await axiosInstance.delete(url);
        if (response !== 'undefined') {
          console.log(response);
          alert('Data uploaded successfully');
        //   onClick('clicked',response.data);
        }
      } catch (error) {
        console.error("Error uploading the file", error.message);
        alert("Data upload failed!");
      }


//   setId(id);

//   setShow(true);
}



const handleSelect = async (e) => {
  try{
    const val = e.target.value;
      setSelectedCategory(val); // Update the selected category
      const url=`/api/product-category/${val}/allProducts`;
      const response = await axiosInstance.get(url);
      setNewData(response.data);
   }catch(e){
    console.log(e.message);
  }


  };


  return (

    <Container>
      <h2>Select a Category</h2>


      <Form.Select  onChange={handleSelect} aria-label="Default select example">
      <option disabled>Open this select menu</option>

      {data.map((d) => (
            <option   value={d.category_name} key={d.id} >
              {d.category_name}
            </option>
      ))}


      {}
    </Form.Select>



  
      <h3 className="mt-4">Items:</h3>
      <ListGroup>
        {newData &&
          newData.map((n,index) => (
            <ListGroup.Item key={n.id} className='d-flex justify-content-around'>
            <><span className='fs-1'>{index+1}</span> 
              <img src={n.main_img}width="90px"height="80px"/> 
              <span className='fs-3'>{n.brand}</span>
              <Button variant="danger" onClick={()=>handleDelete(n.id)}className='px-5 mt-2 mb-2  fs-4'>Delete</Button></>
            

            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>


)
}

export default DeleteProduct



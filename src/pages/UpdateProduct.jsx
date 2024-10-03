import React, { useEffect, useState } from 'react'
import axiosInstance from '../util/axiosConfig';
import { Button, Container, Form, ListGroup } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import FormCustom from '../components/Form2';

const UpdateProduct = () => {
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

const handleEdit=(id)=>{
  setId(id);

  setShow(true);
}


// if (triggerFetch) {
//   fetchData(); // Fetch data when triggered
//   setTriggerFetch(false); // Reset the trigger
// }  
// triggerFetch

const handleSelect = async (e) => {
  try{
    const val = e.target.value;
    console.log("val",val)
      setSelectedCategory(val); // Update the selected category
      const url=`/api/product-category/${val}/allProducts`;
      const response = await axiosInstance.get(url);
      setNewData(response.data);
      console.log(response.data);
  
  }catch(e){
    console.log(e.message);
  }


  };

  const handleClick=(e)=>{
    if(e==="clicked"){
      setId(null);
      setTriggerFetch(true); // Set triggerFetch to true, causing useEffect to run
    } 
}
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



  
    
      <ListGroup>
      {newData &&<h3 className="mt-4">Items:</h3>}

        {newData &&
          newData.map((n,index) => (
            
            <ListGroup.Item key={n.id} className='d-flex justify-content-around'>

              {(n.id===id)?(
                <FormCustom onClick = {(e)=>handleClick(e)} cat_name={selectedCategory}id={n.id} data={n}/>
              ): (
              
              <><span className='d-flex align-items-center fs-3'>{index+1}</span> 
              <img src={n.main_img}width="90px"height="80px"/> 
              <span className='fs-3'>{n.brand}</span>
              <Button variant="danger" onClick={()=>handleEdit(n.id)}className='px-5 mt-2 mb-2  fs-4'>Edit</Button></>
            )}

            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>


)
}

export default UpdateProduct



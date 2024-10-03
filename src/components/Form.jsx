import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import axiosInstance from '../util/axiosConfig';

const FormCustom = ({cat_name,id,data,onClick}) => {
  const[formSelect, setFormSelected] = useState('');
  const [img,setImg]=useState({1:"",2:"",3:"",4:""})

  const [gender,setGender] = useState(null);
  const[subcategory,setSubCategory] = useState('');
  const [brand,setBrand] = useState('');
  const [color,setColor] = useState('');
  const[actual_discount,setDiscount] = useState();
  const[size,setSize ]= useState('');
  const[price,setPrice ]= useState();
  const[stock,setStock ]= useState();
  const[prodCardTitle,setProdCardTitle ]= useState();
  const[prodDPSubtitle,setProdDPSubtitle ]= useState();
  const[prod_desc,setProd_desc ]= useState();
  const[sellerName,setSellerName ]= useState();

  const [main_img,setMain_img] = useState(null);
    const[second_img, setSecond_img] =useState(null);
    const[third_img,setThird_img]= useState(null);
    const[forth_img, setFourth_img] = useState(null);


    const handleMainImgUpload = (event) => {
      setImg({...img,1: URL.createObjectURL(event.target.files[0])});

        setMain_img(...event.target.files);
    };
    const handleSecondImgUpload = (event) => {
      setImg({...img,2: URL.createObjectURL(event.target.files[0])});

      setSecond_img(...event.target.files);
    };
    const handleThirdImgUpload = (event) => {
      setImg({...img,3: URL.createObjectURL(event.target.files[0])});
      // console.log( URL.createObjectURL(event.target.files[0]));
      setThird_img(...event.target.files);
    };
    const handleFourthImgUpload = (event) => {
      setImg({...img,4: URL.createObjectURL(event.target.files[0])});

      setFourth_img(...event.target.files);
    };

    const handleRadioChange = (e) => {
        setGender(e.target.value);
    };

  const handleMultipleSubmit=async(e)=>{
    e.preventDefault();

    
    const url = `http://localhost:8080/api/updateProduct/${cat_name}/product/${id}`;

// Create FormData object to send image file
    const formData = new FormData();

    formData.append('gender',gender);
    formData.append('subcategory',subcategory);
    formData.append('brand',brand);
    formData.append("color",color);
    formData.append("actual_discount",actual_discount);
    formData.append("size",size);

    formData.append("actual_price",price);

    formData.append("stock",stock);

    formData.append("main_img",main_img);

    formData.append("sub_img1",second_img);

    formData.append("sub_img2",third_img);

    formData.append("sub_img3",forth_img);

    formData.append("prod_card_title",prodCardTitle);

    formData.append("prod_detail_page_subtitle",prodDPSubtitle);

    formData.append("prod_desc",prod_desc);
    formData.append("seller_name",sellerName);


try {
  const response = await axiosInstance.put(url, formData);

 if(response!=='undefined')
  {
    console.log(response);

    alert(`Data uploaded successfully`);
    onClick("clicked");

  }
} catch (error) {
 console.error("Error uploading the file", error.message);
 alert("Data upload failed!");
}





  }


  return (

    <>
    
    <Container >

    <Form  onSubmit={handleMultipleSubmit} method="POST" className='d-flex flex-column '>

      <Row className='mb-5'>
       
        <Col> <Form.Group className="mb-3" controlId="formGroupSubCategory">
        <Form.Label>Sub Category</Form.Label>
        <Form.Control name="subcategory" type="text" value={subcategory} onChange={(e)=>setSubCategory(e.target.value)} placeholder={data.subcategory} />
      </Form.Group></Col>
      <Col>   <Form.Group className="mb-3" controlId="formGroupBrand">
        <Form.Label>Brand Name</Form.Label>
        <Form.Control type="text" name="brand" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder={data.brand} />
      </Form.Group></Col>

<Col> <Form.Group className="mb-3" controlId="formGroupColor">
        <Form.Label>Color</Form.Label>
        <Form.Control type="text" name="color" value={color} required onChange={(e)=>setColor(e.target.value)} placeholder={data.color} />
      </Form.Group></Col>

      <Col> <Form.Group className="mb-3" controlId="actual Discount">
        <Form.Label>Discount (if any)</Form.Label>
        <Form.Control type="number" name="actual_discount" value={actual_discount} onChange={(e)=>setDiscount(e.target.value)} placeholder={data.actual_discount} />
      </Form.Group></Col>
<Col> <Form.Group className="mb-3" controlId="Size">
        <Form.Label>Size</Form.Label>
        <Form.Control type="text"name="size" value={size} onChange={(e)=>setSize(e.target.value)} placeholder={data.size} />
      </Form.Group></Col>

      
      </Row>


      <Row className='mb-5'>
        <Col><Form.Group className="mb-3" controlId="Price">
        <Form.Label>M.R.P</Form.Label>
        <Form.Control type="number" name="actual_price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder={data.actual_price} />
      </Form.Group></Col>
        <Col><Form.Group className="mb-3" controlId="Stock">
        <Form.Label>In Stock Quantity</Form.Label>
        <Form.Control type="number" name="stock" value={stock} onChange={(e)=>setStock(e.target.value)} placeholder={data.stock} />
      </Form.Group></Col>

      <Col>
        <Form.Group className="mb-3" controlId="card_title">
        <Form.Label>Product title</Form.Label>
        <Form.Control type="text" name="prod_card_title" value={prodCardTitle} onChange={(e)=>setProdCardTitle(e.target.value)} placeholder={data.prod_card_title}/>
      </Form.Group>
      
      </Col>
      <Col><Form.Group className="mb-3" controlId="detail page subtitle">
        <Form.Label>Subtitle for the Detail Page</Form.Label>
        <Form.Control type="text" name="prod_detail_page_subtitle"value={prodDPSubtitle} onChange={(e)=>setProdDPSubtitle(e.target.value)} placeholder={data.prod_detail_page_subtitle} />
      </Form.Group>
</Col>



        
        
        

      </Row>

      <Row className='mb-5'>

      <Col>
      <Form.Group className="mb-3" controlId="Seller Name">
        <Form.Label>Seller Name</Form.Label>
        <Form.Control type="text" name="seller_name" value={sellerName} onChange={(e)=>setSellerName(e.target.value)} placeholder="Enter Seller Name" />
      </Form.Group>
</Col>


     
<Col className='d-flex'><Form.Group controlId="formFile" className="mb-3 ">
          <Form.Label>Upload Main image</Form.Label>
          <Form.Control
            type="file"
            name="main_img"
            accept="image/*"
            onChange={handleMainImgUpload}
          />
          
        </Form.Group>
        <img src={img[1]||data.main_img}height="150px" className="ps-3"width="150px"/></Col>


        <Col className='d-flex'><Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload second image</Form.Label>
          <Form.Control
            type="file"
            name="sub_img1"
            accept="image/*"
            onChange={handleSecondImgUpload}
          />
        </Form.Group>
        <img src={img[2]||data.sub_img1}height="150px" className="ps-3"width="150px"/>
        </Col>
      



      </Row>
      <Row className='mb-5'>
        
        <Col className='d-flex'><Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload third image</Form.Label>
          <Form.Control
            type="file"
            name="sub_img2"
            accept="image/*"
            onChange={handleThirdImgUpload}
          />
        </Form.Group>
        <img src={img[3]||data.sub_img2}height="150px" className="ps-3"width="150px"/>
        
        
        </Col>


        
        <Col className='d-flex'><Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload fourth image</Form.Label>
          <Form.Control
            type="file"
            name="sub_img3"
            accept="image/*"
            onChange={handleFourthImgUpload}
          />
        </Form.Group>
        <img src={img[4]||data.sub_img3}height="150px" className="ps-3"width="150px"/>
        </Col>

        <Col>  <div key={`inline-radio`} className="mb-3 mt-4" >
        <Form.Label>Gender</Form.Label>
          <Form.Check
            inline
            label="Men"
            name="gender"
            type="radio"
            value="Men"
            checked={gender === 'Men'}
            onChange={handleRadioChange}          />
          <Form.Check
            inline
            label="Women"
            name="gender"
            type="radio"
            value='Women'
            checked={gender === 'Women'}
            onChange={handleRadioChange}          />
          
        </div></Col>
        
        
      </Row>
      <Row>
        <Col>
        <Col><Form.Group className="mb-3" controlId="product description">
        <Form.Label>Product Description</Form.Label>
        <Form.Control  as="textarea" rows={3} name="prod_desc" value={prod_desc} onChange={(e)=>setProd_desc(e.target.value)} placeholder={data.prod_desc} />
      </Form.Group></Col>
      
      </Col>
      </Row>
      <Row>
        <Col><Button className='me-4' variant="primary" type="submit">
          Upload Data
        </Button>
        
        <Button className='me-4' variant="secondary" type="reset">
         reset
        </Button>
        
        <Button onClick={()=>onClick("clicked")}variant="secondary" type="close">
         Close
        </Button>
        
        </Col>
        
         
      </Row>
      </Form>
    </Container>
       
    
    
    </>
  )
}

export default FormCustom
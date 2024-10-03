import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axiosInstance from '../util/axiosConfig';
import { Button } from 'react-bootstrap';
import StackingExample from '../components/StackingToast';



const AddProduct = () => {
    const[formSelect, setFormSelected] = useState('');
    const[subcategory,setSubCategory] = useState('');
    const[gender, setGender] = useState('');
    const[color,setColor]  = useState('');
    const[brand, setBrand] = useState('');
    const [data, setData] = useState([]);
    const [discount,setDiscount] = useState(0);
    const[size,setSize] = useState('');
    const [price,setPrice] = useState(0);
    const [stock,setStock] = useState(0);
    const [main_img,setMain_img] = useState(null);
    const[second_img, setSecond_img] =useState(null);
    const[third_img,setThird_img]= useState(null);
    const[forth_img, setFourth_img] = useState(null);

    const[prodCardTitle,setProdCardTitle] = useState('');
    const[prodDPSubtitle,setProdDPSubtitle] = useState('');
    const[prod_desc,setProd_desc] = useState('');
    const [sellerName,setSellerName] = useState('');
    const[uploadedData,setUploadedData] = useState(0);





    
    
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
    [uploadedData]);



    const handleMainImgUpload = (event) => {
        setMain_img(...event.target.files);
    };
    const handleSecondImgUpload = (event) => {
      setSecond_img(...event.target.files);
    };
    const handleThirdImgUpload = (event) => {
      setThird_img(...event.target.files);
    };
    const handleFourthImgUpload = (event) => {
      setFourth_img(...event.target.files);
    };

    const handleRadioChange = (e) => {
        setGender(e.target.value);
    };

    




    const handleMultipleSubmit = async (event) => {
        event.preventDefault();

        const url = "http://localhost:8080/api/addProduct";

        // if (!files) {
        //     alert("Please select a file first!");
        //     return;
        // }

    // Create FormData object to send image file
        const formData = new FormData();

        formData.append('category_name',formSelect);
        formData.append('gender',gender);
        formData.append('subcategory',subcategory);
        formData.append('brand',brand);
        formData.append("color",color);
        formData.append("actual_discount",discount);
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


      formData.forEach((name,value)=>{
        console.log("name",name,"value",value);
      })

    try {
      //
      const {data} = await axiosInstance.post(url, formData);

   
      setUploadedData(data,()=>{
        alert("Data uploaded!");

      });
      
      
    } catch (error) {
     console.error("Error uploading the file", error);
     alert("Data upload failed!");
   }
  };

  // {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // }
 



  return (
    <>
    <Form  onSubmit={handleMultipleSubmit} method="POST">

      <Form.Select className='w-25 ' name="category" value={formSelect} onChange={(e)=>setFormSelected(e.target.value)} >
        <option disabled> select category</option>
        {data.map((d)=>(
            <option value={d.category_name} key={d.id}>{d.category_name}</option>
        ))}
        
      </Form.Select>

      <div key={`inline-radio`} className="mb-3 mt-4" >
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
          
        </div>

        <Form.Group className="mb-3" controlId="formGroupSubCategory">
        <Form.Label>Sub Category</Form.Label>
        <Form.Control name="subcategory" type="text" value={subcategory} onChange={(e)=>setSubCategory(e.target.value)} placeholder="Enter SubCategory Name" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formGroupBrand">
        <Form.Label>Brand Name</Form.Label>
        <Form.Control type="text" name="brand" value={brand} onChange={(e)=>setBrand(e.target.value)} placeholder="Enter Brand Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupColor">
        <Form.Label>Color</Form.Label>
        <Form.Control type="text" name="color" value={color} required onChange={(e)=>setColor(e.target.value)} placeholder="Enter color" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="actual Discount">
        <Form.Label>Discount (if any)</Form.Label>
        <Form.Control type="number" name="actual_discount" value={discount} onChange={(e)=>setDiscount(e.target.value)} placeholder="Enter discount values" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Size">
        <Form.Label>Size</Form.Label>
        <Form.Control type="text"name="size" value={size} onChange={(e)=>setSize(e.target.value)} placeholder="Enter size" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Price">
        <Form.Label>M.R.P</Form.Label>
        <Form.Control type="number" name="actual_price" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Stock">
        <Form.Label>In Stock Quantity</Form.Label>
        <Form.Control type="number" name="stock" value={stock} onChange={(e)=>setStock(e.target.value)} placeholder="Enter stock Quantity" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Main image</Form.Label>
          <Form.Control
            type="file"
            name="main_img"
            accept="image/*"
            onChange={handleMainImgUpload}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload second image</Form.Label>
          <Form.Control
            type="file"
            name="sub_img1"
            accept="image/*"
            onChange={handleSecondImgUpload}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload third image</Form.Label>
          <Form.Control
            type="file"
            name="sub_img2"
            accept="image/*"
            onChange={handleThirdImgUpload}
          />
        </Form.Group>


        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload fourth image</Form.Label>
          <Form.Control
            type="file"
            name="sub_img3"
            accept="image/*"
            onChange={handleFourthImgUpload}
          />
        </Form.Group>





        <Form.Group className="mb-3" controlId="card_title">
        <Form.Label>Product title</Form.Label>
        <Form.Control type="text" name="prod_card_title" value={prodCardTitle} onChange={(e)=>setProdCardTitle(e.target.value)} placeholder="Enter the Product title for the card" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="detail page subtitle">
        <Form.Label>Subtitle for the Detail Page</Form.Label>
        <Form.Control type="text" name="prod_detail_page_subtitle"value={prodDPSubtitle} onChange={(e)=>setProdDPSubtitle(e.target.value)} placeholder="Enter the Product Detail Page SubTitle" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="product description">
        <Form.Label>Product Description</Form.Label>
        <Form.Control type="text" name="prod_desc" value={prod_desc} onChange={(e)=>setProd_desc(e.target.value)} placeholder="Enter Product Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Seller Name">
        <Form.Label>Seller Name</Form.Label>
        <Form.Control type="text" name="seller_name" value={sellerName} onChange={(e)=>setSellerName(e.target.value)} placeholder="Enter Seller Name" />
      </Form.Group>






      

      


        <Button variant="primary" type="submit">
          Upload Data
        </Button>

    </Form>



    </>
)

}

export default AddProduct;
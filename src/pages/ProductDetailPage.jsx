import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../util/axiosConfig';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import BreadcrumbExample from '../components/Breadcrumb';


const ProductDetailPage = () => {
    const {id,product_id}=useParams();
    const [error,setError] = useState(null);
    const [deliveryOption, setDeliveryOption] = useState("");


    const [data,setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try{
          const response = await axiosInstance.get(`http://localhost:8080/api/product-category/${id}/product/${product_id}`);
          if (response) {         
            console.log(response.data);
            setData(response.data);
          }
        }catch(e){
          setError(e.message);
        }
          
      };
      fetchData();
    }, []);
        

  



  return (

    <>
    
    <Container className="bg-white" fluid>
    
    <div>
    Home/Clothing/Women Clothing/Kurtas/
    <strong>Karachi Kurtas More by Ashima</strong>
  </div>
    <BreadcrumbExample id={id} product_id={product_id}/>
           <Col className=''>
           <Row>


<Col className="border border-white " >
  <Row className='mb-4'>
    <Col className="d-flex justify-content-center g-1">
      <Image src={data.main_img} alt="Salwar Suit 1" width="400px"height="200px" className="img-fluid" />
    </Col>

    <Col className="d-flex justify-content-center">
      <Image src={data.sub_img1} alt="Salwar Suit 2" className="img-fluid" />
    </Col>
  </Row>

  <Row className='mb-4'>
    <Col className="d-flex justify-content-center">
      <Image src={data.sub_img2} alt="Salwar Suit 3" className="img-fluid" />
    </Col>

    <Col className="d-flex justify-content-center">
      <Image
        src={data.sub_img3}
        alt="Salwar Suit 4"
        className="img-fluid"
      />
    </Col>
  </Row>

  <Row className='mb-4'>
    <Col className="d-flex justify-content-center">
      <Image src={data.sub_img1} alt="Salwar Suit 5" className="img-fluid" />
    </Col>

    <Col className="d-flex justify-content-center">
      <Image src={data.sub_img2} alt="Salwar Suit 6" className="img-fluid" />
    </Col>
  </Row>
</Col>
<Col>





<h2>{data.brand}</h2>
          <h4 className="text-secondary">
            {data.prod_detail_page_subtitle
}
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

          <h4>{data.actual_pri}</h4>
          <h6 className="text-success">Inclusive of all taxes</h6>

          <h6>Select Size:</h6>
          <select className="mb-4 mt-3">
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
            <option value="xl">Extra Large</option>
          </select>

          <div className="d-flex  mb-4 container">
            <Col sm={12} lg={5}  className='d-flex justify-content-center align-items-center me-4 py-2'>
            
            <Link to="/checkout"><Button style={{backgroundColor:"#ff007f",padding:"20px 135px",border:"none"}} >Add to Bag</Button></Link>
            </Col>
            <Col sm={12} lg={5} onClick={()=>console.log('clicked') }className='bg-primary rounded  text-black bg-white border border-secondary d-flex justify-content-center align-items-center me-4'>
            
            <span className='fs-2'>WishList</span>
            </Col>
            
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

           </Col>
        </Container>


    
    </>

  )
}

export default ProductDetailPage
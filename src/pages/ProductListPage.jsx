import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SelectDropDown from '../components/SelectDropDown'
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../util/axiosConfig';
import ProductCard from '../components/ProductCard';
import Filtering from '../components/Filtering';
import StackingExample from '../components/StackingToast';

const ProductListPage = () => {
  const {id}=useParams();
  const [error,setError] = useState('');

  const[brandFilter, setBrandFilter] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  const [isChecked,setIsChecked] = useState(false);

  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axiosInstance.get(`http://localhost:8080/api/product-category/${id}/allProducts`);
        if (response) {         
          let products = response.data;
          setData(products);
          let m = [...new Set(products.map((d) => d.brand))]
          setBrandFilter(m);
          console.log(data,brandFilter);
        }
      }catch(e){
        setError(e.message);
      }
        
    };
    fetchData();
  }, []);
  const handleCheckBoxChange=(val,checked)=>{
    // console.log(checked);
    if(checked){
    let k = data.filter(d=>d.brand===val && checked);
    setFilteredData(k)
  }
  else
  {setFilteredData(data)}
    
    // setData(k);
    
  }


  return (

    <>
    <StackingExample/>
    <Container fluid>
    {error &&<div className='text-danger'>Some Error Occured. Please try again Later</div>}
    <section className='text-start px-5'>
    <div className='mt-3'>path to the page</div>
    <div className='category-name mt-3' > Category Name in bold - <span>Number of items</span></div>

      <Row className='mt-5 ' >
      <Col  className="d-none d-lg-block mb-4  " lg={2}>
      <div className='d-flex flex-row justify-content-between align-items-center '>
        <h5>FILTERS</h5>
        <span style={{color:"#ff3f6c",fontWeight:"700"}}> CLEAR ALL</span>
        </div>
        </Col>
        <Col sm={6} md={4} lg={10} className='product-list-section '></Col>
        <Col  className="d-none d-lg-block" lg={2}>
        


        <h6>BRAND</h6>
        { brandFilter?.map((d,index)=>(        <Filtering onChange={handleCheckBoxChange} key={index} data={d}/>
))}       
        </Col>

        <Col sm={6} md={4} lg={10} className='product-list-section'>

       

            <Row className='g-0'>


                <Col lg={9} className="d-none d-lg-block">
                Some more Options (Optional)
                </Col>


                <Col    lg={3} className="d-none d-lg-block">
                    <div className='filter-dropdown'> 
                        <SelectDropDown/>
                    </div>
            
                </Col>
            </Row>


            <Row className='g-1 mt-5  d-flex justify-content-around'>

              {(filteredData.length!=0?filteredData:data).map((d)=>(<Col key={d.id} sm={8} lg={3} className='mx-2' >   <Link to={`/productcategory/${id}/product/${d.id}`}><ProductCard data={d}/></Link></Col>))}        
                               
            </Row>
            

        
        
        
        
        
        
        </Col>
      </Row>
      

    
    
    
    
    
    
    
    
    </section>
    </Container>
    </>
  )
}

export default ProductListPage


// import React, { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import axiosInstance from '../util/axiosConfig';
// import ProductCard from '../components/ProductCard';
// import Filtering from '../components/Filtering';

// const ProductListPage = () => {
//   const { id } = useParams();
//   const [error, setError] = useState('');
//   const [brandFilter, setBrandFilter] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosInstance.get(`http://localhost:8080/api/product-category/${id}/allProducts`);
//         if (response) {
//           const products = response.data;
//           setData(products);
//           // setFilteredData(products);
//           setBrandFilter([...new Set(products.map((d) => d.brand))]); // Remove duplicates
//         }
//       } catch (e) {
//         setError(e.message);
//       }
//     };
//     fetchData();
//   }, [id]);

//   const handleCheckBoxChange = (val, checked) => {
//     let updatedData;
//     if (checked) {
//       updatedData = data.filter(d => d.brand === val);
//       setFilteredData(prev => [...prev, ...updatedData]);
//     } else {
//       updatedData = filteredData.filter(d => d.brand !== val);
//       setFilteredData(updatedData.length ? updatedData : data); // Fallback to full data if empty
//     }
//   };

//   return (
//     <Container fluid>
//       {error && <div className='text-danger'>Some Error Occurred. Please try again Later</div>}
//       <section className='container text-start'>
//         <div>path to the page</div>
//         <div className='category-name'>
//           Category Name in bold - <span>{filteredData.length} items</span>
//         </div>
//         <Container>
//           <Row>
//             <Col className="d-none d-lg-block border border-secondary" lg={2}>
//               <h3>Brand</h3>


//               {brandFilter.map((brand, index) => (
//                 <Filtering onChange={handleCheckBoxChange} key={`${brand}-${index}`} data={brand} />
//               ))}




//             </Col>
//             <Col sm={6} md={4} lg={10} className='product-list-section'>
//               <Container fluid>
//                 <Row className='g-0'>
//                   <Col lg={9} className="d-none d-lg-block">
//                     Some more Options (Optional)
//                   </Col>
//                   <Col lg={3} className="d-none d-lg-block">
//                     <SelectDropDown />
//                   </Col>
//                 </Row>
//                 <Row className='g-0 mt-5'>
//                   {(filteredData.length !== 0 ? filteredData : data).map((d) => (
//                     <Col key={d.id} sm={6} lg={4}>
//                       <Link to={`/productcategory/${id}/product/${d.id}`}>
//                         <ProductCard data={d} />
//                       </Link>
//                     </Col>
//                   ))}
//                 </Row>
//               </Container>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Container>
//   );
// };

// export default ProductListPage;

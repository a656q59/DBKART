import React, { useEffect, useState } from 'react'
import CarouselBanner from '../components/CarouselBanner'
import ProductCategoryList from '../components/ProductCategoryList'
import axiosInstance from '../util/axiosConfig'

const Home = () => {

  const [data, setData] = useState([]);
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



  return (
    <>
    <CarouselBanner />
    <ProductCategoryList data={data} />
    {/* <Sample/> */}
    </>
  )
}

export default Home
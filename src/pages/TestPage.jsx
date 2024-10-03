import React, { useEffect, useState } from 'react'
import axiosInstance from '../util/axiosConfig';

const TestPage = () => {
    const [data, setData] = useState([]);

    
    useEffect(() => {
        

        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(
                    "http://localhost:8080/api/all"
                );
                if (response) {
                    console.log(response.data);
                    setData(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
             } ,
    []);


  return (
    <div>TestPage</div>
  )
}

export default TestPage
// TabsComponent.jsx
import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddProduct from './AddProduct';
import axiosInstance from '../util/axiosConfig';
import AddProductCategory from './AddProductCategory';
import UpdateProductCategory from './UpdateProductCategory';
import DeleteProductCategory from './DeleteProductCategory';
import UpdateProduct from './UpdateProduct';
import { useAuth } from '../util/AuthContext';
import { Navigate } from 'react-router-dom';
import DeleteProduct from './DeleteProduct';


const ControlledTabsExample = () => {

  const [key, setKey] = useState('addCategory');


//  const { isAuthenticated } = useAuth();
//  return isAuthenticated ? (
 
return(
    <div className='px-5 mt-4'>
              <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 "
            >
            <Tab eventKey="addCategory" title="Add Category">
              <AddProductCategory/>
            </Tab>
            <Tab eventKey="updateCategory" title="Update Category">
            <UpdateProductCategory/>              </Tab>
            <Tab eventKey="deleteCategory" title="Delete Category"> 
              <DeleteProductCategory/>
            </Tab>
            <Tab eventKey="addProduct" title="Add Product">
              <AddProduct/>
            </Tab>
            <Tab eventKey="updateProduct" title="Update Product">
              <UpdateProduct/>
            </Tab>
            <Tab eventKey="deleteProduct" title="Delete Product" >
              <DeleteProduct/>
            </Tab>
            </Tabs>
  </div>
)

{/* ) : <Navigate to="/login" />; */}
        
    
};

export default ControlledTabsExample;

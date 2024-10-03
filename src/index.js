// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import ProductListPage from "./pages/ProductListPage";
// import NavBasic from "./components/NavBasic";
// import Footer from "./components/Footer";
// import ImageUploadForm from "./pages/FileUpload";
// import SampleFileUpload from "./pages/SampleFileUpload";
// import ProductDetailPage from "./pages/ProductDetailPage";
// import AdminPage from "./pages/AdminPage";
// import Login from "./pages/Login";
// import { AuthProvider } from "./util/AuthContext";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <AuthProvider>
//         <Route path="/" element={<App />} />
//         <Route path="/productcategory/:id" element={<ProductListPage />} />
//         <Route
//           path="/productcategory/:id/product/:product_id"
//           element={<ProductDetailPage />}
//         />

//         <Route path="/fileupload" element={<ImageUploadForm />} />
//         <Route path="/test" element={<SampleFileUpload />} />

//         <Route path="/admin" element={<AdminPage />} />
//         <Route path="/login" element={<Login />} />
//       </AuthProvider>
//     </>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <NavBasic />

//       <RouterProvider router={router} />
//       <Footer />
//     </AuthProvider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes, // Import Routes
} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import NavBasic from "./components/NavBasic";
import Footer from "./components/Footer";
import ImageUploadForm from "./pages/FileUpload";
import SampleFileUpload from "./pages/SampleFileUpload";
import ProductDetailPage from "./pages/ProductDetailPage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./util/AuthContext";
import CheckoutPage from "./pages/CheckoutPage";
import TestPage from "./pages/TestPage";

// Defining Routes properly inside `Routes` component
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/productcategory/:id" element={<ProductListPage />} />
      <Route
        path="/productcategory/:id/product/:product_id"
        element={<ProductDetailPage />}
      />
      <Route path="/fileupload" element={<ImageUploadForm />} />
      <Route path="/test" element={<SampleFileUpload />} />
      <Route path="/admin" element={<PrivateRoute element={<AdminPage />} />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/testpage" element={<TestPage />} />

      {/* element={<PrivateRoute />} */}
      <Route path="/login" element={<Login />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBasic />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Footer />
  </React.StrictMode>
);

import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadcrumbExample({ id, product_id }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {id && (
        <Breadcrumb.Item href={`/productcategory/${id}`}>{id}</Breadcrumb.Item>
      )}
      {product_id && (
        <Breadcrumb.Item
          href={`/productcategory/:${id}/product/:${product_id}`}
          active
        >
          {product_id}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default BreadcrumbExample;

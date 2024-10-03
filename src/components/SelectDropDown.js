import React from "react";
import { Form } from "react-bootstrap";

const SelectDropDown = () => {
  return (
    <Form.Select>
      <option disabled>Sort by: What's New</option>
      <option value="Desc">Price: High to Low</option>
      <option value="Asc">Price: Low to High</option>
      <option value="Rating">Customer Rating</option>
    </Form.Select>
  );
};

export default SelectDropDown;

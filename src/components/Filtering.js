import React from "react";
import { Form } from "react-bootstrap";

const Filtering = ({ data, onChange }) => {
  const handleChange = (e) => {
    console.log(e.target.checked, data);
    onChange(data, e.target.checked);
  };

  return (
    <>
      <Form.Check type="checkbox" id={`check-api-checkbox`}>
        <Form.Check.Input type="checkbox" isValid onChange={handleChange} />
        <Form.Check.Label>{data}</Form.Check.Label>
      </Form.Check>
    </>
  );
};

export default Filtering;

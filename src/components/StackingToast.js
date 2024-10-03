import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function StackingExample() {
  const [show, setShow] = useState(true);
  console.log("============================from stackingtoast===>");
  const handleClose = () => {
    setShow(false);
  };
  return (
    <ToastContainer className="position-static">
      <Toast onClose={handleClose} show={show} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default StackingExample;

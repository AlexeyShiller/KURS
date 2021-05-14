import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Modal,
  Form,
  FormControl,
} from "react-bootstrap";

export default function AboutCom() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      -
      <Container>
        <Form>
          <Form.Group>
            <Button
              variant="primary"
              className="mr-2"
              onClick={handleShow}
              style={{ width: "170px", height: "50px" }}
            >
              Login
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

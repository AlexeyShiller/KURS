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

import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export default function NaviBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("JWT"));

  const modalLogin = () => {
    setShowLogin(!showLogin);
  };

  const modalRegister = () => {
    setShowRegister(!showRegister);
  };

  const sendLogin = (e) => {
    e.preventDefault();

    const packet = {
      email: e.target.fromBasicEmail.value,
      password: e.target.fromBasicPassword.value,
    };

    axios.post("/auth/login", packet).then((res) => {
      localStorage.setItem("JWT", res.data.token);
      setUser(localStorage.getItem("JWT"));
      console.log(user);
      setShowLogin(false);
    });
  };

  const sendPassword = (e) => {
    e.preventDefault();

    if (
      e.target.fromBasicPassword.value !== e.target.fromRepeatPassword.value
    ) {
      console.log("Incorrect repeat password");
      return;
    }

    const packet = {
      email: e.target.fromBasicEmail.value,
      password: e.target.fromBasicPassword.value,
    };

    sender(packet, `/auth/register`);
  };

  const sender = (user, url) => {
    axios.post(url, user).then((res) => {
      alert(res.data.message);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  const Info = () => {
    if (user) {
      return (
        <Button
          variant="primary"
          className="mr-2"
          onClick={logout}
          style={{ width: "170px", height: "50px" }}
        >
          Logout
        </Button>
      );
    }
    return (
      <Nav>
        <Button
          variant="primary"
          className="mr-2"
          onClick={modalLogin}
          style={{ width: "170px", height: "50px" }}
        >
          Login
        </Button>
        <Button
          variant="primary"
          className="mr-2"
          onClick={modalRegister}
          style={{ width: "170px", height: "50px" }}
        >
          Register
        </Button>
      </Nav>
    );
  };

  return (
    <header>
      <Styles>
        <Navbar collapceOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Abort</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/companies">Companies</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/comments">Comments</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Form inline>
                  <FormControl
                    className="mr-sm-2"
                    type="text"
                    placeholder="Search..."
                  />
                  <Button variant="outline-info mr-2">Search</Button>
                </Form>
              </Nav>
              <Info />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>

      <Modal show={showLogin} onHide={modalLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendLogin}>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
              <Form.Text className="text-muted">
                We'll newer share your Email
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" />
            </Form.Group>

            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button className="Login" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={showRegister} onHide={modalRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendPassword}>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
              <Form.Text className="text-muted">
                We'll newer share your Email
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" />
            </Form.Group>
            <Form.Group controlId="fromRepeatPassword">
              <Form.Control
                type="password"
                placeholder="Repeat your Password"
              />
            </Form.Group>

            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button className="Login" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </header>
  );
}

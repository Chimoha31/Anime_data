import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";

const Signup = () => {
  return (
    <div className="signup_container">
      <Container style={{width: "400px"}}>
        <div className="p-4 box">
          <h2 className="text-center pb-3">Sign Up</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>

          <div className="p-4 mt-3 text-center box">
            Already have an account ? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;

import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";

const Login = () => {
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton className="google_btn" />
        </div>
      </div>

      <div className="p-4 mt-3 text-center box">
        Don't have account yet? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;

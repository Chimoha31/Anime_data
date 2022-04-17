import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Container, Form } from "react-bootstrap";
import {useUserAuth} from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {signUp} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
      await signUp(email, password);
      navigate("/login");
    }catch(e){
      setError(e.message);
    }
  }

  return (
    <div className="signup_container">
      <Container style={{ width: "400px" }}>
        <div className="p-4 box">
          <h2 className="text-center pb-3">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
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

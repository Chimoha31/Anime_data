import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Container, Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, signInGoogle } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/animelist");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInGoogle();
      navigate("/animelist");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="login_container">
      <Container style={{ width: "400px" }}>
        <div className="p-4 box">
          <h2 className="pb-3 text-center">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
          <div>
            <GoogleButton className="google_btn" onClick={handleGoogleSignIn} />
          </div>
        </div>

        <div className="p-4 box mt-3 text-center">
          Don't have account yet? <Link to="/signup">Sign Up</Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;

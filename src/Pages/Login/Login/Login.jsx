import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import usetitle from "../../../hooks/usetitle";
import NavigationBar from "../../../Share Pages/NavigationBar/NavigationBar";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  usetitle("Login");

  const location = useLocation();
  // console.log("login location", location);

  const from = location.state?.from?.pathname || "/category/0";

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        // console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-center">Please Login...</h1>
      <Container className="w-25 mx-auto">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <Form.Text>
            Already have an account? <Link to="/register">Register</Link>
          </Form.Text>
        </Form>
      </Container>
      <Outlet></Outlet>
    </div>
  );
};

export default Login;

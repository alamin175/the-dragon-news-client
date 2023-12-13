import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/category/0");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <h1 className="text-center"> Please Register ...</h1>
      <Container className="w-25 mx-auto">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control required name="name" type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control name="photo" type="text" placeholder="Photo Url" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            id="password"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              label={
                <>
                  Accept <Link to="/terms">Terms & Condition</Link>
                </>
              }
            />
          </Form.Group>
          <Button disabled={!accepted} variant="primary" type="submit">
            Submit
          </Button>
          <br />
          <Form.Text>
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;

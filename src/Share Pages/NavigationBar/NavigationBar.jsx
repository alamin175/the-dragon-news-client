import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/Provider/AuthProvider";

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary m-2">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link
                className="text-muted text-decoration-none my-auto"
                to="/category/0"
              >
                Home
              </Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {user ? (
          <>
            <FaUserCircle
              style={{
                fontSize: "2rem",
                marginRight: 4,
              }}
            ></FaUserCircle>
            <Button onClick={handleLogout} className="btn-secondary">
              Logout
            </Button>
          </>
        ) : (
          <Link to="/login">
            <Button className="btn-secondary">Login</Button>
          </Link>
        )}
      </Navbar>
    </div>
  );
};

export default NavigationBar;

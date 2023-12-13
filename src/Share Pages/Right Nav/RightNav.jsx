import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaSnapchat,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "../QZone/Qzone";
import bg from "../../assets/bg.png";
import { AuthContext } from "../../Pages/Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightNav = () => {
  const provider = new GoogleAuthProvider();
  const { signInGoogle } = useContext(AuthContext);
  const handleLogin = () => {
    signInGoogle(provider)
      .then((result) => {
        const credential = GoogleAuthProvider.result;
        const currentUser = result.user;
        // console.log(currentUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="mb-4">
        <h3> Login With</h3>
        <Button
          onClick={handleLogin}
          className="mt-2 mb-2"
          variant="outline-primary"
        >
          <FaGoogle />
          Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub />
          Login with Github
        </Button>
      </div>
      <div className="mb-4">
        <h3>Find Us On</h3>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="mx-1" />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="mx-1" />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="mx-1" />
            instagram
          </ListGroup.Item>
          <ListGroup.Item>
            <FaSnapchat className="mx-1" />
            Snapchat
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mb-4">
        <Qzone></Qzone>
      </div>
      <img src={bg} alt="" />
    </div>
  );
};

export default RightNav;

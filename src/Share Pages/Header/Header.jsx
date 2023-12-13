import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button } from "react-bootstrap";
import NavigationBar from "../NavigationBar/NavigationBar";
const Header = () => {
  return (
    <div className="mt-3">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")} </p>
      </div>
      <div className="d-flex">
        <Button className="btn-danger">Latest</Button>
        <Marquee speed={75} className="text-danger">
          I can be a React component, multiple React components, or just some
          text... I can be a React component, multiple React components, or just
          some text...I can be a React component, multiple React components, or
          just some text...
        </Marquee>
      </div>
      <NavigationBar></NavigationBar>
    </div>
  );
};

export default Header;

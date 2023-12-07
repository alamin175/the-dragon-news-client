import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Share Pages/Footer/Footer";
import Header from "../Share Pages/Header/Header";
import LeftNav from "../Share Pages/Left Nav/LeftNav";
import RightNav from "../Share Pages/Right Nav/RightNav";

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <div className="">
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
        <Footer></Footer>
      </div>
    </Container>
  );
};

export default Main;

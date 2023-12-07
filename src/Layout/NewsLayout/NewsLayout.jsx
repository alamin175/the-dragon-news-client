import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../../Share Pages/Footer/Footer";
import Header from "../../Share Pages/Header/Header";
import RightNav from "../../Share Pages/Right Nav/RightNav";

const NewsLayout = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <div className="">
          <Row>
            <Col lg={9}>
              <Outlet></Outlet>
            </Col>
            <Col lg={3}>
              <RightNav></RightNav>
            </Col>
          </Row>
          <Footer></Footer>
        </div>
      </Container>
    </div>
  );
};

export default NewsLayout;

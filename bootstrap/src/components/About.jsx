import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import aboutImage from "../images/img1.jpg";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./about.css";

export default function About() {
  return (
    <Container fluid id="about">
      <Row className="about-us">
        <h3 className="title">About Us</h3>
        <p className="subtitle">-learn more about us-</p>
      </Row>
      <Row>
        <Col sm={6}>
          <Image fluid src={aboutImage} alt="About Us image" thumbnail />
        </Col>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit dicta veritatis sint quidem asperiores magni eaque
            praesentium temporibus, magnam, eveniet consequatur possimus nihil?
            Nemo deserunt repudiandae soluta neque doloribus, quo!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit dicta veritatis sint quidem asperiores magni eaque
            praesentium temporibus, magnam, eveniet consequatur possimus nihil?
            Nemo deserunt repudiandae soluta neque doloribus, quo!
          </p>
          <h5>HTML / CSS / Javascript</h5>
          <ProgressBar variant="danger" now={80} label={`80%`} />
          <h5>Responsive</h5>
          <ProgressBar variant="danger" now={95} label={`95%`} />
          <h5>Photoshop</h5>
          <ProgressBar variant="danger" now={60} label={`60%`} />
        </Col>
      </Row>
    </Container>
  );
}

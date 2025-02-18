import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./works.css";
import img1 from "../images/img2.jpg";
import img2 from "../images/img3.jpg";
import img3 from "../images/img4.jpg";
import img4 from "../images/img5.jpg";
import img5 from "../images/img6.jpg";
import img6 from "../images/img7.jpg";
import img7 from "../images/img8.jpg";
import img8 from "../images/img9.jpg";
import img9 from "../images/img2.jpg";

export default function Works() {
  let works = [
    {
      id: 1,
      image: img1,
      title: "Lonely Path",
      content: "Web design",
    },
    {
      id: 2,
      image: img2,
      title: "Photograoher Gril",
      content: "Branding",
    },
    {
      id: 3,
      image: img3,
      title: "The Difference",
      content: "Web design",
    },
    {
      id: 4,
      image: img4,
      title: "Nature Patterns",
      content: "Branding",
    },
    {
      id: 5,
      image: img5,
      title: "The Difference",
      content: "Photography",
    },
    {
      id: 6,
      image: img6,
      title: "Winter Sonata",
      content: "Web design",
    },
    {
      id: 7,
      image: img7,
      title: "Lonely Path",
      content: "Branding",
    },
    {
      id: 8,
      image: img8,
      title: "Appreciation",
      content: "Photography",
    },
    {
      id: 9,
      image: img9,
      title: "Happy Days",
      content: "Web design",
    },
  ];
  return (
    <Container fluid>
      <Row>
        {works.map((work) => {
          return (
            <Col key={work.id} sm={4} className="container ">
              <Image src={work.image} alt="work image" thumbnail />
              <div className="info">
                <h5 className="title">{work.title}</h5>
                <p>{work.content}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

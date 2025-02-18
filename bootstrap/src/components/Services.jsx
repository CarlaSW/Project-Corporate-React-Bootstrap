import { FaPlug } from "react-icons/fa";
import { TbSquaresFilled } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { TbWheel } from "react-icons/tb";
import { FaRegSnowflake } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./services.css";
export default function Services() {
  let services = [
    {
      id: 1,
      title: "Responsive Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
      icon: <TbSquaresFilled className="icon" />,
    },
    {
      id: 2,
      title: "Creative Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
      icon: <FaRegSnowflake className="icon" />,
    },
    {
      id: 3,
      title: "SEO Optimized",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
      icon: <FaPlug className="icon " />,
    },
    {
      id: 4,
      title: "Retina Ready",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
      icon: <RiComputerLine className="icon" />,
    },
    {
      id: 5,
      title: "Brower Compatibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
      icon: <GiTrophyCup className="icon" />,
    },
    {
      id: 6,
      title: "Customer Supportn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.",
      icon: <TbWheel className="icon" />,
    },
  ];
  return (
    <div className="services">
      <div className="title">
        <h3 className="main-title">Our services </h3>
        <p className="subtitle">-services we provide-</p>
      </div>
      <Container fluid>
        <Row>
          {services.map((service) => {
            return (
              <Col key={service.id} sm={4}>
                <Card className="card" style={{ width: "18rem" }}>
                  <Card.Body>
                    {service.icon}

                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

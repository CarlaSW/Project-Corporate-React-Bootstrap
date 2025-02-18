import Carousel from "react-bootstrap/Carousel";
import "./hero.css";
import Button from "react-bootstrap/Button";
import hero1 from "../images/img-hero1.jpg";
import hero2 from "../images/img-hero2.jpg";
import hero3 from "../images/img-hero3.jpg";

export default function Hero() {
  let heroData = [
    {
      id: 1,
      image: hero1,
      title: "The perfect design for your website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    },
    {
      id: 2,
      image: hero2,
      title: "Start Your Future Financial Plan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    },
    {
      id: 3,
      image: hero3,
      title: "Enjoy the Difference",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    },
  ];
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img src={hero.image} />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description} </p>
                <Button>Learn more </Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

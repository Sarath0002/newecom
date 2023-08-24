import { useState } from "react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import amozonb from "../../projectimg/amazon.jpg";
import amazonc from "../../projectimg/banamzon.jpg";
import b from "../../projectimg/mobilebanner.jpg";
import { useNavigate } from "react-router-dom";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const navigate = useNavigate();

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{
        marginTop: "92px",
      }}
    >
      <Carousel.Item>
        {/* img */}
        <img
          src={amozonb}
          style={{
            height: "60%",
            width: "100%",
          }}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* img */}
        <img
          src={amazonc}
          style={{
            height: "60%",
            width: "100%",
          }}
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* i,mg */}{" "}
        <img
          src={b}
          style={{
            height: "60%",
            width: "100%",
          }}
          onClick={() => navigate("/mobiles")}
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import images from "../../../assets/banner.jpg";
import Container from "../../../Components/Container";
import Heading from "../../../Components/Heading";

const Gallery = () => {
  // TODO Change image
  return (
    <Container>
      <Heading
        title={"Discover Collages"}
        description={
          "Bangladesh boasts a diverse and vibrant education sector, with numerous colleges offering exceptional learning opportunities for students. Let's embark on a journey to explore some of the country's most prominent and exciting colleges"
        }
      ></Heading>
      <Marquee>
        <img
          className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
          src={images}
          alt=""
        />
        <img
          className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
          src={images}
          alt=""
        />
        <img
          className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
          src={images}
          alt=""
        />
      </Marquee>
      <div className="mt-10">
        <Marquee direction="right">
          <img
            className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
            src={images}
            alt=""
          />
          <img
            className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
            src={images}
            alt=""
          />
          <img
            className="h-96 w-96 mr-10 rounded-lg p-5 hover:scale-110 delay-75 transition-transform"
            src={images}
            alt=""
          />
        </Marquee>
      </div>
    </Container>
  );
};

export default Gallery;

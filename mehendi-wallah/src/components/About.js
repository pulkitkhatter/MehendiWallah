import React from "react";
import aboutPic from "../images/aboutUsPic.png";

const About = () => {
  return (
    <div className="flex relative justify-center md:space-x-10 items-center px-4">
      <div className="flex absolute md:static flex-col items-center ">
        <span className="text-3xl md:text-6xl font-stylish my-4 md:my-1">
          About Us
        </span>
        <span className="w-[300px] text-center rounded-md bg-opacity-50 text-gray-100 md:bg-white p-3 bg-gray-500 md:w-[600px] md:text-2xl md:text-gray-700">
          We, Mehndi Wallah,provide beautiful mehendi designs as a traditional
          alternative to tattoos. We are proud to be able to evolve from the
          traditional patterns of mehendi into more and more intricate and
          decorative designs in time.
        </span>
      </div>
      <div className="flex">
        <img
          src={aboutPic}
          alt="about us pic"
          className="w-[350px] md:w-[660px] bg-opacity-50"
        />
      </div>
    </div>
  );
};

export default About;

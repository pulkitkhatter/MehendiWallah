import React from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic6 from "../images/pic6.png";
import pic8 from "../images/pic8.png";
import pic9 from "../images/pic9.png";

const Services = () => {
  return (
    <>
      <section className="my-4 px-4">
        <h1 className="text-3xl font-stylish text-center md:text-6xl">
          Services
        </h1>
        <div className="flex overflow-x-scroll md:overflow-x-hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2 gap-y-3">
          {/* <div className="grid grid-cols-1 place-items-center"> */}
          {/* pic 1 div */}
          <div className="flex flex-col items-center my-3">
            <img src={pic1} alt="site pics" className="" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-stylish">Hair Services</span>
              <span className="text-center w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi commodi ex. Numquam, ea doloremque?
              </span>
            </div>
          </div>
          {/* pic 2 div */}
          <div className="flex flex-col items-center my-3">
            <img src={pic2} alt="site pics" className="" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-stylish">Makeup</span>
              <span className="text-center w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi commodi ex. Numquam, ea doloremque?
              </span>
            </div>
          </div>
          {/* pic 3 div */}
          <div className="flex flex-col items-center my-3">
            <img src={pic3} alt="site pics" className="" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-stylish">Skin Services</span>
              <span className="text-center w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi commodi ex. Numquam, ea doloremque?
              </span>
            </div>
          </div>
          {/* pic 4 div */}
          <div className="flex flex-col items-center my-3">
            <img src={pic4} alt="site pics" className="" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-stylish">Hands & feet</span>
              <span className="text-center w-[353px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi commodi ex. Numquam, ea doloremque?
              </span>
            </div>
          </div>
          {/* pic 5 div */}
          <div className="flex flex-col items-center my-3">
            <img src={pic6} alt="site pics" className="" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-stylish">Bridal Services</span>
              <span className="text-center w-[353px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi commodi ex. Numquam, ea doloremque?
              </span>
            </div>
          </div>
          {/* pic 6 div */}
          <div className="flex flex-col items-center my-3">
            <img src={pic8} alt="site pics" className="" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-stylish">Nail Treatment</span>
              <span className="text-center w-[353px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi commodi ex. Numquam, ea doloremque?
              </span>
            </div>
          </div>
          {/* pic 7 div */}
          <div className="flex flex-col items-center my-3">
            <img src={pic9} alt="site pics" className="" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-stylish">
                Professional Training
              </span>
              <span className="text-center w-[353px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi commodi ex. Numquam, ea doloremque?
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

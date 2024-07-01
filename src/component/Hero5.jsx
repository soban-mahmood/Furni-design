import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(
  {
    once: false,
    mirror: false
  }
);
const Hero5 = () => {
  return (
    <div>
      <div data-aos="zoom-in"  data-aos-easing="ease-in-out"
          data-aos-duration="1000" className="w-full flex justify-evenly mt-20 sm:flex sm:flex-col md:flex md:flex-col">
        <div className="flex justify-center mb-10">
          <img
            src="https://untree.co/demos/furni/images/product-1.png"
            alt=""
            className="rounded-3xl h-[150px] w-[150px] cursor-pointer"
          />

          <div className="">
            <h1 className="text-[18px] font-semibold">Nordic Chair</h1>
            <p className="text-[grey]">
              Donec facilisis quam ut purus <br /> rutrum lobortis. Donec vitae
              odio
            </p>
            <a href="#" className="text-[black]">
              Read More
            </a>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <img
            src="https://untree.co/demos/furni/images/product-2.png"
            alt=""
            className="rounded-3xl h-[150px] w-[150px] cursor-pointer"
          />

          <div className="">
            <h1 className="text-[18px] font-semibold">Nordic Chair</h1>
            <p className="text-[grey]">
              Donec facilisis quam ut purus <br /> rutrum lobortis. Donec vitae
              odio
            </p>
            <a href="#" className="text-[black]">
              Read More
            </a>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <img
            src="https://untree.co/demos/furni/images/product-3.png"
            alt=""
            className="rounded-3xl h-[150px] w-[150px] cursor-pointer"
          />

          <div className="">
            <h1 className="text-[18px] font-semibold">Nordic Chair</h1>
            <p className="text-[grey]">
              Donec facilisis quam ut purus <br />
              rutrum lobortis. Donec vitae odio
            </p>
            <a className="text-[black]" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;

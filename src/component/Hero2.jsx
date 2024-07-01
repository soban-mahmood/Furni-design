import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(
  {
    once: false,
    mirror: false
  }
);
const Hero2 = () => {
 
  return (
    <div>
      <div className="bg-[#F0F2F1] xl:w-full xl:flex xl:flex-row  sm:flex sm:flex-col ">
        <div className="p-[70px]">
          <p 
      className="text-black text-[25px] font-bold ">
            Crafted with excellent material.
          </p>

          <p className="text-gray-600 text-[15px] w-1/2 sm:w-full ">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button className="bg-[black] mt-4 text-white py-2 xl:px-4 rounded-full sm:px-10 md:px-10 lg:px-10">
            Explore
          </button>
        </div>

        <div className="flex p-10 sm:flex sm:flex-col">
          <div className=""
          data-aos="zoom-in-up"
             data-aos-easing="ease-in-out"
          data-aos-duration="2000">
            <img
              src="https://untree.co/demos/furni/images/product-1.png"
              alt=""
              className=""
            />
            <div className="ml-20">
              <p className="font-bold">Nordic Chair</p> <span>$50.00</span>
            </div>
          </div>
          <div className=""
           data-aos="zoom-in-up"
           data-aos-easing="ease-in-out"
          data-aos-duration="3000">

            <img
              src="https://untree.co/demos/furni/images/product-2.png "
              alt=""
            />
            <div className="ml-20">
              <p className="font-bold">Nordic Chair</p> <span>$50.00</span>
            </div>
          </div>
          <div className=""
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
           data-aos-duration="3000">
            <img
              src="https://untree.co/demos/furni/images/product-3.png"
              alt=""
            />
            <div className="ml-20">
              <p className="font-bold">Nordic Chair</p> <span>$50.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

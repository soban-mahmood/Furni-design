import React from "react";

const logo7 = "https://untree.co/demos/furni/images/img-grid-1.jpg";
const logo8 = "https://untree.co/demos/furni/images/img-grid-3.jpg";
const logo9 = "https://untree.co/demos/furni/images/img-grid-2.jpg";
const logoX = "../assets/dots-green.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(
  {
    once: false,
    mirror: false
  }
);
const Hero4 = () => {
  return (
    <>
      <div className="xl:flex  xl:justify-between  xl:px-5 w-full xl:gap-[10-px]">
        {/* sm */}
        {/* <div className=" hidden sm:block  w-[80%] px-3  ">
          <div className="relative">
            <img
              src={logo7}
              className="h-[300px] w-[250px] rounded-3xl relative box-border"
              alt=""
            />
            <img
              src={logo8}
              className="h-[200px] w-[200px] rounded-3xl absolute top-[150px] left-[150px]"
              alt=""
            />
            <img src={logo9} className="h-[100px] w-[100px] rounded-3xl absolute top-[5px] left-[250px] p-1" alt="" />
          </div>
        </div> */}

        <div className="hidden sm:block w-[80%] px-1">
          <div className="relative">
            <img
              src={logo7}
              className="h-[300px] w-[250px] rounded-3xl relative box-border sm:h-[250px] sm:w-[250px] p-4"
              alt=""
            />
            <img
              src={logo8}
              className="h-[200px] w-[200px] rounded-3xl absolute sm:h-[150px] sm:w-[150px] sm:top-[130px] sm:left-[150px] p-3"
              alt=""
            />
            <img
              src={logo9}
              className="h-[100px] w-[100px] rounded-3xl absolute top-[5px] left-[250px] p-4 sm:h-[120px] sm:w-[120px] sm:top-[5px] sm:left-[225px]"
              alt=""
            />
          </div>
        </div>

        {/* md */}
        <div className=" hidden md:block ml-[10vw]  w-[auto] px-3 ">
          <div className="relative">
            <img
              src={logo7}
              className="h-[400px] w-[350px] rounded-3xl relative box-border"
              alt=""
            />
            <img
              src={logo8}
              className="h-[300px] w-[300px] rounded-3xl absolute top-[210px] left-[250px]"
              alt=""
            />
            <img
              src={logo9}
              className="h-[200px] w-[200px] rounded-3xl absolute top-[5px] left-[400px] p-1"
              alt=""
            />
          </div>
        </div>
        {/* lg */}
        <div className=" hidden lg:block mb-10 ml-[10vw] px-3  w-[100%]  ">
          <div className="relative  ">
            <img
              src={logo7}
              className="h-[400px] w-[400px] rounded-3xl relative box-border"
              alt=""
            />
            <img
              src={logo8}
              className="h-[250px] w-[250px] rounded-3xl absolute top-[210px] left-[250px]"
              alt=""
            />
            <img
              src={logo9}
              className="h-[200px] w-[200px] rounded-3xl absolute top-[5px] left-[400px] p-3"
              alt=""
            />
          </div>
        </div>
        {/* xl */}
        <div className=" hidden xl:block  w-[100%] pl-2 ">
          <div className="relative flex w-auto">
            <img
              src={logo7}
              className="h-[400px] w-[400px] rounded-3xl relative box-border"
              alt=""
            />
            <img
              src={logo8}
              className="h-[250px] w-[250px] rounded-3xl absolute top-[210px] left-[250px]"
              alt=""
            />
            <img
              src={logo9}
              className="h-[200px] w-[200px] rounded-3xl absolute top-[5px] left-[400px] p-3"
              alt=""
            />
          </div>
        </div>
        {/* 2nd part */}
        <div className="sm:mt-10 lg:mt-15 md:mt-20 xl:w-[70%] ">
          <div className="p-10">
            <h3 className="font-semibold text-[30px] ">
              We Help You Make Modern Interior Design
            </h3>
            <p className=" text-[18px] text-[grey]">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. AliquamZ
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>
            <span className="flex m-10 text-[grey] gap-10">
              <ul className="list-disc">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <ul className="list-disc">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
            </span>
            <button className="bg-[black] mt-4 text-white py-2 px-4 rounded-full">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero4;

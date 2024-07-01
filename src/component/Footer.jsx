import React from "react";
import logo from "../assets/sofa.png";
import { CiMail } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(
  {
    once: false,
    mirror: false
  }
);
const Footer = () => {
  return (
    <footer className="bg-white  pt-12 md:pt-20  ">
      <div className=" mx-auto p-4 md:p-6 lg:p-12">
        <div className="flex flex-col md:flex-col  xl:flex xl:flex-row lg:flex-col justify-between items-center">
          <div className="w-full xl:w-1/2 lg:w-[full] p-4  lg:p-12">
            <h3 className="flex items-center text-lg gap-2">
              <CiMail className="text-3xl" />
              Subscribe to Newsletter
            </h3>
            <div className="flex flex-col xl:flex xl:flex-row  lg:flex-row gap-3 py-4 px-5">
              <input
                type="text"
                placeholder="Enter your name"
                className="border py-3 px-5 rounded-lg w-full  lg:w-1/2 "
              />
              <input
                type="text"
                placeholder="Enter your Email"
                className="border py-3 px-5 rounded-lg w-full lg:w-1/2 "
              />
              <div className="flex justify-center lg:justify-end">
                <IoIosSend className="bg-[#35716D] text-white text-3xl rounded-lg w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-10" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up"
             data-aos-easing="ease-in-out"
          data-aos-duration="3000" className="w-full xl:w-1/2 lg:w-1/2 p-4 md:p-6 ">
            <img src={logo} alt="" className="w-full xl:w-1/2" />
          </div>
        </div>
        <div className="bg-white py-20 flex flex-wrap justify-center  xl:justify-between md:justify-between">
          <div className="w-full  xl:w-1/3 mb-10 md:mb-0">
            <div className="footer-logo text-2xl font-bold mb-4">
              Furni
              <span className="text-black text-lg">.</span>
            </div>
            <p className="text-gray-600  text-[20px] mb-10">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <div className="icon flex justify-center mb-10">
              <FaFacebookF className="text-gray-600 text-2xl mx-4 hover:bg-sky-700" />
              <FaTwitter className="text-gray-600 text-2xl mx-4" />
              <IoLogoInstagram className="text-gray-600 text-2xl mx-4" />
              <IoLogoLinkedin className="text-gray-600 text-2xl mx-4" />
            </div>
          </div>
          <div className="w-full  xl:w-1/3  xl:mt-10 md:mb-0">
            <div className="menu-bar flex justify-center mb-10">
              <ul className="flex justify-between sm:flex sm:flex-wrap sm:gap-3  md:flex md:flex-wrap  text-[20px] ">
                <div className="flex flex-col">
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      About
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Services
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Blog
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Jobs
                    </a>
                  </li>
                </div>
                <div className=" flex flex-col">
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Our team
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Leadership
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Support
                    </a>
                  </li>
                </div>

                <div className="flex flex-col">
                  {" "}
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Knowledge base
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Live chat
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Nordic Chair
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Kruzo Aero
                    </a>
                  </li>
                  <li className="mr-6">
                    <a href="" className="text-gray-600 hover:text-gray-900">
                      Ergonomic Chair
                    </a>
                  </li>{" "}
                </div>
              </ul>
            </div>
          </div>
          <div className="w-full border-t border-[gray] xl:flex xl:justify-between lg:flex lg:justify-between lg:flex-row lg:items-center sm:flex sm:flex-col md:flex md:flex-col text-[gray]">
            <span className="mt-10">
              Copyright ©2024. All Rights Reserved. — Designed with love by
              Untree.co
            </span>
            <span className="xl:mt-10 lg:mt-10">
              Terms & Conditions Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

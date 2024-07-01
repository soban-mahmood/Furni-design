import React from "react";
import { MdMenu } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { GiInvisible } from "react-icons/gi";
import Cart from "./Cart";

const Header = () => {
  const handleCross = () => {
    const navLog = document.getElementById("navLog");
    navLog.classList.toggle("hidden");
  };

  return (
    <nav className="p-2 xl:flex xl:justify-evenly xl:items-center xl-w-full  lg:flex lg:justify-between  md:flex md:justify-between  bg-[#3B5D4F] text-white  sm:flex sm:justify-between sm:w-full ">
      <div id="navbrand" className="">
        <a href="/" className="text-[3vh] font-bold">
          Furni.
        </a>
      </div>
      <div className=" md:hidden sm:hidden lg:hidden   ">
        <a
          href="/"
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          Home
        </a>
        <a
          href="/shop"
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          Shop
        </a>
        <a
          href="/about"
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          About us
        </a>
        <a
          href="/services"
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          Services
        </a>
        <a
          href="/blog"
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          Blog
        </a>
        <a
          href="/contact"
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          Contact us
        </a>
      </div>
      <div className="gap-2 md:hidden sm:hidden lg:hidden   md:hidden-2">
        <div className="flex">
          <CgProfile className="text-[3vh] font-bold" />
          <a href="Cart">
           
            <CiShoppingCart className="text-[3vh] font-bold " />
          </a>
        </div>
      </div>
      <div
        className=" xl:hidden lg:block p-2 bg-[#3B5D4F] text-white"
        onClick={handleCross}
      >
        <MdMenu className="text-[3vh] " />
      </div>

      <div
        id="navLog"
        className=" fixed bg-[#3b5d4f] inset-0  p-2   hidden"
        onClick={handleCross}
      >
        <div className="flex justify-between">
          <a href="#" className="text-[3vh] font-bold">
            Furni.
          </a>
          <RxCross2 className="text-[3vh] mt-2 md:block lg:block" />
        </div>

        <div className="flex flex-col">
          <a
            href=""
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
          >
            Home
          </a>
          <a
            href="/shop"
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
          >
            Shop
          </a>
          <a
            href="/about"
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
          >
            About us
          </a>
          <a
            href="/services"
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
          >
            Services
          </a>
          <a
            href="/blog"
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

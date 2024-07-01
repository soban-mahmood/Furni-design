import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Slick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  return (
    <div>
      <div className=" xl:hidden lg:hidden md:hidden w-[full]">
        <div className=" justify-between  flex p-2">
          <h2 className="text-[20px] ">Testimonials</h2>
          <div className="">
            <button
              className="button border px-3 mr-2 border-[#222]"
              onClick={previous}
            >
              &#x2190;
            </button>

            <button className="button border px-3 border-[#222]" onClick={next}>
              &#x2192;
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:items-center lg:items-center md:items-center sm:items-center mt-10">
        <Slider
          {...settings}
          ref={(slider) => (sliderRef = slider)}
          className="xl:w-[80%] lg:w-[80%]  md:w-[93%] sm:w-[80%]  sm:px-6 "
        >
          <div>
            <div className="w-full flex justify-center flex-col items-center ">
              <h2 className="text-[20px] sm:hidden">Testimonials</h2>
              <h3 className="text-[grey]">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer convallis volutpat dui quis
                scelerisque.” Maria Jones Maria Jones CEO, Co-Founder, XYZ Inc.
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada.
              </h3>
              <img
                src="https://untree.co/demos/furni/images/person-1.png"
                className="rounded-full"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center flex-col items-center ">
              <h2 className="text-[20px] sm:hidden">Testimonials</h2>
              <h3 className="text-[grey]">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer convallis volutpat dui quis
                scelerisque.” Maria Jones Maria Jones CEO, Co-Founder, XYZ Inc.
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada.
              </h3>
              <img
                src="https://untree.co/demos/furni/images/person-1.png"
                className="rounded-full"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="w-full flex justify-center flex-col items-center ">
              <h2 className="text-[20px] sm:hidden">Testimonials</h2>
              <h3 className="text-[grey]">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer convallis volutpat dui quis
                scelerisque.” Maria Jones Maria Jones CEO, Co-Founder, XYZ Inc.
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada.
              </h3>
              <img
                src="https://untree.co/demos/furni/images/person-1.png"
                className="rounded-full"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Slick;

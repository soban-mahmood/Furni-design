import React from "react";
const logo2 = "https://untree.co/demos/furni/images/why-choose-us-img.jpg";
const logo3 = "https://untree.co/demos/furni/images/truck.svg";
const logo4 = "https://untree.co/demos/furni/images/bag.svg";
const logo5 = "https://untree.co/demos/furni/images/support.svg";
const logo6 = "https://untree.co/demos/furni/images/return.svg";
const Hero3 = () => {
  return (
    <div>
      <div>
        <div class="w-full bg-[#F0F2F1] xl:flex xl:justify-center md:flex md:flex-col sm:flex sm:flex-col mt-10 p-10">
          <div class="flex flex-col flex-wrap">
            <div class="">
              <h2 class="font-semibold xl:text-[2vw] sm:text-[20px]">
                Why Choose Us
              </h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>

            <div class="xl:flex   sm:flex sm:flex-col">
              <div class="xl:w-1/2 sm:w-full xl:mr-4">
                <img src={logo3} />
                <h3 class="font-semibold text-[15px]">Fast & Free Shipping</h3>
                <p class="text-gray-600 xl:w-1/2">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div class="xl:w-1/2 sm:w-full xl:ml-4">
                <img src={logo4} alt="" />
                <h3 class="font-semibold text-[15px] w-1/2">Easy to Shop</h3>
                <p class="text-gray-600 xl:w-1/2">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>

            <div class="xl:flex sm:flex sm:flex-col mt-10">
              <div class="xl:w-1/2 sm:w-full xl:mr-4">
                <img src={logo5} alt="" />
                <h3 class="font-semibold text-[15px]">24/7 Support</h3>
                <p class="text-gray-600 xl:w-1/2">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div class="xl:w-1/2 sm:w-full xl:ml-4">
                <img src={logo6} alt="" />
                <h4 class="font-semibold text-[15px]">Hassle Free Returns</h4>
                <p class="text-gray-600 xl:w-1/2">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>

          <div class="xl:w-1/2 sm:w-full xl:ml-4 sm:mt-10 md:mt-10">
            <img
              src={logo2}
              alt=""
              class="h-[500px] w-[461] md:w-[100%] lg:w-[100%] sm:[100%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;

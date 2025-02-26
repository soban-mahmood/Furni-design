import React from 'react';
const logo = "https://untree.co/demos/furni/images/couch.png";
const Contact = () => {
  return (
    <>
    {/* hero section 1 */}
     <div className="border-t border-gray-500">
        <div
          className="  bg-[#3b5d4f] xl:flex xl:justify-evenly xl:px-10  xl:items-center lg:flex lg:flex-col lg:justify-between lg:p-20 
                                           md:flex md:flex-col md:justify-between md:p-20 sm:p-10"
        >
          <div className=" xl:w-1/2 lg:w-full md:w-full sm:w-full">
            <p className="text-white font-bold  sm:w-full sm:text-[20px]  md:w-full md:text-[25px]  lg:w-full lg:text-[30px] xl:text-[30px] ">
        Contact
            </p>
            <p className="text-gray-400   sm:text-[13px] sm:w-full md:text-[16px] md:w-full lg:text-[20px] lg:w-full xl:text-[20px] ">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac alique
              velit. <br /> Aliquam vulputate velit imperdiet dolor <br />{" "}
              tempor tristique.
            </p>
            <div className="flex gap-4 px-10 py-5">
              <button className="bg-[#F4C32C] text-black py- px-4 rounded-full">
                Shop Now
              </button>

              <button className="text-white border py-2 px-4 rounded-full hover:hover:border-[#686D76]">
                Explore
              </button>
            </div>
          </div>
          <div className="xl:w-1/2 sm:w-full md:w-full lg:w-full ">
            <img
              className="h-full w-full object-cover"
              src={logo}
              alt="image description"
            />
          </div>
        </div>
      </div>
   {/* hero section 2 */}
  <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
      className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      />
    </div>
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Contact 
      </h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        
      </p>
    </div>
    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Company
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="organization"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Phone number
          </label>
          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex ">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
      
            </div>
            <input
              type="number"
            
             className="w-full ga rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            {/* Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" */}
            <button
              type="button"
              className="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              role="switch"
              aria-checked="false"
              aria-labelledby="switch-1-label"
            >
              <span className="sr-only">Agree to policies</span>
              {/* Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" */}
              <span
                aria-hidden="true"
                className="h-4 w-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
              />
            </button>
          </div>
          <label
            className="text-sm leading-6 text-gray-600"
            id="switch-1-label"
          >
            By selecting this, you agree to our
            <a href="#" className="font-semibold text-[#3B5D4F]">
              privacy&nbsp;policy
            </a>
            .
          </label>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-[#3B5D4F] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#3B5D6F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>

</>
  );
};

export default Contact;
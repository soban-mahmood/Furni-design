import React from 'react'

const RecentBlog = () => {
  return (
    <div>
       <div className="mt-10 mb-20 md:p-5 lg:p-5 sm:p-3 px-3  ">
        <div className=" justify-center flex mb-10">
          <h2 className="text-[20px] font-semibold">Recent Blog</h2>
        </div>
        <div className="flex gap-10 justify-center sm:flex sm:flex-col sm:items-center ">
          <div className="">
            <img
              src="https://untree.co/demos/furni/images/post-1.jpg"
              alt=""
              className="h-[300px] w-[400px] rounded-2xl hover:opacity-60 "
            />
            <h3 className="text-[18px] mt-3">First Time Home Owner Ideas</h3>
            <p className="text-[grey]">by Kristin Watson on Dec 19, 2021</p>
          </div>
          <div className="">
            <img
              src="https://untree.co/demos/furni/images/post-2.jpg"
              alt=""
              className="h-[300px] w-[400px] rounded-2xl hover:opacity-60 "
            />
            <h3 className="text-[18px] mt-3">
              How To Keep Your Furniture Clean
            </h3>
            <p className="text-[grey] ">by Robert Fox on Dec 15, 2021</p>
          </div>
          <div className="">
            <img
              src="https://untree.co/demos/furni/images/post-3.jpg"
              alt=""
              className="h-[300px] w-[400px] rounded-2xl hover:opacity-60 "
            />
            <h3 className="text-[18px] mt-3">
              Small Space Furniture Apartment Ideas
            </h3>
            <p className="text-[grey]">by Kristin Watson on Dec 12, 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlog

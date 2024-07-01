import React from "react";

import Slick from "../component/Slick";
import RecentBlog from "../component/RecentBlog";
import Hero1 from "../component/Hero1";
import Hero2 from "../component/Hero2";
import Hero3 from "../component/Hero3";
import Hero4 from "../component/Hero4";
import Hero5 from "../component/Hero5";

const Home = () => {
  return (
    <>
      {/* hero section 1*/}
      <Hero1 />

      {/* hero section 2 */}
      <Hero2 />

      {/* hero section 3 */}
      <Hero3 />

      {/* hero secion 4 */}

      <Hero4 />
      {/* hero section 5 */}
      <Hero5 />
      {/* hero section 6 */}
      <Slick />
      {/* hero section 7 */}
      <RecentBlog />
    </>
  );
};

export default Home;

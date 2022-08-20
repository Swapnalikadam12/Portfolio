import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-white h-screen w-full dark:bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col flex-wrap justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black dark:text-white pt-7">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-700 text-gray-600 dark:text-gray-500 py-5">
            <ul className="list-none">
              <li>Logical And Results- Driven Full Stack Developer With 2+ Years Of Hands-On Experience in Building And Optimising User Focused Websites And Applications Using A Wide Range Of Front-End And Back-End Skills Like JavaScript, React.js, HTML, CSS, .Net, etc.</li>
              <li>Developed 12+ Websites and Maintained 20+ Websites.</li>
              <li>Awarded The ‘The Pat On The Back Award’ From Larsen & Toubro Infotech For Solving Challenging Problems And Timely Delivery With 0% Defects.</li>
            </ul>
          </p>

          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
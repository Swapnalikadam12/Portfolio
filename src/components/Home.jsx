import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SwapnaliKadam from '../assets/SwapnaliKadam.JPG';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-white dark:bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black dark:text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-800 py-4 max-w-md dark:text-gray-500">
           Logical And Results- Driven Full Stack Developer With 2+ Years Of Hands-On Experience in Building And Optimising User Focused Websites And Applications Using A Wide Range Of Front-End And Back-End Skills Like JavaScript, React.js, HTML, CSS, .Net, etc.
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
        <div>
          <img
            src={SwapnaliKadam}
            alt="my profile"
            height='400px'
            // className="rounded-2xl mx-auto w-2/3 md:w-full"
            className="rounded-2xl mx-auto w-96	width: 24rem;"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from "react";
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <div
      name="home"
      className="bg-white h-screen w-full dark:bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col flex-wrap justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-blue dark:text-white pt-7">
            <ul>
              <li>
                Hi!
              </li>
              <li className="text-amber dark:text-white">
                I'm Swapnali
              </li>
            </ul>
          </h2>
          <div className='typed text-2xl sm:text-4xl font-bold text-amber-500 dark:text-amber-500 pt-2'>
            <Typewriter
              options={{
                strings: [
                  'FULL STACK DEVELOPER',
                  'PROJECT QUALITY FACILITATOR',
                  'SOFTWARE ENGINEER'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-gray-700 text-gray-600 dark:text-gray-400 py-5">
            <ul className="list-none">
              <li>Logical And Results- Driven Full Stack Developer With 2+ Years Of Hands-On Experience in Building And Optimising User Focused Websites And Applications Using A Wide Range Of Front-End And Back-End Skills Like JavaScript, React.js, HTML, CSS, .Net, etc.</li>
              <li>Developed 12+ Websites and Maintained 20+ Websites.</li>
              <li>Awarded The ‘The Pat On The Back Award’ From Larsen & Toubro Infotech For Solving Challenging Problems And Timely Delivery With 0% Defects.</li>
            </ul>
          </p>
          <div>
            <a href={require("../assets/Swapnali_CV.pdf")} download="Swapnali_CV">
              <button type="button" className="group animate-bounce text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
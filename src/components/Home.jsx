import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SwapnaliKadam from '../assets/SwapnaliKadam.JPG';
// import ReactPlayer from "react-player";

const Home = () => {
//   const videoRef = useRef();
//   useEffect(() => {
//     videoRef.current.addEventListener(
//       "contextmenu",
//       function (e) {
//         e.preventDefault();
//       },
//       false
//     );

//     return videoRef.current.removeEventListener(
//       "contextmenu",
//       function (e) {
//         e.preventDefault();
//       },
//       false
//     );
//   }, []);

  return (
    <div
      name="home"
      className="bg-white h-screen w-full dark:bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-blsck dark:text-white ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Logical And Results- Driven Full Stack Developer With 2+ Years Of Hands-On Experience in Building And Optimising User Focused Websites And Applications Using A Wide Range Of Front-End And Back-End Skills Like JavaScript, React.js, HTML, CSS, .Net, etc.
            Developed 4+ Websites and Maintained 20+ Websites.
            Awarded The ‘The Pat On The Back Award’ From Larsen & Toubro Infotech For Solving Challenging Problems And Timely Delivery With 0% Defects.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

        </div>
        <div>
        </div>
        <div>
          {/* <div ref={videoRef}>
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
              config={{ file: { attributes: { controlsList: "nodownload" } } }}
            />
          </div> */}
          <img
            src={SwapnaliKadam}
            alt="my profile"
            height='524px'
            className="rounded-2xl mx-auto w-96	width: 24rem;"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

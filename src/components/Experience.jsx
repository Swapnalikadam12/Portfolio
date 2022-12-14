import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-white dark:bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black dark:text-white transition ease-in-out delay-150">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6"></p>
        </div>
        <ol className="border-l border-orange-700 dark:border-gray-700">                  
    <li className="mb-10 ml-6">
        <div className="shadow-md py-2 p-4 bg-white rounded-lg border shadow-blue-600 dark:bg-gray-700 hover:scale-105 duration-500">
            <div>
                <time className="mb-1 text-sm max-w-md text-black-400 sm:order-last sm:mb-0">2020 - Present</time>
                <div><a href="https://www.lntinfotech.com/" className="font-semibold text-gray-900 dark:text-white hover:underline">Larsen & Toubro Infotech Limited</a></div>     
            </div>
            <div className="p-3 text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
            <div className="italic"> 
              Software Engineer
            </div>
            <div>
            <ul className="p-3 text-sm text-gray-500 bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 list-disc">
              <li>
              Reviewing project specifications and developing and maintaining 7 React.js projects consuming .Net microservices. 
              </li>
              <li>
              Experience with Redux toolkit for state and Axios for fetching. 
              </li>
              <li>
              Continually working towards making improvements in the release process and facilitating migration to a Continuous Deployment/Continuous Integration app
              </li>
              <li>
              Presenting website mockups to clients to give them better visual of the end product and to ensure that all parameters are met.
              </li>
              <li>
              Working in agile environment and collaborating closely with the teams. Utilising a test driven development approach to meet client requirements for functionality, scalability and performance.
              </li>
              </ul></div>
              </div>
        </div>
    </li>
</ol>
      <div>
        


      </div>

      </div>
    </div>
  );
};

export default Experience;

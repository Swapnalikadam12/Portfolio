import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript1 from "../assets/javascript1.png";
import reactImage from "../assets/react.png";
import git from "../assets/git.png";
import aws1 from "../assets/lambda.png";
import mongoDB from "../assets/mongoDB.png";
import nodeJS from "../assets/nodeJS.png";
import java from "../assets/java.png";
import net from "../assets/net.png";
import sql2 from "../assets/sql2.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: javascript1,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: nodeJS,
      title: "Node.js",
      style: "shadow-green-600",
    },
    {
      id: 4,
      src: java,
      title: "Java",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: net,
      title: ".Net",
      style: "shadow-purple-600",
    },
    {
      id: 6,
      src: mongoDB,
      title: "Mongo DB",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: sql2,
      title: "SQL",
      style: "shadow-orange-400",
    },
    {
      id: 8,
      src: aws1,
      title: "AWS",
      style: "shadow-orange-400",
    },  
    {
      id: 9,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 10,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },  
    {
      id: 11,
      src: git,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-white dark:bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black dark:text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

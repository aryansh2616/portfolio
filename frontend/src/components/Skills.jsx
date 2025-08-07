import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "Docker",
];

// You can adjust animation duration and size in CSS below

function Skills() {
  return (
    <section id="skills" className=" mx-auto  bg-[#e6f6ff] rounded-lg shadow-md p-4">

      <div className="overflow-hidden relative">
        <ul
          className="flex whitespace-nowrap animate-scroll"
          style={{ minWidth: "max-content" }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <li
              key={index}
              className=" text- px-6 py-3 rounded-full font-semibold mx-2"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;

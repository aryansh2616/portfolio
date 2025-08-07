import React from "react";
import { motion } from "framer-motion";

// === Animation Variants ===
const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

function SkillsSection() {
  const skills = {
    "Languages": ["Java", "HTML", "CSS", "JavaScript", "SQL"],
    "Frameworks / Libraries": ["React.js", "Bootstrap", "Tailwind CSS", "Node.js", "Express.js"],
    "Databases": ["MongoDB", "MySQL"],
    "Developer Tools": ["VS Code", "Postman", "Git", "GitHub"],
    "Cloud Platforms": ["Google Cloud Platform (GCP)"],
    "API Technologies": ["REST APIs"]
  };

  return (
    <motion.section
      className="relative bg-gray-950 text-white pt-12 pb-20 px-4 md:px-10 overflow-hidden z-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
    >
      {/* === Enhanced Background === */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full animate-pulse" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="enhancedGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="cyan"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#enhancedGrid)" />
        </svg>
      </div>

      {/* === Content Wrapper === */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-400"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              variants={cardVariant}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(59,130,246,0.5)",
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-xl p-6 sm:p-8 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-300">{category}</h3>
              <motion.ul variants={containerVariant} className="list-disc list-inside space-y-2">
                {items.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariant}
                    className="hover:text-blue-200 transition duration-150 cursor-default text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default SkillsSection;

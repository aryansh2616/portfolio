import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img3 from "../images/projects/learniverse.png";
import img4 from "../images/projects/spotify.png";
import img5 from "../images/projects/simmon.png";
import img6 from "../images/projects/moneyantra.png";
import img7 from "../images/projects/wonderlust.png";
import img8 from "../images/projects/appolo.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        name: "Moneyantra",
        description: "Moneyantra is a smart tax calculation and investment tracking app designed to simplify your financial planning. It helps users effortlessly view their Capital Gains and get a consolidated view of total investments across all mutual funds. Built with a sleek, modern React + Tailwind CSS frontend for a seamless user experience, and powered by a robust Express.js + Node.js backend, Moneyantra securely stores data using Google Drive and Google Sheets integration — making it a powerful yet accessible solution for smart investors.",
        github: "#",
        demo: "#",
        image: img6,
    },
    {
        name: "Wonderlust",
        description: "Wonderlust is a rental listing platform that allows users to host their properties for short-term stays, helping travelers discover and book places tailored to their preferences. Built with a clean and responsive HTML/CSS frontend, a powerful Node.js + Express backend, and a MongoDB database to manage all property listings — Wonderlust aims to offer a seamless experience for both hosts and guests. 🔧 This project is currently a work in progress, with ongoing development to enhance features and user experience.",
        github: "#",
        demo: "#",
        image: img7,
    },
    {
        name: "Apollo",
        description: "reated a frontend clone of the Apollo doctors portal using HTML and CSS, with a Node.js + Express backend and MongoDB for data storage. Built solely to enhance my skills through real-world project practice.",
        github: "#",
        demo: "#",
        image: img8,
    },
    {
        name: "Spotify",
        description: "Spotify Clone frontend using html and css ",
        github: "#",
        demo: "#",
        image: img4,
    },
    {
        name: "Simmon",
        description: "Recreated the classic memory-based Simon Game using HTML, CSS, and JavaScript for core game logic. Features include level progression, sound effects, and interactive UI to enhance user engagement. Built to strengthen fundamentals of DOM manipulation and event handling.",
        github: "#",
        demo: "#",
        image: img5,
    },
    {
        name: "Learniverse",
        description: "Utilized HTML, CSS, JavaScript, and Bootstrap to design and develop the front-end of an engaging education website. Created responsive layouts and visually appealing designs for features such as gamification, live classes, progress tracking,daily streaks, attendance management, and personalized dashboards, providing a seamless and interactive user interface.",
        github: "#",
        demo: "#",
        image: img3,
    },
];

const cardHover = {
    scale: 1.05,
    boxShadow: "0 20px 30px rgba(0, 200, 255, 0.4)",
};

const cardTap = {
    scale: 0.97,
};

// Animation variants for modal backdrop
const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

// Animation variants for modal content
const modalVariants = {
    visible: { y: "0", opacity: 1, transition: { type: "spring", stiffness: 100 } },
    hidden: { y: "100vh", opacity: 0 }
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCloseModal = (e) => {
        // Check if the click occurred on the backdrop itself and not the modal content
        if (e.target.id === 'modal-backdrop') {
            setSelectedProject(null);
        }
    };

    return (
        <>
            <section id="projects" className="relative w-full min-h-screen p-12 bg-[#0c0c0c] text-white overflow-hidden">
                {/* Animated Background Elements */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600 rounded-full opacity-30 blur-3xl"
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky-600 rounded-full opacity-30 blur-3xl"
                    animate={{
                        x: [0, -50, 50, 0],
                        y: [0, 50, -50, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-blue-400">PROJECTS</h2>
                <div className="relative grid gap-8 md:grid-cols-3">
                    {projects.map((project) => (
                        <motion.div
                            key={project.name}
                            className=" shadow-md rounded-lg p-6 cursor-pointer transform  flex flex-col"
                            whileHover={cardHover}
                            whileTap={cardTap}
                            transition={{ type: "spring", stiffness: 200 }}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="mb-4 w-full h-48 "
                            />
                            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            {/* <div className="flex space-x-4 mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2"
                                >
                                    <FaGithub />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center space-x-2"
                                >
                                    <FaExternalLinkAlt />
                                    <span>Live Demo</span>
                                </a>
                            </div> */}
                        </motion.div>
                    ))}
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        id="modal-backdrop"
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={backdropVariants}
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            className="relative bg-gray-900 p-6 rounded-xl shadow-2xl max-w-2xl w-full text-gray-100 overflow-y-auto max-h-[90vh]"
                            variants={modalVariants}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-100 transition-colors duration-200 text-xs"
                            >
                                ✖
                            </button>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="rounded-lg mb-6 w-full h-auto"
                            />
                            <h3 className="text-3xl font-bold mb-4 text-blue-400">{selectedProject.name}</h3>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>
                            {/* <div className="flex space-x-6">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full flex items-center space-x-2 transition-colors duration-200"
                                >
                                    <FaGithub />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={selectedProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-full flex items-center space-x-2 transition-colors duration-200"
                                >
                                    <FaExternalLinkAlt />
                                    <span>Live Demo</span>
                                </a>
                            </div> */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
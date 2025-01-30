import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData: { title: string; description: string; imageUrl: string; techStack: string; links: { live?: string; github: string } }[] = [
    {
        title: "Intra Share",
        description:
            "A private social media web app built with the MERN stack (MongoDB, Express.js, React, Node.js) for exclusive use within organizations or colleges. Features include email-based authentication, network-restricted access, user following, and interactive post engagement (likes and comments). Designed with an MVC architecture for scalability and maintainability",
        imageUrl: "/projects/intrashare.png",
        techStack: "React, Node.js, Express, MongoDB",
        links: { live: "https://intra-share.herokuapp.com", github: "https://github.com/Jayant-Verma/Intra-Share" },
    },
    {
        title: "My ChatRoom",
        description:
            "A real-time group chat application built with React.js, Socket.io, and Node.js, featuring five distinct chat rooms for topic-specific discussions. Designed for seamless group conversations without the need for permanent social media groups, promoting efficient and effortless communication.",
        imageUrl: "/projects/mychatroom.png",
        techStack: "React, Socket.io, Node.js",
        links: { live: "https://mychat-rrom.netlify.app/", github: "https://github.com/Jayant-Verma/My-ChatRoom-frontend" },
    },
    {
        title: "Temperature Converter",
        description:
            "A basic yet functional mobile app developed for learning purposes, allowing users to convert temperatures between Celsius and Fahrenheit seamlessly. Built to enhance foundational skills in Android/IOS development and UI design.",
        imageUrl: "/projects/tempconverter.jpg",
        techStack: "Flutter, Dart",
        links: { github: "https://github.com/Jayant-Verma/Temparature-Converter-App-Flutter" },
    }
];

const Projects = () => {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [projectsPerPage, setProjectsPerPage] = useState<number>(3);

    useEffect(() => {
        const updateProjectsPerPage = () => {
        const width = window.innerWidth;
    
        if (width >= 1024) setProjectsPerPage(3); 
        else if (width >= 768) setProjectsPerPage(2); 
        else setProjectsPerPage(1); 
        };
    
        updateProjectsPerPage(); 
        window.addEventListener("resize", updateProjectsPerPage);
    
        return () => window.removeEventListener("resize", updateProjectsPerPage);
    }, []);
    
    const indexOfLastProject: number = currentPage * projectsPerPage;
    const indexOfFirstProject: number = indexOfLastProject - projectsPerPage;
    const currentProjects: typeof projectsData = projectsData.slice(
        indexOfFirstProject,
        indexOfLastProject
    );

    const totalPages: number = Math.ceil(projectsData.length / projectsPerPage);

    const handlePrevPage = () => {
        setFlippedIndex(null);
        setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
    };

    const handleNextPage = () => {
        setFlippedIndex(null);
        setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
    };

    const handleCardClick = (index: number) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    return (
        <section
            id="projects"
            className="py-16 text-white relative overflow-hidden"
        >
            <div className="container mx-auto px-6 sm:px-12">
                <motion.h2 
                    className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    My <span className="text-orange-500">Projects</span>
                </motion.h2>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {currentProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="w-full h-96 perspective"
                                whileHover={{ scale: 1.05 }}
                                onClick={() => handleCardClick(index)}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <motion.div
                                    className={`card w-full h-full ${
                                        flippedIndex === index ? "flipped" : ""
                                    }`}
                                    animate={{
                                    rotateY: flippedIndex === index ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                >
                                    {/* Front Side */}
                                    <div
                                        className="card-face card-front bg-cover bg-center rounded-2xl shadow-lg cursor-pointer relative"
                                        style={{
                                            backgroundImage: `url(${project.imageUrl})`,
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gray-700 bg-opacity-30 rounded-2xl flex items-center justify-center">
                                            <h3 className="text-2xl font-bold text-white">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div className="card-face card-back bg-gray-700 rounded-2xl bg-opacity-30 text-white p-6 flex flex-col justify-between">
                                        <h3 className="text-2xl font-bold mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm mb-4">{project.description}</p>
                                        <p className="text-xs mb-6 italic">{project.techStack}</p>
                                        <div className="flex gap-4">
                                            {project.links.live && (
                                                <a
                                                    href={project.links.live}
                                                    className="py-2 px-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    className="py-2 px-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-orange-500 transition"
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Controls */}
                <div className="mt-12 flex justify-center items-center gap-4">
                    <button
                        onClick={handlePrevPage}
                        className="py-2 px-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
                    >
                        Previous
                    </button>
                    <div className="text-lg font-semibold text-orange-400">
                        Page {currentPage} of {totalPages}
                    </div>
                    <button
                        onClick={handleNextPage}
                        className="py-2 px-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
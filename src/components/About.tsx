import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    CodeBracketIcon,
    CpuChipIcon,
    BriefcaseIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const stats = [
    {
        title: "DSA Problems Solved",
        value: 650,
        icon: <CodeBracketIcon className="h-10 w-10 text-orange-500" />,
    },
    {
        title: "Years of Experience",
        value: 2,
        icon: <BriefcaseIcon className="h-10 w-10 text-blue-500" />,
    },
    {
        title: "Projects Built",
        value: 10,
        icon: <CpuChipIcon className="h-10 w-10 text-green-500" />,
    },
    {
        title: "Lines of Code",
        value: 150000,
        icon: <AcademicCapIcon className="h-10 w-10 text-yellow-500" />,
    },
];

const skillBadges = [
    { name: "React.js", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Golang", icon: "go" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Redux Toolkit", icon: "redux" },
    { name: "Express.js", icon: "express" },
    { name: "C++", icon: "cplusplus" },
    { name: "REST API", icon: "nestjs" },
    { name: "InfluxDB", icon: "influxdb" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Socket.io", icon: "socketio" },
    { name: "Flutter", icon: "flutter" },
    { name: "Dart", icon: "dart" },
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
];

const AnimatedCounter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const increment = target / (duration / 16);

        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.round(start));
            }
        }, 16);

        return () => clearInterval(interval);
    }, [target]);

    return <span>{count}</span>;
};

const About = () => {
    return (
        <section
            id="about"
            className="py-16 bg-gradient-to-r from-slate-300 via-gray-100 to-slate-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
        >
            <div className="container mx-auto px-6 sm:px-12">
                {/* Header */}
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    My <span className="text-orange-500">Journey</span>
                </motion.h2>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                        >
                            <div className="mb-4">{stat.icon}</div>
                            <h3 className="text-5xl font-extrabold text-gray-900 dark:text-white">
                                <AnimatedCounter target={stat.value} />
                            </h3>
                            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
                                {stat.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Skills Section */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-3xl font-bold text-center text-orange-500 mb-8">
                        Technical Skills
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skillBadges.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="bg-gray-300 dark:bg-gray-800 text-sm font-semibold text-gray-900 dark:text-white py-2 px-4 rounded-full shadow-md hover:scale-105 transition-transform flex items-center gap-2"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <Image
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                                    alt={skill.name}
                                    width={20}
                                    height={20}
                                />
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Extra Curricular Section */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 className="text-3xl font-bold text-center text-orange-500 mb-8">
                        Extra-Curricular Achievements
                    </h3>
                    <div className="max-w-4xl mx-auto text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
                        <p>
                            <span className="font-semibold text-orange-500">Competitive Programming:</span>{" "}
                            Secured global rank 249 in CodeChef June Starters 2021.
                        </p>
                        <p>
                            <span className="font-semibold text-orange-500">Academic Excellence:</span>{" "}
                            Achieved AIR 189 in NIMCET 2020, AIR 119 in JNU MCA Entrance 2020, 
                            AIR 124 in BHU MCA Entrance 2020.
                        </p>
                        <p>
                            <span className="font-semibold text-orange-500">Sports:</span>{" "}
                            Represented my region as an All-India level hockey player, securing multiple titles.
                        </p>
                        <p>
                            <span className="font-semibold text-orange-500">General Knowledge:</span>{" "}
                            Won multiple GK competitions at regional level.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
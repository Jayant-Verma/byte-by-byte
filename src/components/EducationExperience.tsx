import { motion } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const educationData: { degree: string; institution: string; year: string; description: string }[] = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "NIT Warangal",
        year: "2020 - 2023",
        description:
            "Specialized in software engineering, operating systems, and modern web technologies.",
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Springdale College of Management Studies, Pilibhit",
        year: "2016 - 2019",
        description:
            "Focused on foundational computer science principles, programming, and database management.",
    },
];

const experienceData: { role: string; company: string; year: string; description: string }[] = [
    {
        role: "Software Engineer",
        company: "Radisys",
        year: "Dec, 2023 - Present",
        description:
            "Designed and implemented scalable microservices using React, Golang, and Kafka. Expanded CBAC-lite’s capabilities by integrating advanced features such as real-time graph generation, providing users with valuable insights into OLT performance. Implemented Redux Toolkit for state management in CBAC-lite, enhancing the efficiency and scalability of the application’s data handling and providing a more streamlined user experience. Developed and maintained SNMP agent component using Golang, implementing new features and resolving critical bugs to enhance product functionality. Improved code quality and reliability by writing comprehensive test cases, achieving 75% code coverage for the SNMP agent module.",
    },
    {
        role: "Software Engineer Intern",
        company: "Radisys",
        year: "July, 2023 - Nov, 2023",
        description:
            "Led the development of CBAC-lite, the first GUI application for OLT monitoring and management, benefiting Radisys customers. Collaborated with the UI/UX team, actively contributing ideas to enhance user experience and design. Used Next.js, React.js, Tailwind CSS, Material-UI, and TypeScript to create an easy-to-use GUI application.",
    },
];

const EducationExperience = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggleDescription = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section
            id="education-experience"
            className="bg-slate-200 dark:bg-gray-900 text-white py-16 px-6 md:px-12"
        >
            <div className="container mx-auto">
                <motion.h2 
                    className="text-center text-4xl font-bold text-gray-900 dark:text-white mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Education <span className="text-orange-500">& Experience</span>
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Education Section */}
                    <div className="lg:w-1/3 w-full">
                        <h3 className="text-3xl font-semibold mb-8 text-orange-500">
                            Education
                        </h3>
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-0 h-full w-1 bg-orange-500"></div>
                            {educationData.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="relative pl-16 mb-12"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <div className="absolute left-0 w-12 h-12 bg-orange-600 text-white flex items-center justify-center rounded-full shadow-lg">
                                        <AcademicCapIcon className="w-6 h-6" />
                                    </div>
                                    <div className="bg-gradient-to-r from-slate-100 to-slate-300 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <h4 className="text-lg text-gray-800 dark:text-white font-bold">{edu.degree}</h4>
                                        <p className="text-sm text-slate-800 dark:text-gray-400">{edu.institution}</p>
                                        <p className="text-xs text-slate-900 dark:text-gray-500">{edu.year}</p>
                                        <p className="mt-2 text-slate-700 dark:text-gray-300">{edu.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="lg:w-2/3 w-full">
                        <h3 className="text-3xl font-semibold mb-8 text-orange-500">
                            Experience
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {experienceData.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="relative bg-gradient-to-r from-slate-100 to-slate-300 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-orange-600 text-white flex items-center justify-center rounded-full">
                                            <BriefcaseIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg text-gray-800 dark:text-white font-bold">{exp.role}</h4>
                                            <p className="text-sm text-slate-800 dark:text-gray-400">{exp.company}</p>
                                            <p className="text-xs text-slate-900 dark:text-gray-500">{exp.year}</p>
                                        </div>
                                    </div>
                                    {/* Experience Description */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-full' : 'max-h-18'}`}
                                    >
                                        <p className="text-slate-700 dark:text-gray-300">
                                            {expandedIndex === index
                                                ? exp.description
                                                : exp.description.length > 80
                                                    ? `${exp.description.slice(0, 80)}...`
                                                    : exp.description}
                                        </p>
                                    </div>

                                    {/* Read More / Show Less Button */}
                                    {exp.description.length > 80 && (
                                        <button
                                            onClick={() => handleToggleDescription(index)}
                                            className="text-orange-500 mt-2 hover:underline"
                                        >
                                            {expandedIndex === index ? "Show Less" : "Read More"}
                                        </button>
                                    )}

                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationExperience;
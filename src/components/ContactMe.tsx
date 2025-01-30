import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jayantverma007/",
        icon: <Image src="/icons/linkedin.png" alt="LinkedIn" width={50} height={50} />,
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/u/red_samurai/",
        icon: <Image src="/icons/leetcode.png" alt="LeetCode" width={50} height={50} />,
    },
    {
        name: "GitHub",
        url: "https://github.com/Jayant-Verma",
        icon: <Image src="/icons/github.png" alt="GitHub" width={50} height={50} />,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/jayant_rajputt/",
        icon: <Image src="/icons/instagram.png" alt="Instagram" width={50} height={50} />,
    },
    {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/user/jayden007/",
        icon: <Image src="/icons/geeksforgeeks.png" alt="GeeksforGeeks" width={50} height={50} />,
    },
];

const ContactMe = () => {
    return (
        <section
            id="contact"
            className="py-24 bg-slate-300 dark:bg-gray-900 text-gray-900 dark:text-white relative"
        >
            <div className="container mx-auto px-6 sm:px-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gray-900 dark:bg-white text-transparent bg-clip-text">
                        Let’s <span className="text-orange-500">Get in Touch</span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        Whether you have a project to discuss, want to connect professionally, or just say hello, feel free to reach out. I’d love to collaborate and create something amazing!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                                    {link.icon}
                                </div>
                                <span className="mt-4 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-100">
                                    {link.name}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col gap-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Send Me a Message
                        </h3>
                        <form
                            action="#"
                            className="flex flex-col gap-4"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full py-3 px-4 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full py-3 px-4 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full py-3 px-4 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                rows={4}
                            ></textarea>
                            <button
                                type="submit"
                                className="py-3 px-6 bg-orange-500 rounded-lg text-white font-semibold hover:bg-orange-600 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
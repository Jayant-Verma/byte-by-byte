import { motion } from "framer-motion";
// import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">

            <div className="relative z-20 flex justify-center items-center h-full text-center px-6 sm:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Animated Heading */}
                    <motion.h1
                        className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Hello, I&#39;m Jayant
                    </motion.h1>

                    {/* Subheading with staggered animation */}
                    <motion.p
                        className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-200 opacity-90 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                    >
                        A Passionate Software Engineer & Full Stack Developer
                    </motion.p>

                    {/* Short Description */}
                    <motion.p
                        className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 opacity-80 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                    >
                        With over 1+ years of experience in modern web development, I specialize in building scalable applications with React, Next.js, Golang, and more. Let&#39;s collaborate and build something incredible!
                    </motion.p>

                    {/* Call to Action Buttons */}
                    <div className="mt-8 flex justify-center gap-6">
                        <motion.a
                            href="#about"
                            className="inline-block py-3 px-8 bg-orange-500 text-white text-xl font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            Learn More
                        </motion.a>

                        <motion.a
                            href="#projects"
                            className="inline-block py-3 px-8 bg-transparent border-2 border-gray-500 dark:border-white text-gray-500 dark:text-white text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            My Projects
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* <div className="absolute bottom-4 right-12 sm:block hidden z-20">
                <motion.div
                    className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <Image src="/coder.gif" alt="Your Name" width={240} height={240} className="object-cover" />
                </motion.div>
            </div> */}
        </section>
    );
};

export default Hero;
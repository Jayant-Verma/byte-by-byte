"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitch = () => {
    const [theme, setTheme] = useState<string>("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div className="fixed top-4 right-4 md:bottom-6 md:left-6 md:top-auto md:right-auto z-50">
            {/* Outer Container */}
            <div className="relative flex items-center justify-center">
                <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-16 h-8 flex items-center rounded-full bg-white dark:bg-gray-800 shadow-md backdrop-blur-lg transition-all duration-300"
                >
                    {/* Toggle Track */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-orange-400 dark:from-gray-700 dark:to-gray-900 blur-sm opacity-40"></div>

                    {/* Animated Toggle Circle */}
                    <motion.div
                        animate={{
                            x: theme === "dark" ? "2.0rem" : "0.2rem",
                            rotate: theme === "dark" ? 360 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-gray-600 dark:to-gray-900 shadow-md flex items-center justify-center"
                    >
                        {/* Sun/Moon Icon */}
                        {theme === "light" ? (
                            <SunIcon className="w-4 h-4 text-white" />
                        ) : (
                            <MoonIcon className="w-4 h-4 text-white" />
                        )}
                    </motion.div>
                </motion.button>
            </div>
        </div>
    );
};

export default ThemeSwitch;
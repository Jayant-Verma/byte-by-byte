"use client";

import Link from "next/link";
import { HomeIcon, ChatBubbleLeftIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; 

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/", icon: <HomeIcon className="w-6 h-6" /> },
        { name: "Blog", href: "/blog", icon: <DocumentTextIcon className="w-6 h-6" /> },
        { name: "Contact", href: "/#contact", icon: <ChatBubbleLeftIcon className="w-6 h-6" /> },
    ];

    const isActive = (linkHref: string) => {
        if (linkHref === "/") {
            return pathname === "/"
                ? "text-orange-500 dark:text-orange-400"
                : "text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400";
        }
        return pathname.startsWith(linkHref)
            ? "text-orange-500 dark:text-orange-400"
            : "text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400";
    };

    return (
        <div className="z-50 fixed flex justify-center w-full font-bold">
            {/* Wrapper with conditional colors */}
            <div className="border border-gray-200 dark:border-gray-700 mt-4 backdrop-blur-3xl rounded-3xl hidden md:flex justify-between items-center p-2 max-w-[400px] mx-auto bg-white/60 dark:bg-gray-800/70 shadow-md">
                <ul className="flex flex-row p-2 space-x-8 list-none m-0">
                    {navLinks.map((link, index) => (
                        <li key={index} className="mb-0">
                            <Link
                                href={link.href}
                                className={`transform transition-all duration-300 ease-in-out ${isActive(link.href)}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className="fixed bottom-2 left-2 right-2 z-50 border border-transparent backdrop-blur-3xl rounded-3xl shadow-lg bg-gray-200/60 dark:bg-gray-800/70 md:hidden">
                {/* Funky Mobile Navbar */}
                <div className="flex justify-between items-center px-10 py-3 bg-opacity-60 backdrop-blur-md rounded-3xl">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.2,
                                rotate: 15,
                                color: "#ffeb3b",
                            }}
                            whileTap={{
                                scale: 0.85,
                                rotate: -15,
                            }}
                            className="flex flex-col items-center justify-center transition-all duration-300"
                        >
                            <Link
                                href={link.href}
                                className={`flex items-center justify-center transition-all duration-300 ${isActive(link.href)}`}
                            >
                                {link.icon}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
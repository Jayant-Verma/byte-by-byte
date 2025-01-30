"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

const BackgroundShapes = () => {
    const { theme } = useTheme();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Shape 1 */}
            <div
                className={`absolute rounded-full bg-gradient-to-r ${theme === "light"
                        ? "from-pink-400 via-red-300 to-yellow-300"
                        : "from-purple-700 via-blue-600 to-indigo-800"
                    } blur-3xl opacity-50 animate-move1 w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem]`}
                style={{ top: "5%", left: "5%" }}
            ></div>

            {/* Shape 2 */}
            <div
                className={`absolute rounded-full bg-gradient-to-r ${theme === "light"
                        ? "from-purple-400 via-indigo-300 to-blue-300"
                        : "from-green-700 via-teal-600 to-cyan-800"
                    } blur-3xl opacity-50 animate-move2 w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem]`}
                style={{ top: "30%", right: "5%" }}
            ></div>

            {/* Shape 3 */}
            <div
                className={`absolute rounded-full bg-gradient-to-r ${theme === "light"
                        ? "from-green-400 via-lime-300 to-yellow-300"
                        : "from-pink-700 via-red-600 to-orange-800"
                    } blur-3xl opacity-50 animate-move3 w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem]`}
                style={{ bottom: "5%", left: "15%" }}
            ></div>
        </div>
    );
};

export default BackgroundShapes;
"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "dark"; // Default to dark mode
        }
        return "dark";
    });

    useEffect(() => {
        const root = document.documentElement; // Select <html> element

        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark"); // Save preference
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light"); // Save preference
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
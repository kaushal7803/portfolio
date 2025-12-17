"use client";

import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { motion } from "motion/react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const saved = typeof window !== "undefined" && localStorage.getItem("theme");
        if (saved) {
            const preferDark = saved === "dark";
            setIsDark(preferDark);
            document.documentElement.classList.toggle("dark-mode", preferDark);
        } else {
            document.documentElement.classList.toggle("dark-mode", isDark);
            localStorage.setItem("theme", isDark ? "dark" : "light");
        }
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark-mode", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    return (
        <div className="bg-card border border-card w-[90px] h-[50px] rounded-full p-2 relative cursor-pointer" onClick={toggle}>
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute z-10 top-1/2 -translate-y-1/2 bg-black w-9 h-9 rounded-full flex items-center justify-center"
                style={{ left: isDark ? "8px" : "calc(100% - 44px)" }}
            >
                {isDark ? (
                    <MdDarkMode className="text-[#FEE3A4] w-6 h-6" />
                ) : (
                    <MdLightMode className="text-[#FEE3A4] w-6 h-6" />
                )}
            </motion.div>
        </div>
    );
}

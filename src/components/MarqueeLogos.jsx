"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function MarqueeLogos({ logos = [] }) {
    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="flex gap-7 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
            >
                {[...logos, ...logos].map((logo, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center rounded-xl max-h-[50px] max-w-[50px] sm:max-h-[60px] aspect-square sm:max-w-[60px] bg-[#EEF0F1] p-3 shrink-0"
                    >
                        <Image src={logo} alt="tech logo" className="w-full h-full object-contain" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

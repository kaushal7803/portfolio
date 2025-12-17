"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

import ThemeToggle from "./ThemeToggle";
import MarqueeLogos from "./MarqueeLogos";

import home1 from "../assets/images/home2.webp";
import home2 from "../assets/images/home1.webp";
import home3 from "../assets/images/home3.webp";
import person from "../assets/images/person2.jpg";

import tech1 from "../assets/images/framer.webp";
import tech2 from "../assets/images/tech2.webp";
import tech3 from "../assets/images/tech3.webp";
import tech4 from "../assets/images/tech5.webp";
import tech5 from "../assets/images/tech6.webp";
import tech6 from "../assets/images/tech7.webp";

const logoShow = [tech1, tech2, tech3, tech4, tech5, tech6];

export default function LeftColumn() {
    return (
        <div className="xl:col-span-7 grid grid-cols-1 lg:grid-cols-15 gap-3 lg:gap-6 xl:gap-3 sm:items-stretch">
            <div className="bg-card sm:h-[250px] justify-center space-y-4 flex-col rounded-2xl lg:rounded-4xl flex p-12 sm:col-span-7 border border-card">
                <h1 className="font-medium text-2xl sm:text-[30px] text-primary">Hi, I'm Kaushal -</h1>
                <p className="text-muted text-lg sm:text-2xl">React Developer</p>
            </div>

            <div className="sm:h-[250px] sm:col-span-4">
                <Image src={home1} alt="home" className="w-full h-full border border-card rounded-2xl lg:rounded-4xl object-cover" />
            </div>

            <div className="sm:h-[250px] sm:col-span-4">
                <Image src={home2} alt="home" className="w-full h-full border border-card rounded-2xl lg:rounded-4xl object-cover" />
            </div>

            <div className="h-[250px] sm:col-span-4 lg:block hidden">
                <Image src={person} alt="home" className="w-full h-full border border-card rounded-4xl object-cover" />
            </div>

            <motion.div whileHover="hover" initial="rest" animate="rest" className="bg-card z-10 cursor-pointer sm:h-[250px] justify-between flex-col rounded-2xl lg:rounded-4xl flex p-8 sm:col-span-6 border border-card group">
                <div className="space-y-4">
                    <h5 className="font-medium uppercase text-muted tracking-widest sm:text-base text-sm">About</h5>
                    <p className="text-primary font-medium text-xl sm:text-[26px]">Passionate about design and enjoy solving problems.</p>
                </div>

                <div className="flex justify-end">
                    <div className="border border-card rounded-full h-9 w-9 sm:w-11 sm:h-11 flex items-center justify-center relative overflow-hidden">
                        <motion.div
                            variants={{ rest: { x: 0, y: 0, opacity: 1 }, hover: { x: 20, y: -20, opacity: 0 } }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="absolute"
                        >
                            <GoArrowUpRight className="sm:w-6 sm:h-6 w-5 h-5 text-muted" />
                        </motion.div>

                        <motion.div
                            variants={{ rest: { x: -20, y: 20, opacity: 0 }, hover: { x: 0, y: 0, opacity: 1 } }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="absolute"
                        >
                            <GoArrowUpRight className="sm:w-6 sm:h-6 w-5 h-5 text-primary" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="sm:h-[250px] sm:col-span-5">
                <Image src={home3} alt="home" className="w-full h-full rounded-2xl lg:rounded-4xl border border-card object-cover" />
            </div>

            <div className="bg-card sm:h-[250px] justify-center space-y-4 flex-col rounded-2xl lg:rounded-4xl flex p-8 sm:col-span-7 border border-card">
                <h1 className="text-primary font-medium text-xl sm:text-[26px]">Get design tips & guides straight to your inbox for free!</h1>

                <div className="flex sm:flex-row flex-col items-center relative z-50 gap-2">
                    <input type="text" name="name" placeholder="Your email address" className="py-4 px-6 w-full sm:w-[75%] border-2 focus:outline-none border-card   rounded-xl lg:rounded-2xl sm:text-base text-sm " />

                    <button className="bg-[#242424] cursor-pointer w-full sm:w-[25%] py-4 px-2 rounded-xl lg:rounded-2xl  text-[#CCCCCC] font-medium sm:text-base text-sm">Subscribe</button>
                </div>
            </div>

            <div className="bg-card sm:h-[250px] justify-center space-y-6 flex-col rounded-2xl lg:rounded-4xl flex p-8 sm:col-span-5 border border-card relative overflow-hidden">
                <h1 className="text-primary font-medium text-xl sm:text-[26px]">Stack I use</h1>

                <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[page-bg] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[page-bg] to-transparent z-10" />

                <MarqueeLogos logos={logoShow} />
            </div>

            <div className="bg-card  sm:h-[250px] justify-center items-center rounded-2xl lg:rounded-4xl flex p-8 sm:col-span-3 border border-card">
                <ThemeToggle />
            </div>
        </div>
    );
}

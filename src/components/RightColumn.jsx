"use client";

import React from "react";
import { motion } from "motion/react";
import { GoArrowUpRight } from "react-icons/go";

import SocialIcons from "./SocialIcons";

export default function RightColumn() {
    return (
        <div className="xl:col-span-2 grid   lg:grid-cols-3 xl:flex xl:flex-col gap-3 xl:items-stretch">
            <SocialIcons />

            <motion.div whileHover="hover" initial="rest" animate="rest" className="bg-card z-10 cursor-pointer order-1 sm:order-2 xl:h-[290px] justify-between flex-col rounded-2xl sm:rounded-4xl flex p-8 xl:col-span-6 border border-card group">
                <div className="space-y-4">
                    <h5 className="font-medium uppercase text-muted tracking-widest sm:text-base text-sm">RESOURCES</h5>
                    <p className="text-primary font-medium text-xl sm:text-[26px]">Resources to speed your workflow</p>
                </div>

                <div className="flex justify-end">
                    <div className="border border-card rounded-full sm:w-11 sm:h-11 w-9 h-9 flex items-center justify-center relative overflow-hidden">
                        <motion.div variants={{ rest: { x: 0, y: 0, opacity: 1 }, hover: { x: 20, y: -20, opacity: 0 } }} transition={{ duration: 0.25, ease: "easeInOut" }} className="absolute">
                            <GoArrowUpRight className="sm:w-6 sm:h-6 w-5 h-5 text-muted" />
                        </motion.div>

                        <motion.div variants={{ rest: { x: -20, y: 20, opacity: 0 }, hover: { x: 0, y: 0, opacity: 1 } }} transition={{ duration: 0.25, ease: "easeInOut" }} className="absolute">
                            <GoArrowUpRight className="sm:w-6 sm:h-6 w-5 h-5 text-primary" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="bg-card sm:order-3 order-2 xl:h-[250px] justify-between space-y-5 flex-col rounded-2xl sm:rounded-4xl flex p-8 xl:col-span-6 border border-card">
                <p className="text-primary font-medium  text-xl sm:text-[26px]">Have a project in your mind ?</p>

                <button className="bg-accent p-3 sm:p-4 rounded-xl sm:text-lg cursor-pointer text-primary z-10 ">Copy Email</button>
            </div>
        </div>
    );
}

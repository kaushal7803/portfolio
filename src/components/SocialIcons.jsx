"use client";

import React from "react";
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const icons = [FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub, CiMail, FaXTwitter];

export default function SocialIcons() {
    return (
        <div className="grid grid-cols-6 z-10 sm:order-1 order-3 sm:grid-cols-3 gap-3 xl:h-[210px] items-center justify-center w-full">
            {icons.map((Icon, idx) => (
                <div
                    key={idx}
                    className="border border-card bg-card flex items-center justify-center rounded-xl sm:rounded-3xl xl:max-h-[98px] aspect-square xl:max-w-[98px]"
                >
                    <Icon className="sm:w-9 sm:h-9 w-4 h-4 text-primary" />
                </div>
            ))}
        </div>
    );
}

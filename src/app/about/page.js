import MarqueeLogos from "@/components/MarqueeLogos";
import React from "react";
import { IoIosClose } from "react-icons/io";
import tech1 from "@/assets/images/framer.webp";
import tech2 from "@/assets/images/tech2.webp";
import tech3 from "@/assets/images/tech3.webp";
import tech4 from "@/assets/images/tech5.webp";
import tech5 from "@/assets/images/tech6.webp";
import tech6 from "@/assets/images/tech7.webp";

import story_img from "@/assets/images/story_img.webp";
import Image from "next/image";

const Experience = [
  {
    role: "Design Lead",

    duration: "Present",
  },

  {
    role: "Senior Product Designer",

    duration: "2020 - 2022",
  },
  {
    role: "Product Designer",

    duration: "2018 - 2020",
  },
  {
    role: "Junior Designer",

    duration: "2016 - 2018",
  },
];

const logoShow = [tech1, tech2, tech3, tech4, tech5, tech6];
const aboutContent = [
  {
    title: "My story",
    desc: "I was born and raised in Cairo, Egypt. Ever since I was a child, I have had a passion for art and design. I was captivated by the vibrant colors and intricate details of the things around me, which inspired me to learn web design, where I delved deeper into the world of UX and product design.",
  },

  {
    title: "What I do now",
    desc: (
      <>
        Today {`I'm`} a Design Lead at <span className="underline">mano</span>{" "}
        improving the daily process of ordering groceries.
      </>
    ),
  },
];

const About = () => {
  return (
    <main className="flex flex-col max-w-6xl mx-auto w-full sm:px-4 py-8 space-y-20">
      {/* Close button */}
      <div className="flex items-center justify-center">
        <span className="w-12 h-12 cursor-pointer flex items-center justify-center border-2 border-card rounded-full">
          <IoIosClose className="w-8 h-8 text-muted cursor-pointer" />
        </span>
      </div>

      {/* About content */}

      <section className="space-y-5 flex flex-col">
        <div className="grid lg:grid-cols-2 gap-5">
          <main className="p-9 bg-card border border-card rounded-2xl lg:rounded-3xl flex flex-col space-y-7">
            <h3 className="text-2xl sm:text-3xl font-medium text-primary border-b border-card pb-4">
              {`What I'm about`}
            </h3>

            {aboutContent?.map((content, idx) => (
              <div key={idx} className="flex flex-col space-y-3">
                <h5 className="font-medium uppercase text-muted tracking-widest sm:text-sm text-xs">
                  {content?.title}
                </h5>

                <p className="text-primary text-lg  sm:text-xl leading-relaxed tracking-wide">
                  {content?.desc}
                </p>
              </div>
            ))}
          </main>
          <main className="grid grid-cols-1 gap-5 items-stretch">
            <div className="p-9 bg-card justify-center border border-card rounded-2xl lg:rounded-3xl flex flex-col space-y-7">
              <h5 className="font-medium uppercase text-muted tracking-widest sm:text-base text-sm">
                What I Do Best
              </h5>

              <div className="space-y-2">
                <h3 className="text-primary font-medium text-xl sm:text-[26px]">
                  Behaviour Design
                </h3>

                <p className="text-primary text-lg sm:text-xl leading-relaxed tracking-wide">
                  Today I'm a Design Lead at mano improving the daily process of
                  ordering groceries.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-[#f4f5f6] justify-center p-[10px] rounded-full flex items-center space-x-2">
                  <div className="bg-black w-2 h-2 rounded-full"></div>
                  <div className="bg-[#8a949e] w-2 h-2 rounded-full"></div>
                  <div className="bg-[#8a949e] w-2 h-2 rounded-full"></div>

                  <div className="bg-[#8a949e] w-2 h-2 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-card  justify-center space-y-7 flex-col rounded-2xl lg:rounded-4xl flex p-9 border border-card relative overflow-hidden">
              <h1 className="text-primary font-medium text-xl sm:text-[26px]">
                Stack I use
              </h1>

              <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[page-bg] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[page-bg] to-transparent z-10" />

              <MarqueeLogos logos={logoShow} />
            </div>
          </main>
        </div>

        {/* Section Below */}

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="p-9 bg-card justify-center border border-card rounded-2xl lg:rounded-3xl flex flex-col space-y-7">
            <h5 className="font-medium uppercase text-muted tracking-widest sm:text-base text-sm">
              experience
            </h5>

            <div className="space-y-4 lg:space-y-2">
              {Experience?.map((exp, idx) => (
                <div
                  key={idx}
                  className="flex lg:flex-row flex-col lg:items-center gap-0 lg:gap-7 justify-between"
                >
                  <h3 className="text-primary text-lg sm:text-xl leading-relaxed tracking-wide shrink-0">
                    {exp?.role}
                  </h3>

                  <span className="h-[1px] border-b border-card  w-full lg:block hidden">
                    {" "}
                  </span>

                  <p className="text-muted lg:text-primary text-lg sm:text-xl leading-relaxed tracking-wide shrink-0">
                    {exp?.company} {exp?.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Image
                src={story_img}
                alt="story"
                className="w-full h-full aspect-square rounded-2xl lg:rounded-3xl border border-card object-cover"
              />
            </div>

            <div className="bg-card justify-center space-y-7 flex-col rounded-2xl  relative sm:rounded-3xl flex p-9 border border-card">
              <p className="text-primary font-medium  text-xl sm:text-[26px]">
                Have a project in your mind ?
              </p>

              <button className="bg-accent p-3 sm:p-4 rounded-xl sm:text-lg cursor-pointer text-primary relative ">
                Copy Email
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

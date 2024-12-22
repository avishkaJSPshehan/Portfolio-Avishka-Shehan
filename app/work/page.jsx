"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: "Network Programming",
        title: "BLACKHAT",
        description:"The BLACKHAT project is an educational tool for ethical hacking, allowing remote command execution and file transfers on client machines within a local network.",
        stack: [
            {name: "Python"}
        ],
        image:"/work/thumb1.JPG",
        github:"https://github.com/avishkaJSPshehan/BlackHat-Socket-Programming-",
    },
    {
        num: '02',
        category: "Desktop Application",
        title: "Sorting Algorithm Visualizer",
        description:"The Sorting Algorithm Visualizer project showcases interactive visualizations of sorting algorithms like Bubble Sort and Quick Sort.",
        stack: [
            {name: "Python"}
        ],
        image:"/work/thumb2.JPG",
        github:"https://github.com/avishkaJSPshehan/Sorting-Algorithm-Visualizer",
    },
    {
        num: '03',
        category: "ML Model",
        title: "Heart Disease Prediction",
        description:"Utilizing machine learning algorithms in Python, this project predicts heart disease risks based on clinical data. ",
        stack: [
            {name: "Python,"},{name: "Jupyter Notebook"},
        ],
        image:"/work/thumb3.jpg",
        github:"https://github.com/avishkaJSPshehan/Heart-Disease-Predictor",
    },
    {
    num: "04",
    category: "Web Service",
    title: "Advance Authentication",
    description:
      "Welcome to the Authentication and Authorization System! This project provides a comprehensive and secure solution for managing user access in web applications. 🚀 ",
    stack: [{ name: "JavaScript," }],
    image: "/work/thumb4.jpg",
    github:
      "https://github.com/avishkaJSPshehan/Authentication-and-authorization.git",
  },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{delay:1.4,duration:0.4,ease:"easeIn"} }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px] items-center justify-center">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">{item.name}</li>
                                    );
                                })}
                            </ul>
                            <div className="border border-white/20 my-4"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project,index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;

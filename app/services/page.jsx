"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/Link";

const services = [
    {
        num:"01",
        title:"Web Development",
        description:"I specialize in building dynamic and robust web applications using the MERN stack to create efficient and user-friendly solutions.",
        href:"",
    },
    {
        num:"02",
        title:"Desktop Application Development",
        description:"I create efficient and powerful desktop applications using C#, .NET, and Python, delivering innovative software solutions.",
        href:"https://github.com/avishkaJSPshehan/Sorting-Algorithm-Visualizer",
    },
    {
        num:"03",
        title:"ML Model Development",
        description:"Passionate about leveraging Python to develop cutting-edge machine learning models for real-world applications.",
        href:"https://github.com/avishkaJSPshehan/Heart-Disease-Predictor",
    },
    {
        num:"04",
        title:"Mobile App Development",
        description:"Creating polished and performant mobile experiences with Flutter and Dart, blending innovation with user-centric design principles.",
        href:"",
    },
]

import {motion} from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.dev 
                    initial={{ opacity : 0 }}
                    animate={{
                        opacity:1,
                        transition:{delay:1.4, duration:0.4, ease:"easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service,index) => {
                        return (
                            <div key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}

                </motion.dev>
            </div>
        </section>
    );
};

export default Services;
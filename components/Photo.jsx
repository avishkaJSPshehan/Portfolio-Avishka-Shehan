"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full reletive">
            <motion.div>
                <div className="w-[298]px h-[298]px xl:w-[498px] xl:h-[498px] mix-blend-lighten">
                    <Image 
                        src="/assets/my_profile.png"
                        priority
                        quality={100}
                        fill
                        alt="Profile Image"
                        className="object-contain"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Photo;
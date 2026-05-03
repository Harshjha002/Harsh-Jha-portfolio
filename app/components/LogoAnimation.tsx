"use client"

import Image from "next/image"
import {motion} from "framer-motion"
import nextImgSkill from "../../public/assets/Nextjs_Skill.jpeg"
import Java from "../../public/assets/Java_Skill.png"
import SpringBoot from "../../public/assets/Spring_Boot_Skill.jpg"
import MySQL from "../../public/assets/MySQL_Skill.png"
import AWSSKill from "../../public/assets/AWS_Skill.webp"
import MongoDB from "../../public/assets/Mongo_DB_Skill.png"
import DevOps from "../../public/assets/DevOps_Skill.png"
const images = [
    { src: SpringBoot, alt: "Spring Boot logo" },
    { src: Java, alt: "Java logo" },
    { src: MySQL, alt: "MySQL database logo" },
    { src: AWSSKill, alt: "AWS cloud logo" },
    { src: MongoDB, alt: "MongoDB database logo" },
    { src: DevOps, alt: "DevOps tools logo" },
    { src: nextImgSkill, alt: "Next.js logo" },

    { src: SpringBoot, alt: "Spring Boot logo" },
    { src: Java, alt: "Java logo" },
    { src: MySQL, alt: "MySQL database logo" },
    { src: AWSSKill, alt: "AWS cloud logo" },
    { src: MongoDB, alt: "MongoDB database logo" },
    { src: DevOps, alt: "DevOps tools logo" },
    { src: nextImgSkill, alt: "Next.js logo" },

    { src: SpringBoot, alt: "Spring Boot logo" },
    { src: Java, alt: "Java logo" },
    { src: MySQL, alt: "MySQL database logo" },
    { src: AWSSKill, alt: "AWS cloud logo" },
    { src: MongoDB, alt: "MongoDB database logo" },
    { src: DevOps, alt: "DevOps tools logo" },
    { src: nextImgSkill, alt: "Next.js logo" },
];


const LogoAnimation = () => {
  return (
    <div className="py-8 my-24 bg-purple-300/10 skew-y-3 opacity-80">
        
        <div className="container mx-auto">
            <div 
            className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent">
                <motion.div
                className="flex gap-14 flex-none pr-14"
                animate={{
                    translateX: "-50%",
                }}

                transition={{
                    duration:35,
                    repeat:Infinity,
                    ease:"linear",
                    repeatType:"loop"
                }}
                >
                    {images.map((image , index) => (
                        <Image 
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        height={30}
                        />
                    ))}


                </motion.div>


            </div>

        </div>
        
    </div>
  )
}

export default LogoAnimation
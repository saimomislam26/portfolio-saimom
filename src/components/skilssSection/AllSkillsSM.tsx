import { FaHtml5 } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "React Query",
    icon: SiReactquery,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "Git",
    icon: FaGithub,
  },
  
];

const AllSkillsSM = () => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
            {skills.map((item, index) => {
                return (
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        key={index}
                        className="flex flex-col items-center"
                    >
                        <item.icon className="text-7xl text-orange" />
                        <p className="text-center mt-4">{item.skill}</p>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default AllSkillsSM
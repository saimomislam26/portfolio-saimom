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
import SingleSkill from "./SingleSkill";
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


const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", parseFloat(`0.${index}`))}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={item.icon}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default AllSkills
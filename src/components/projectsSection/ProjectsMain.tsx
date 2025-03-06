import { fadeIn } from "../../framerMotion/variant";
import { motion } from "framer-motion";

import ProjectsText from "./ProjectsText"
import SingleProject from "./SingleProject"



const projects = [
  {
    name: "Bug Resistance - [E-Learning]",
    year: "2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "https://bugresistance.com/",
  },
  {
    name: "Office Portal",
    year: "2023",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "https://managementportal-saimoms-projects.vercel.app/signin",
  },
  {
    name: "Quiz Game",
    year: "2024",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://glowing-snickerdoodle-8adedf.netlify.app/",
  },
  {
    name: " আয়বয়-[Finance Management]",
    year: "2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "https://ayebya.vercel.app/login",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link} />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsMain
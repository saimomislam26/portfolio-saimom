import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";

const experiences = [
  {
    job: "Full Stack Software Developer",
    company: "Core Devs ltd.",
    date: "2021 Sep - 2021 Dec",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Software Engineer",
    company: "Next Solution Lab",
    date: "2022 January - 2025 May",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Software Engineer",
    company: "Portonics Ltd.",
    date: "2025 June - Present",
    responsibilities: [
      "Working on microservice architecture.",
      "Participating in large scale application. 20 Million+ users.",
      "Working on the performance of microservices.",
      "Collaborating with big cross-functional teams.",
    ],
  },
 
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        )
      })}

    </div>
  )
}

export default AllExperience
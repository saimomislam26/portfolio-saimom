import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variant";


interface Experience {
    job: string;
    company: string;
    date: string;
    responsibilities: string[];
}

interface SingleExperienceProps {
    experience: Experience;
}


const SingleExperience: React.FC<SingleExperienceProps> = ({ experience }) => {
    return (
        <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-3">
            <p className="font-bold text-cyan">{experience.job}</p>
            <p className="text-orange">{experience.company}</p>
            <p className="text-lightGrey">{experience.date}</p>
            <ul className="list-disc mt-4 pl-4 text-white">{experience.responsibilities.map((responsibility, index) => {
                return (
                    <li key={index}>{responsibility}</li>
                )
            })}</ul>
        </motion.div >
    )
}

export default SingleExperience
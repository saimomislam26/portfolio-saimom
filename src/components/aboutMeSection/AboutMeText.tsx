import { Link } from "react-scroll"

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">I am a passionate and versatile Full Stack Software Engineer with over 3 years of experience in developing dynamic and secure web applications. Skilled in a wide range of technologies, including ReactJs, NextJs Node.js, Express, MongoDB, and AWS, I have a proven track record of building complex systems, such as AI-integrated platforms and multilingual websites. My expertise also includes cloud services like AWS EC2 and Lambda, as well as state management using Redux and React hooks. I am committed to delivering high-quality code, ensuring security, and leading projects to successful completion. With strong problem-solving abilities and a collaborative mindset, I thrive in fast-paced environments and always strive for continuous growth.</p>
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to='projects'>

        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</button>
      </Link>
    </div>
  )
}

export default AboutMeText